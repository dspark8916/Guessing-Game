var questions = [ 
    {
        question: "What is 2 + 2?",
        answers: {
            a: "6",
            b: "2",
            c: "4",
            d: "5"
        },
        correctAnswer: "c"
    },
    {
        question: "What color is the sky?",
        answers: {
            a: "red",
            b: "yellow",
            c: "green",
            d: "blue",
        },
        correctAnswer: "d"
    },
    {
        question: "How many inches in a foot?",
        answers: {
            a: "12",
            b: "10",
            c: "14",
            d: "16",
        },
        correctAnswer: "a"
    },
    {
        question: "How many letters in the alphabet?",
        answers: {
            a: "32",
            b: "26",
            c: "24",
            d: "28",
        },
        correctAnswer: "b"
    },
    {
        question: "What sport does not use a round ball?",
        answers: {
            a: "Baseball",
            b: "Soccer",
            c: "Football",
            d: "Basketball",
        },
        correctAnswer: "c",
    },
];

var answers = [];
var intro = document.getElementById("rules");
var questionEl = document.getElementById("questions");
var headerEl = document.getElementById("questionHeader");
var quizDiv = document.getElementById("quiz");
var highScores = document.getElementById("scores");
var score = 0;

// This function needs to start the timer and add text to questions
// & answers and hide button and reveal question. 

document.getElementById("start").addEventListener("click", function() {
    var timer = 60;
    intro.style.display = "none";
    start.style.display = "none";
    questionEl.style.display = "block";
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

