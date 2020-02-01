function Camera(model) {
	Devices.call(this, model);
	this._qurentType = 'record'; // record or live
	this._qurentMode = 'day'; // day or night
}

Camera.prototype = Object.create(Devices.prototype);
Camera.prototype.constructor = Camera;

Camera.prototype.chType = function(){
		if((this._qurentType == 'record') && (this._state == true)){
			this._qurentType = 'live';
		}else{
			if((this._qurentType == 'live') && (this._state == true)){
				this._qurentType = 'record';
			}else{ alert("ошибка записи - ставим тип RECORD");
			        this._qurentType = 'record';
		         };
		};
};

Camera.prototype.chMode = function(){
	if((this._qurentMode == 'day') && (this._state == true)){
		this._qurentMode = 'night';
	}else{
		if((this._qurentMode == 'night') && (this._state == true)){
			this._qurentMode = 'day';
		}else{ alert("ошибка  - ставим режим day");
				this._qurentMode = 'day';
			 };
	};
};

Camera.prototype.getQurentType = function(){
		return this._qurentType;
};

Camera.prototype.getQurentMode = function(){
	return this._qurentMode;
};