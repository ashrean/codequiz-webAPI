// We are going to be defining the variables //

var welcome = document.querySelector('#introduction');
var startBtn = document.querySelector('#start_button');
var intro = document.querySelector('#intro_page');
var questionEl = document.querySelector('#ask_question');

// Question buttons //
var buttons = document.querySelectorAll('.choices');
var answerBtn1 = document.querySelector('#answer_btn1');
var answerBtn2 = document.querySelector('#answer_btn2');
var answerBtn3 = document.querySelector('#answer_btn3');
var answerBtn4 = document.querySelector('#answer_btn4');
var answerBtn5 = document.querySelector('#answer_btn5');
var answerBtn6 = document.querySelector('#answer_btn6');
var answerBtn7 = document.querySelector('#answer_btn7');
var answerBtn8 = document.querySelector('#answer_btn8');
var answerBtn9 = document.querySelector('#answer_btn9');
var answerBtn10 = document.querySelector('#answer_btn10');

// Final Score //
var check = document.querySelector('#check_line');
var scoreBoard = document.querySelector('#submit_page');
var finalScore = document.querySelector("#final_score");
var playerIntial = document.querySelector('#initals');

// Submitting Score //
var submitBtn = document.querySelector("#submit_btn");
var highScoreSec = document.querySelector("highscore_section");
var scoreRecords = document.querySelector("#score_record");
var finish = document.querySelector("#finish");

var backBtn = document.querySelector("#back_btn");

// Other Variables //
var timeLeft = document.getElementById("#timer");
var secondsRemaining = 60;
var questionNum = 0;
var totalScore = 0;
var questCount = 1;


// Function: By clicking on the start button then the timer begins //

function beginCount() {
    var timeInterval = setInterval(function() {
        secondsLeft --;
        timeLeft.textContent = "Time Remaining" + "secondsRemaining" + "s";

        if (secondsRemaining <=0){
            clearInterval(timeInterval);
            timeLeft.textContent = "Time is up...";
            quizDone();

        } else if(questCount >= questions.length + 1 ){
            clearInterval(timeInterval);
            quizDone();
        }
    }, 1000);
}

// Click the button to start the quiz //
function startQuiz(){
    intro.style.display = "none";
    questionEl.style.display = "block";
    questionNum = 0;
    beginCount();
    showQuestion(questionNum);
}

// Showing the questions and answers //
function showQuestion (n) {
    questionEl.textContent = questions[n].question;
    answerBtn1.textContent = questions[n].choices[0];
    answerBtn2.textContent = questions[n].choices[1];
    answerBtn3.textContent = questions[n].choices[2];
    answerBtn4.textContent = questions[n].choices[3];
    answerBtn5.textContent = questions[n].choices[4];
    answerBtn6.textContent = questions[n].choices[5];
    answerBtn7.textContent = questions[n].choices[6];
    answerBtn8.textContent = questions[n].choices[7];
    answerBtn9.textContent = questions[n].choices[8];
    answerBtn10.textContent = questions[n].choices[9];
    questionNum = n;

}

// Display the correct answer if its right or wrong //
function checkAnswer(event) {
    event.preventDefault();
    checkLine.style.display = "block";
    setTimeout(function() {
        checkLine.style.display = "none";
    }, 1000);

    if (question[questionNum].answer == event.target.value) {
        checLine.style.display = "Correct!";
        totalScore = totalScore + 1;

    } else {
        secondsRemaining = secondsRemaining - 5;
        checLine.textContent = "Sorry thats wrong!" + question[questionNum].answer + " . ";
    }
    if (questionNum < question.length -1) {
        showQuestion(questionNum + 1 );

    } else {
        gameOver();
    }
questCount ++;
}

// When the timer hits 0 and all questions have been aswered //
function gameOver() {
    questionEl.style.display = "none";
    scoreBoard.style.display = "block";
    console.log(scoreBoard);
    finalScore.textContent = "The final score is:" + totalScore;
    timeLeft.style.display = "none";

};

// Getting score and initials from local storage //
function getScore() {
    var presentList = localStorage.getItem("ScoreList");
    if(currentList !== null){
        newlist = JSON.parse(currentList);
        return newlist;

    } else {
        newlist = [];
    }
    return newlist;
};

// Providing score to the score board //
function provideScore() {
    scoreRecords.innerHTML = "";
    scoreRecords.style.display = "block";

    var highscore_section = sort();
    var topFive = highscore_section.slice(0,5);
    for (var i = 0; i < topFive.length, i++) {
        var item = topFive[i];

    var li = document.createElement("li");
    li.textContent = item.user + " - " + item.score;
    li.setAttribute("data-index". i);
    scoreRecords.appendChild(li);
    }
};

function sort() {
    var unsortedLi = getScore();
    if(getScore == null) {
        return;

    }else {
        unsortedLi.sort(function(a,b) {
            return b.score - a.score;
        })
        return unsortedLi;
    };
};

function saveScore(){
    var scoreItem = {
        user: userInitial.value,
        score: totalScore
    }
    addItem(scoreItem);
    provideScore();
}

// Creating Event Listeners //
startBtn.addEventListener("click", startQuiz);
reactButtons.forEach(function(click){
    click.addEventListener("click", checkAnswer);
});

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    scoreBoard.style.display = "none";
    intro.style.display = "none";
    finalScore.style.display = "block";
    questionEl.style.display = "none";
    saveScore();
});

// Ranking score List //
scoreCheck.addEventListener("click", function(event){
    event.preventDefault();
    scoreBoard.style.display = "none";
    intro.style.display = "none";
    finalScore.style.display = "block";
    questionEl.style.display = "none";
    getScore();
});

// Back to the main page //
backBtn.addEventListener("click", function(event){
    event.preventDefault();
    scoreBoard.style.display = "none";
    intro.style.display = "none";
    finalScore.style.display = "block";
    questionEl.style.display = "none";
    location.reload();
});


