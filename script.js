// var startBtn = document.getElementById("start");

var questions = ["text"];
var answers = ["text"];
// var timer = 30;
var questionEl = document.getElementById("question");
var headerEl = document.getElementById("questionHeader");
// var clock = document.getElementById("countdown");

// function onStart() {
//     // This function needs to start the timer and add text to questions
//     // & answers and hide button and reveal question. 
//     timer = setInterval(clockTick, 1000);
//     questionEl.textContent = questions[0];
    
// }

// function clocktick will deduct 1 second from inital timer

document.getElementById("start").addEventListener("click", function() {
    var timer = 30;

    var clockTick = setInterval(function() {
        if(timer <= 0) {
            clearInterval(clockTick);
            document.getElementById("countdown").innerHTML = "Time's Up!!";
        }
        else {
            document.getElementById("countdown").innerHTML = timer + " seconds left!!";
        }
        timer -= 1;
}, 1000);
});

// startBtn.addEventListener("click", clockTick)