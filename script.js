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
        renderQuestions();
}, 1000);
    
});

function renderQuestions () {
    if (question === questionIndex.length) {
        questionsEl.style.display = "none";
        question = 0;
    }
    else {
        var storedQ = questionsIndex[question];
        headerEl.innerHTML = storedQ.quest;
        answerA.innerHTML = storedQ.a;
        answerB.innerHTML = storedQ.b;
        answerC.innerHTML = storedQ.c;
        answerD.innerHTML = storedQ.d;
    }
}

function correctAnswer(answer) {
    if (answer == questionIndex[question].right) {
        score += 10;
        question++;
        renderQuestions();
    }
    else {
        timer = timer -10;
        question++;
        renderQuestions();
    }
}