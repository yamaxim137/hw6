function Camera(model) {
	Devices.call(this, model); // model - что мы сразу с model работали
    this._qurentType = 'record';
    this._qurentMode = 'day';

	this.setType = function(value){
		if(this._state){
			this._qurentType = value;
	};

	this.getType = function(){
		return this._qurentType;
    	};
    
    	this.setMode = function(value){
		if(this._state){
			this._qurentMode = value;
		}
	};

	this.getMode = function(){
		return this._qurentMode;
	};
};