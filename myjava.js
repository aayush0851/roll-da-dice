var y = 0;
let t = 20;
function fxn1() {
    "use strict";
    var x = Math.floor(Math.random() * 6) + 1;
    y=y+x;
    document.getElementById('score').innerHTML = y;
    document.getElementById('img').src="dice-"+x+".png";
    if (t==20) {
        cntdn();
    }
    else if(t<0){
        document.getElementById("rollButton").disabled=true;
//        alert("GAME-OVER");
//        alert("YOUR SCORE:"+" "+y);
    }
}
function cntdn() {
    if (t<0) {
        document.getElementById("rollButton").disabled=true;
//        alert("GAME-OVER");
//        alert("YOUR SCORE:"+" "+y);
    }
    else {
        document.getElementById("timer").innerHTML=t+"s";
        --t;
    }
    setTimeout(function(){cntdn();},1000);
}





            