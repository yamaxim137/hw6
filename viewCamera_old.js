function ViewCamera(camera, rootDom){
	this._camera = camera;
	this._rootDom = rootDom;
	this._state = document.createElement("div");
}

ViewCamera.prototype = Object.create(Devices.prototype);
ViewCamera.prototype.constructor = ViewCamera;

ViewCamera.prototype.stateChange = function() {
	if (this._camera._state) {
		this._state.innerHTML = "камера включена";
	} else{
		this._state.innerHTML = "камера отключена";
	}
};

ViewCamera.prototype.render = function() {    // создаёт все элементы 
	var name = document.createElement("div");
	name.innerHTML = "Камера";

	var camer = document.createElement("div");
	camer.className = "camera";

	var type = document.createElement("div");
	term.innerHTML = "Текущий тип съёмки" + this._camera._qurentType;

	var model = document.createElement("div");
	model.innerHTML = "Модель Sony";

	var onBtn = document.createElement("Button");
	onBtn.type = "button";
	onBtn.className = "on";
	onBtn.innerHTML = "включить камеру";
	onBtn.addEventListener('click', () =>{   
		this._camera.on();
		this.stateChange();
	});

	var offBtn = document.createElement("Button");
		onBtn.type = "button";
		offBtn.className = "off";
		offBtn.innerHTML = "отключить камеру";
		offBtn.addEventListener('click', () => {   
			this._camera.off();
			this.stateChange();
	});

	var plusTemp = document.createElement("Button");
	plusTemp.type = "button";
	plusTemp.className = "inc-temp";
	plusTemp.innerHTML = "увеличить температуру";
	// plusTemp.addEventListener('click', () => {   
	// 	this._camera.plusTemperature();
	// 	term.innerHTML = "Текущая температура" + this._camera._qurentTemperature;
	// });

	var minusTemp = document.createElement("Button");
	minusTemp.type = "button";
	minusTemp.className = "dec-temp";
	minusTemp.innerHTML = "уменьшить температуру";
	// minusTemp.addEventListener('click', () => {   
	// 	this._camera.minusTemperature();
	// 	term.innerHTML = "Текущая температура" + this._camera._qurentTemperature;
	// });

	this.stateChange(); // постоянная проверка состояния

	camer.appendChild(name);
	camer.appendChild(this._state);
	camer.appendChild(term);
	camer.appendChild(model);
	camer.appendChild(onBtn);
	camer.appendChild(offBtn);
	camer.appendChild(plusTemp);
	camer.appendChild(minusTemp);

	this._rootDom.appendChild(camer); // обернули

}