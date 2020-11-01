var startBtn = document.getElementById("start");

var questions = ["text"];
var answers = ["text"];
var timer;
var questionEl = document.getElementById("question");
var headerEl = document.getElementById("questionHeader");
var clock = document.getElementById("countdown");

function onStart() {
    // This function needs to start the timer and add text to questions
    // & answers and hide button and reveal question. 
    timer = setInterval(clockTick, 1000);
    questionEl.textContent = questions[0];
    
}

// function clocktick will deduct 1 second from inital timer

function clockTick() {

}

startBtn.addEventListener("click", onStart);