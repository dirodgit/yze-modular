-- FUFS Online - Database Schema

-- 1. Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create Rooms table
CREATE TABLE IF NOT EXISTS public.rooms (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code TEXT UNIQUE NOT NULL,
    gm_id TEXT, -- Simple ID for guest GMs
    name TEXT,
    combat_active BOOLEAN DEFAULT FALSE,
    current_actor_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create Messages table (Chat & Dice)
CREATE TABLE IF NOT EXISTS public.messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    room_id UUID REFERENCES public.rooms(id) ON DELETE CASCADE,
    sender_name TEXT NOT NULL,
    sender_id TEXT,
    content TEXT NOT NULL,
    type TEXT DEFAULT 'text', -- 'text', 'image', 'dice', 'system'
    metadata JSONB, -- For dice results or image dimensions
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Create Characters table (Synced Sheets)
CREATE TABLE IF NOT EXISTS public.characters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    room_id UUID REFERENCES public.rooms(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    data JSONB NOT NULL,
    stress INTEGER DEFAULT 0,
    is_npc BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Enable Realtime for all tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.rooms;
ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.characters;

-- 6. Setup RLS (Basic - Open for Guest Play)
-- In a production app, we would restrict this more, but for a public-link VTT:
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.characters ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public Rooms Access" ON public.rooms FOR ALL USING (true);
CREATE POLICY "Public Messages Access" ON public.messages FOR ALL USING (true);
CREATE POLICY "Public Characters Access" ON public.characters FOR ALL USING (true);
