// 4.    Класс “Охранная сигнализация”  вкл/выкл, если пароль от дома 
// введен 3 раза неверно то включить.

function Signaling(model, qurentPass) {
	Device.call(this, model); // model - что мы сразу с model работали
	this._qurentPass = qurentPass;
        
	this.controlPass = function(){
		for (let i = 0; i < 3; i++) {
			pass = prompt('введите пароль:');
			if (pass == this._qurentPass) {break;}
			if (i = 3){ this.on(); }	
		}
		if (this.state) alert('пароль верный');
	};
}
