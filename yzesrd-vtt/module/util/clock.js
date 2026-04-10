

async function increaseClock(amount) {
    // increase completion of clocks on a sheet
    console.log("YZSRD | increaseClock: ", amount);
}

async function decreaseClock(amount) {
    // decrease completion of clocks on a sheet
    console.log("YZSRD | decreaseClock: ", amount);
}

export default class Clock {
    constructor(segments) {
        this._value = 0;
        this._segments = segments;
        console.log("YZSRD | Clock: ", segments);
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }
}