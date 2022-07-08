var body = document.querySelector("body");
var timer = document.querySelector("#time");
var instructions = document.querySelector(".instructions");
var beingButtonClick = document.querySelector("#beginButton");
var questionP = document.querySelector(".question");
var choicesBlock = document.querySelector(".choices");
var result = document.querySelector(".result");
var finalScore = document.querySelector(".final-score");
var endOfGame = document.querySelector(".end-of-game");

var buttonAnswerA = document.querySelector("#answer1");
var buttonAnswerB = document.querySelector("#answer2");
var buttonAnswerC = document.querySelector("#answer3");
var buttonAnswerD = document.querySelector("#answer4");

var currentTime = timer.textContent;
var currentQuestion = 0;

var submitInitials = document.querySelector(".initial-form");

