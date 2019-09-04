var y = 0;
let z = 20;
function fxn1() {
    "use strict";
    var x = Math.floor(Math.random() * 6) + 1;
    y=y+x;
    document.getElementById('score').innerHTML = y;
    document.getElementById('img').src="dice-"+x+".png";

}


   


            