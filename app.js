var timer = 30;
var score = 0;
var hit;

function genScore() {
    
    score += 10;
    document.querySelector("#score").textContent = score;
}

function strike() {
    hit = Math.floor(Math.random()*10);
    document.querySelector("#strike").textContent = hit;
}

function bubble() {
    clutter = "";
    for(let i = 0 ; i <= 167 ; i++) {
        let rn = Math.floor(Math.random()*10);
        clutter  += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbottom").innerHTML = clutter;
}

function setTimer() {
    
    document.querySelector("#time").textContent = timer;

    let timeInt = setInterval(function() {
        
        if(timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer;
        }

        else {
            clearInterval(timeInt);
            document.querySelector("#pbottom").innerHTML = `<h1>GAME OVER <h1>`;
        }

    } , 1000);
}

document.querySelector("#pbottom").addEventListener("click" , function(dets) {
    let rn = Number(dets.target.textContent);
    if(rn === hit ) {
        genScore();
        strike();
        bubble();
    }

});



setTimer();
bubble();
strike();