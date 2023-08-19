
var timer = 60;
var hitNum = 0;
var score = 0;
// bubble creation
function createBubble(){
    var create="";
    for(var i = 0; i < 200; i++) {
        var rn = Math.floor(Math.random()*10);
        create += `<div id="bubble">${rn}</div>`;
    }
    document.querySelector("#pnbt").innerHTML = create;
}
// setting time for 60 seconds
function runTimer(){
    var timerval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timmer").textContent = timer;
        } else {
            clearInterval(timerval);
            document.querySelector("#pnbt").innerHTML = `<h1><b>|-|-|-|-|-|--Game Over--|-|-|-|-|-|</b><br>|-----you scored ${score} points-----|<br><br><br>try again by refreshing page</h1>`
        }
    },1000)
}
// generate new number to hit
function getNewHit(){
    hitNum = Math.floor(Math.random()*10);
    document.querySelector("#hitt").textContent = hitNum;
}
// generate score if  hit number is equal to clicked number
function increaseScore(){
    score += 1;
    document.querySelector("#score").textContent = score;
}
// generate event bubble
document.querySelector("#pnbt")
.addEventListener("click", 
function(detls){
    var clickedNum = Number(detls.target.textContent);
    if(clickedNum === hitNum){
        increaseScore();
        createBubble()
        getNewHit();
    }
});
createBubble()
runTimer();
getNewHit();
increaseScore();
