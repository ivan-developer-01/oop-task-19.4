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

function DeskLamp(brightnessLevel) {
	this.powerNeeded = 60;
	this.brightnessLevel = brightnessLevel || 10;
}

DeskLamp.prototype = new ElectricalAppliance();

function Computer(ram, cores, fanSpeed) {
	this.powerNeeded = 600;
	this.ram = ram || 2;
	this.cores = cores || 2;
	this.fanSpeed = fanSpeed || 1000;
}

Computer.prototype = new ElectricalAppliance();

// Create an instances
let deskLamp = new DeskLamp(8);
let computer = new Computer(16, 8, 2400);

console.log(deskLamp);
console.log(computer);

console.log(deskLamp.listProperties());
console.log("\n");
console.log(computer.listProperties());
