var restartBtn = document.getElementById("btnRestart");
var range = document.getElementById("drawingSteps");
function restart(){
    ctx.clearRect(0, 0, c.width, c.height);
    sijerpinskiTrougao(numberOfIterations);
}

function skip(){
    sleeping = !sleeping;

    if(!sleeping){
        restart();
        btnRestart.disabled = false;
        range.disabled = true;
    } else {
        btnRestart.disabled = true;
        range.disabled = false;
        range.value = 100;
    }
    
}

function changeRange(){
    ctx.clearRect(0, 0, c.width, c.height);
    sijerpinskiTrougao(Math.floor(numberOfIterations * (range.value / 100)))
}