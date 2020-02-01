var addBtn = document.getElementById("add"); // Кондиционер
addBtn.className = "add-style";
addBtn.addEventListener('click', function(){
    var condModel = new Condicioner("LG");
    var viewcondModel = new ViewCondicioner(condModel, document.getElementById("root"));
    viewcondModel.render();
});

// var addBtn = document.getElementById("add-camera"); // Камера
// addBtn.className = "add-style";
// addBtn.addEventListener('click', function(){
//     var camerModel = new Camera("Sony");
//     var viewcamerModel = new ViewCamera(camerModel, document.getElementById("root"));
//     viewcamerModel.render();
// });

var addBtn = document.getElementById("add-camera"); // Камера
addBtn.className = "add-style";
addBtn.addEventListener('click', function(){
    var timerModel = new Camera("Sony");
    var viewTimerModel = new ViewCamera(timerModel, document.getElementById("root"));
    viewTimerModel.render();
});

var addBtn = document.getElementById("add-timer"); // Секундомер
addBtn.className = "add-style";
addBtn.addEventListener('click', function(){
    var timerModel = new Timer("My1");
    var viewTimerModel = new ViewTimer(timerModel, document.getElementById("root"));
    viewTimerModel.render();
});