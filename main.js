function ElectricalAppliance() {
	this.isTurnedOn = false;

	this.turnOn = function() {
		this.isTurnedOn = true;
	};

	this.turnOff = function() {
		this.isTurnedOn = false;
	};

	// The power is supposed to be in Watts and to be a number
	this.powerNeeded = null;

	this.listProperties = function() {
		let propertiesString = "";

		for (let property in this) {
			if (typeof this[property] === "function") {
				continue;
			}

			propertiesString += property + ": " + this[property] + "\n";
		}

		return propertiesString.slice(0, -1);
	};
}

function DeskLamp(brightnessLevel) {
	this.powerNeeded = 60;
	this.brightnessLevel = brightnessLevel || 10;
	this.setBrightnessLevel = function(brightnessLevel) {
		if (brightnessLevel > 100) {
			throw new RangeError("Brightness level cannot be higher than 100 or the lamp will be destroyed!");
		}

		this.brightnessLevel = brightnessLevel;
	};
}

DeskLamp.prototype = new ElectricalAppliance();

function Computer(ram, cores, fanSpeed) {
	this.powerNeeded = 600;
	this.ram = ram || 2;
	this.cores = cores || 2;
	this.fanSpeed = fanSpeed || 1000;
	this.setFanSpeed = function(fanSpeed) {
		if (fanSpeed > 10000) {
			throw new RangeError("Fan speed cannot be higher than 10000 or the computer will fly away!");
		}

		this.fanSpeed = fanSpeed;
	};
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
