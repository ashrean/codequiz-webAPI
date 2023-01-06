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


