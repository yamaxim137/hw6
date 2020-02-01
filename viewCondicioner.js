function ViewCondicioner(condicioner, rootDom){
	this._condicioner = condicioner;
	this._rootDom = rootDom;
	this._state = document.createElement("div");
}

ViewCondicioner.prototype = Object.create(Devices.prototype);
ViewCondicioner.prototype.constructor = ViewCondicioner;

ViewCondicioner.prototype.stateChange = function() {
	if (this._condicioner._state) {
		this._state.innerHTML = "устройство включено";
	} else{
		this._state.innerHTML = "устройство выключено";
	}
};

ViewCondicioner.prototype.render = function() {    //создаёт все элементы
	var name = document.createElement("div");
	name.innerHTML = "Кондиционер";

	var condicion = document.createElement("div");
	condicion.className = "cond";

	var term = document.createElement("div");
	term.innerHTML = "Текущая температура: " + this._condicioner._qurentTemperature;

	var model = document.createElement("div");
	model.innerHTML = "Модель LG";

	//  логику реализуем ниже

	var onBtn = document.createElement("Button");
	onBtn.type = "button";
	onBtn.className = "on";
	onBtn.innerHTML = "включить устройство";
	onBtn.addEventListener('click', () =>{   // тут происходит потеря контекста вызова поэтому стрелочную функцию используем
		this._condicioner.on();
		this.stateChange();
	});

	var offBtn = document.createElement("Button");
		onBtn.type = "button";
		offBtn.className = "off";
		offBtn.innerHTML = "выключить устройство";
		offBtn.addEventListener('click', () => {   
			this._condicioner.off();
			this.stateChange();
	});

	var plusTemp = document.createElement("Button");
	plusTemp.type = "button";
	plusTemp.className = "inc-temp";
	plusTemp.innerHTML = "увеличить температуру";
	plusTemp.addEventListener('click', () => {   
		this._condicioner.plusTemperature();
		term.innerHTML = "Текущая температура: " + this._condicioner._qurentTemperature;
	});

	var minusTemp = document.createElement("Button");
	minusTemp.type = "button";
	minusTemp.className = "dec-temp";
	minusTemp.innerHTML = "уменьшить температуру";
	minusTemp.addEventListener('click', () => {   
		this._condicioner.minusTemperature();
		term.innerHTML = "Текущая температура: " + this._condicioner._qurentTemperature;
	});

	this.stateChange(); // постоянная проверка состояния

	condicion.appendChild(name);
	condicion.appendChild(this._state);
	condicion.appendChild(term);
	condicion.appendChild(model);
	condicion.appendChild(onBtn);
	condicion.appendChild(offBtn);
	condicion.appendChild(plusTemp);
	condicion.appendChild(minusTemp);

	this._rootDom.appendChild(condicion); // обернули

}