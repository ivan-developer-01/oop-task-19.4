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

function DeskLamp() {
	this.powerNeeded = 60;
}