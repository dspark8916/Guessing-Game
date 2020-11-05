let questionIndex = [ 
    {
        quest: "What is 2 + 2?",
        a: "6",
        b: "2",
        c: "4",
        d: "5",
        right: "C"
    },
    {
        quest: "What color is the sky?",
        a: "red",
        b: "yellow",
        c: "green",
        d: "blue",
        right: "D"
    },
    {
        quest: "How many inches in a foot?",
        a: "12",
        b: "10",
        c: "14",
        d: "16",
        right: "A"
    },
    {
        quest: "How many letters in the alphabet?",
        a: "32",
        b: "26",
        c: "24",
        d: "28",
        right: "B"
    },
    {
        quest: "What sport does not use a round ball?",
        a: "Baseball",
        b: "Soccer",
        c: "Football",
        d: "Basketball",
        right: "C",
    }
];

var questions = 0;
var answers = [];
var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");
var answerD = document.getElementById("D");
var intro = document.getElementById("rules");
var questionEl = document.getElementById("questions");
var headerEl = document.getElementById("questionHeader");
var quizDiv = document.getElementById("quiz");
var highScores = document.getElementById("scores");
var score = 0;
var timer = 60;
var clockTick; 

// This function needs to start the timer and add text to questions
// & answers and hide button and reveal question. 

document.getElementById("start").addEventListener("click", function() {
    intro.style.display = "none";
    start.style.display = "none";
    setTimer();
});

function setTimer() {
    clockTick = setInterval(function() {
        if(timer <= 0) {
            clearInterval(clockTick);
            document.getElementById("countdown").innerHTML = "Time's Up!!";
        }
        else {
            document.getElementById("countdown").innerHTML = timer + " seconds left!!";
        }
        quizDiv.style.display = "block";
        timer -= 1;
        renderQuiz();
    }, 1000);
}

function renderQuiz() {
    if (questions === questionIndex.length) {
        quizDiv.style.display = "none";
        clearInterval(clockTick);
    }
    else {
        var storedQ = questionIndex[questions];
        headerEl.innerHTML = storedQ.quest;
        answerA.innerHTML = storedQ.a;
        answerB.innerHTML = storedQ.b;
        answerC.innerHTML = storedQ.c;
        answerD.innerHTML = storedQ.d;
    }
}

function rightAnswer(answer) {
    if (answer == questionIndex[questions].right) {
        score += 10;
    }
    else {
        timer = timer - 10;
    }
    questions++;
    renderQuiz();
}