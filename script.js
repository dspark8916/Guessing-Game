var questions = [ 
    {
        question: "What is 2 + 2?",
        answer: {
            a: "6",
            b: "2",
            c: "4",
            d: "5"
        },
        correctAnswer: "c"
    },
    {
        question: "What color is the sky?",
        answer: {
            a: "red",
            b: "yellow",
            c: "green",
            d: "blue",
        },
        correctAnswer: "d"
    },
    {
        question: "How many inches in a foot?",
        answer: {
            a: "12",
            b: "10",
            c: "14",
            d: "16",
        },
        correctAnswer: "a"
    },
    {
        question: "How many letters in the alphabet?",
        answer: {
            a: "32",
            b: "26",
            c: "24",
            d: "28",
        },
        correctAnswer: "b"
    },
    {
        question: "What sport does not use a round ball?",
        answer: {
            a: "Baseball",
            b: "Soccer",
            c: "Football",
            d: "Basketball",
        },
        correctAnswer: "c",
    },
];

var answers = [];
var questionEl = document.getElementById("question");
var headerEl = document.getElementById("questionHeader");
var quizDiv = document.getElementById("quiz");
var highScores = document.getElementById("scores");

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

function 