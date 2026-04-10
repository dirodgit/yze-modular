# Foundry VTT: YZE Modular System Implementation Plan

**Goal:** Create a Foundry VTT v13 system that implements the Year Zero Engine modularly, allowing for custom roll engines and dynamic skill management.

**Architecture:**
- **DataModels:** Use `foundry.abstract.TypeDataModel` for Actors and Items to ensure data integrity.
- **ApplicationV2:** Use the modern UI framework for Character and Item sheets.
- **System Settings:** A configuration menu to toggle between "Dice Pool" (counting 6s) and "Step Dice" (D6-D12).
- **Item-based Skills:** Skills and Specialties will be separate Item types, allowing users to create custom lists for different YZE settings.

**Tech Stack:** JavaScript (ESM), Handlebars (v2 Mixin), Foundry v13 API.

---

### Task 1: System Manifesto & Directory Structure

**Files:**
- Create: `./system.json`
- Create: `./template.json`
- Create: `./yze-modular.js` (Main Entry Point)
- Create: `./styles/yze-modular.css`

**Step 1: Create `system.json`**
Define name, version (`1.0.0`), and compatibility (v13 compatible).

**Step 2: Create `template.json`**
Define the basic Actor (Character) and Item types (Skill, Specialty, Equipment).

**Step 3: Commit**

---

### Task 2: Data Models (The Core)

**Files:**
- Create: `./module/data/ActorDataModel.js`
- Create: `./module/data/ItemDataModel.js`

**Step 1: Implement ActorDataModel**
Define the 4 base attributes: Strength, Agility, Wits, Empathy. Add placeholders for resources (Willpower, Health).

**Step 2: Implement ItemDataModel**
Distinguish between "Skill" (level 0-5) and "Specialty" (talent descriptions).

**Step 3: Commit**

---

### Task 3: System Settings & Roll Engine

**Files:**
- Create: `./module/settings.js`
- Create: `./module/dice.js`

**Step 1: Create Settings Registry**
Add a "Dice System" setting with values `pool` and `step`.

**Step 2: Create YZEDice class**
Implement logic for `roll()` that reads the system setting and counts successes.

**Step 3: Commit**

---

### Task 4: UI - ApplicationV2 Sheets

**Files:**
- Create: `./module/sheets/YZERoleplayingActorSheet.js`
- Create: `./templates/actor/character-sheet.hbs`

**Step 1: Build the HTML Template**
Create a premium, dark-themed layout for the Character Sheet using CSS Grid/Flexbox.

**Step 2: Link Actor data to Sheet**
Ensure attributes and item lists (skills/specialties) render correctly.

**Step 3: Commit**

---

### Task 5: Compendiums & Localization

**Files:**
- Create: `./lang/pt-BR.json`

**Step 1: Populate Localization**
Translate all core terms to Portuguese as per the SRD.

**Step 2: Setup Compendium metadata**
Configure the JSON for the core rulebook packs.

**Step 3: Commit**
