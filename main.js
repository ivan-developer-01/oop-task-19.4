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
}

function DeskLamp(brightnessLevel) {
	this.powerNeeded = 60;
	this.brightnessLevel = brightnessLevel || 10;
}

DeskLamp.prototype = new ElectricalAppliance();

function Computer(ram) {
	this.powerNeeded = 600;
	this.ram = ram | 2;
}