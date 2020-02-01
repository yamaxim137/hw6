var inter = function(begin, end) {
    // var condicion = document.createElement("div");
    
    var i = begin;



    setTimeout(function ff() {
        console.log(i);
        if (i < end) {      
            setTimeout(ff, 500);
            };
            i++;
            
    }, 500);

    

//     if(){
//         clearTimeout(); 
//     };

//     var addBtn = document.getElementById("add");
//     addBtn.className = "add-style";
//     addBtn.addEventListener('click', function(){
//     var condModel = new Condicioner("LG");
//     var viewcondModel = new ViewCondicioner(condModel, document.getElementById("root"));
//     viewcondModel.render();
// });
    
    // var onBtn = document.createElement("Button");
    //     onBtn.innerHTML = i;
    //     condicion.appendChild(onBtn);
         
    // let timerId = setInterval(() => {
    //     // onBtn.innerHTML = i;
    //     console.log(i);
    //     i++ ;
    // }, 1000);

    // if (i = end) {      
    //     clearInterval(timerId);
    // }
};

// inter(4,18);

