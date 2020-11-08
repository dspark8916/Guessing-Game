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
var points = document.getElementById("scores");
var endTime = document.querySelector("timer");
var over = document.getElementById("endGame");
var finalScore = document.getElementById("finalScore");
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var topScores = document.getElementById("scorelist");
var returnBtn = document.getElementById("back");
var clearBtn = document.getElementById("clear");
var listLink = document.getElementById("listLink");
// This function needs to start the timer and add text to questions
// & answers and hide button and reveal question. 

document.getElementById("start").addEventListener("click", function() {
    intro.style.display = "none";
    start.style.display = "none";
    setTimer();
});

function setTimer() {
    clockTick = setInterval(function() {
        startTimer()
    }, 1000);
}

function startTimer() {
    timing.innerHTML = timer + " seconds left!!";
    timer--;

    if (timer == 0) {
        clearInterval(clockTick);
        endTimer();
    }
    quizDiv.style.display = "block";
    renderQuiz();
}

function endTimer() {
    timing.innerHTML = "Time's Up!!";
}

function renderQuiz() {
    if (questions === questionIndex.length) {
        quizDiv.style.display = "none";
        clearInterval(clockTick);
        timing.style.display = "none";
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
        points.innerHTML = "Score: " + score;
    }
    else {
        timer = timer - 10;
        points.innerHTML = "Score: " + score;
   }
    questions++;
}

function scoreBoard() {
    quizDiv.style.display = "none";
    over.style.display = "block";
}

submitBtn.addEventListener("click", function() {
    over.style.display = "none";
    topScores.style.display = "block";
})

// returnBtn.addEventListener("click", function(){
//     topScores.style.display = "none";
//     quizDiv.style.display = "none";
//     returnBtn.style.display = "none";
//     clearBtn.style.display = "none";
//     intro.style.display = "block";
//     start.style.display = "block";
// })

// listLink.addEventListener("click", function(){
//     quizDiv.style.display = "none";
//     over.style.display = "none";
//     points.style.display = "none";
//     intro.style.display = "none";
//     start.style.display = "none";
//     topScores.style.display = "block";
//     returnBtn.style.display = "block";
//     clearBtn.style.display = "block";
// })

function savedScore() {
    var savedScore = document.getElementById("initials").value;

    var p = document.createElement("<p>");
    p.innerText = savedScore + score;
    topScores.appendChild(p);
}

