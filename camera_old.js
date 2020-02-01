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


// function Camera(model, qurentType, qurentMode) {
// 	Device.call(this, model); // model - чтобы мы сразу с model работали
//     this._qurentType = qurentType; // type: record or live
//     this._qurentMode = qurentMode; // mode: day or night

// 	this.setType = function(){
// 		if((this._qurentType == 'record') && (this._qurentType != 'live') && (this._state == true)){
// 			this._qurentType = 'live';
// 		if((this._qurentType == 'live') && (this._qurentType != 'record') && (this._state == true)){
// 				this._qurentType = 'record';
// 		}
// 	};
	
// 	this.getqurentType = function(){
// 		return this._qurentType;
//     };
    
//     this.setMode = function(){
// 		if((this._qurentMode == 'day') && (this._qurentMode != 'night') && (this._state == true)){
// 			this._qurentMode = 'night';
// 		};
// 		if((this._qurentMode == 'night') && (this._qurentMode != 'day') && (this._state == true)){
// 				this._qurentMode = 'day';
// 		};
// 	};

// 	this.getqurentType = function(){
// 		return this._qurentType;
// 	};
};
