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
}

class Computer extends ElectricalAppliance {
	constructor(ram = 2, cores = 2, fanSpeed = 1000) {
		super();
		this.powerNeeded = 600;
		this.ram = ram;
		this.cores = cores;
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
