function Condicioner(model) {
	Devices.call(this, model); // model - что мы сразу с model работали
	this._qurentTemperature = 0;
}

Condicioner.prototype = Object.create(Devices.prototype);
Condicioner.prototype.constructor = Condicioner;

Condicioner.prototype.plusTemperature = function(){
		if((this._qurentTemperature < 26) && (this._state == true)){
			this._qurentTemperature += 2;
		}
};

Condicioner.prototype.minusTemperature = function(){
		if((this._qurentTemperature > -6) && (this._state == true)){
			this._qurentTemperature -= 2;
		}
};

Condicioner.prototype.getQurentTemperature = function(){
		return this._qurentTemperature;
};

