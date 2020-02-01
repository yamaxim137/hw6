ViewCamera.prototype.stateChange = function() {
	if (this._signaling._state) {
		this._state.innerHTML = "сигнализация включена";
	} else{
		this._state.innerHTML = "сигнализация ОТКЛЮЧЕНА!";
	}
};

ViewCamera.prototype.render = function() {    // создаёт все элементы 
	var name = document.createElement("div");
	name.innerHTML = "Камера";

	var camer = document.createElement("div");
	camer.className = "camera";

	var type = document.createElement("div");
	type.innerHTML = "Текущий тип съёмки: " + this._camera._qurentType;

	var mode = document.createElement("div");
	mode.innerHTML = "Текущий режим: " + this._camera._qurentMode;

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

	var chType = document.createElement("Button");
	chType.type = "button";
	chType.className = "ch-type";
	chType.innerHTML = "изменить тип";
	chType.addEventListener('click', () => {   
		this._camera.chType();
		type.innerHTML = "Текущий тип съёмки: " + this._camera._qurentType;
	});

	var chMode = document.createElement("Button");
	chMode.type = "button";
	chMode.className = "ch-mode";
	chMode.innerHTML = "изменить режим";
	chMode.addEventListener('click', () => {   
		this._camera.chMode();
		mode.innerHTML = "Текущий режим съёмки: " + this._camera._qurentMode;
	});

	this.stateChange(); // постоянная проверка состояния

	camer.appendChild(name);
	camer.appendChild(this._state);
	camer.appendChild(type);
	camer.appendChild(mode);
	camer.appendChild(model);
	camer.appendChild(onBtn);
	camer.appendChild(offBtn);
	camer.appendChild(chType);
	camer.appendChild(chMode);

	this._rootDom.appendChild(camer); // обернули

}