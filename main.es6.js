class ElectricalAppliance {
	constructor() {
		this.isTurnedOn = false;
		// The power is supposed to be in Watts and to be a number
		this.powerNeeded = null;
	}

	turnOn() {
		this.isTurnedOn = true;
	}

	turnOff() {
		this.isTurnedOn = false;
	}

	listProperties() {
		let propertiesString = "";

		for (let property in this) {
			if (typeof this[property] === "function") {
				continue;
			}

			propertiesString += property + ": " + this[property] + "\n";
		}

		return propertiesString.slice(0, -1);
	}
}

class DeskLamp extends ElectricalAppliance {
	constructor(brightnessLevel = 10) {
		super();
		this.powerNeeded = 60;
		this.brightnessLevel = brightnessLevel;
	}

	setBrightnessLevel(brightnessLevel) {
		if (brightnessLevel > 100) {
			throw new RangeError("Brightness level cannot be higher than 100 or the lamp will be destroyed!");
		}

		this.brightnessLevel = brightnessLevel;
	}
}

class Computer extends ElectricalAppliance {
	constructor(ram = 2, cores = 2, fanSpeed = 1000) {
		super();
		this.powerNeeded = 600;
		this.ram = ram;
		this.cores = cores;
		this.fanSpeed = fanSpeed;
	}

	setFanSpeed(fanSpeed) {
		if (fanSpeed > 10000) {
			throw new RangeError("Fan speed cannot be higher than 10000 or the computer will fly away!");
		}

		this.fanSpeed = fanSpeed;
	}
}

// Create an instances
let deskLamp = new DeskLamp(8);
let computer = new Computer(16, 8, 2400);

console.log(deskLamp);
console.log(computer);

console.log(deskLamp.listProperties());
console.log("\n");
console.log(computer.listProperties());

console.log(deskLamp.brightnessLevel);
deskLamp.setBrightnessLevel(50);
console.log(deskLamp.brightnessLevel);
try {
	deskLamp.setBrightnessLevel(1000);
} catch (error) {
	console.error(error.message);
}


console.log(computer.fanSpeed);
computer.setFanSpeed(2000);
console.log(computer.fanSpeed);
try {
	computer.setFanSpeed(11000);
} catch (error) {
	console.error(error.message);
}
