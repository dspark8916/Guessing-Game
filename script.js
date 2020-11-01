var questions = ["text"];
var answers = ["text"];
var questionEl = document.getElementById("question");
var headerEl = document.getElementById("questionHeader");

// This function needs to start the timer and add text to questions
// & answers and hide button and reveal question. 

document.getElementById("start").addEventListener("click", function() {
    var timer = 60;

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
