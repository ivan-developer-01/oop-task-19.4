function ElectricalAppliance() {
	this.isTurnedOn = false;

	this.turnOn = function() {
		this.isTurnedOn = true;
	};

	this.turnOff = function() {
		this.isTurnedOn = false;
	};

	this.powerNeeded = null;
}