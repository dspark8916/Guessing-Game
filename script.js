let questionIndex = [ 
    {
        quest: "Who is the richest person in the world as of 2020?",
        a: "A. Bill Gates",
        b: "B. Warren Buffet",
        c: "C. Jeff Bezos",
        d: "D. Richard Branson",
        right: "C"
    },
    {
        quest: "What is the most popular sport in the World?",
        a: "A. Football",
        b: "B. Basketball",
        c: "C. Baseball",
        d: "D. Soccer",
        right: "D"
    },
    {
        quest: "How many Wonders of the World are there?",
        a: "A. 7",
        b: "B. 10",
        c: "C. 12",
        d: "D. 8",
        right: "A"
    },
    {
        quest: "What is the oldest language in the world?",
        a: "A. English",
        b: "B. Tamil",
        c: "C. Latin",
        d: "D. Greek",
        right: "B"
    },
    {
        quest: "Who created the first social media site?",
        a: "A. Mark Zuckerberg",
        b: "B. Tom Anderson",
        c: "C. Andrew Weinreich",
        d: "D. Chris DeWolfe",
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
let score = 0;
var timer = 60;
var clockTick; 
var timing = document.getElementById("countdown");
var endTime = document.querySelector("timer");
var topScores = document.getElementById("scorelist");
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
            timing.innerHTML = "Time's Up!!";
        }
        else {
            timing.innerHTML = timer + " seconds left!!";
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
        score += 25;
        document.getElementById("scores").innerHTML = "Score: " + score;
    }
    else {
        timer = timer - 10;
        document.getElementById("scores").innerHTML = "Score: " + score;
      
    }
    questions++;
}

function endQuiz() {
    if (questions < questionIndex.length) {
        score();
    }
}