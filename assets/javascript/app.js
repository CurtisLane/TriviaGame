// page loads before js is executed
$( document ).ready(function() { 

// 10 questions with choices and answers
const questions = [
    question = {
        ask: 'How long was Aang frozen in ice before being discovered?',
        choices: ['A. 4 years','B. 10 years','C. 50 years','D. 100 years'],
        answer: 'D. 100 years',
    },
    question = {
        ask: "What did Sokka's first girlfriend turn into?",
        choices: ['A. A fish','B. A river','C. The moon','D. The ocean'],
        answer: 'C. The moon',
    },
    question = {
        ask: 'What skill does Toph invent',
        choices: ['A. Rock bending','B. Metal bending','C. Echo-location','D. Lava bending'],
        answer: 'B. Metal bending',
    },
    question = {
        ask: '',
        choices: ['A. ','B. ','C. ','D. '],
        answer: '',
    },
    question = {
        ask: '',
        choices: ['A. ','B. ','C. ','D. '],
        answer: '',
    },
    question = {
        ask: '',
        choices: ['A. ','B. ','C. ','D. '],
        answer: '',
    },
    question = {
        ask: '',
        choices: ['A. ','B. ','C. ','D. '],
        answer: '',
    },
    question = {
        ask: '',
        choices: ['A. ','B. ','C. ','D. '],
        answer: '',
    },
    question = {
        ask: '',
        choices: ['A. ','B. ','C. ','D. '],
        answer: '',
    },
    question = {
        ask: 'FInal Question',
        choices: ['A. ','B. ','C. ','D. '],
        answer: '',
    },    
]


// DOM Variables
const timerDiv = $('#timer')
const message = $('#messageH');
const answers = $('#answers')
const answerA = $('#answersA');
const answerB = $('#answersB');
const answerC = $('#answersC');
const answerD = $('#answersD');
const correct = $('#correct');
const incorrect = $('#incorrect');
const score = $('#score');

// General Global Variables
let correctAnswers = 0;
let incorrectAnswers = 0;
let playerScore = 0;
let gameStarted = false;
let gameOver = false;
let questionNumber = 1;



// Functions



// timer appears on screen and counts down from 30 to 0
const startButton = function() {
    $('#startButtonDiv').html('<button class="btn text-light bg-danger" id="startButton">Start</button>');
    $('#startButton').click(function() {
        gameStarted = true;
        $(this).hide();
        if (questionNumber === 1) {
            askQuestion(0, answerD, answerA, answerB, answerC)
        }
    });
}
function askQuestion(indexPosition, correctAnswer, wrongOne, wrongTwo, wrongThree) {
    let count = 3;
    let timerId = setInterval(function() {
        count--
        $('#timerH').html('Time left: ' + count + ' seconds')
        if (count===0){
            clearInterval(timerId);
            outOfTime(questions[indexPosition])
        }
    }, 1000)
    message.html(questions[indexPosition].ask);
    answerA.html(questions[indexPosition].choices[0]);
    answerB.html(questions[indexPosition].choices[1]);
    answerC.html(questions[indexPosition].choices[2]);
    answerD.html(questions[indexPosition].choices[3]);
    correctAnswer.click(function() {
        message.html('Correct!');
        answers.hide();
        correctAnswers++;
        clearInterval(timerId);
        $('#timer').remove();
    })
    wrongOne.click(function() {
        message.html('Incorrect! The correct answer was ' + questions[indexPosition].answer);
        answers.hide();
        incorrectAnswers++;
        clearInterval(timerId);
        $('#timer').remove();
    })
    wrongTwo.click(function() {
        message.html('Incorrect! The correct answer was ' + questions[indexPosition].answer);
        answers.hide();
        incorrectAnswers++;
        clearInterval(timerId);
        $('#timer').remove();
    })
    wrongThree.click(function() {
        message.html('Incorrect! The correct answer was ' + questions[indexPosition].answer);
        answers.hide();
        incorrectAnswers++;
        clearInterval(timerId);
        $('#timer').remove();
    })
}

function outOfTime(currentQuestion) {
    message.html('You ran out of time! The correct answer was ' + currentQuestion.answer)
    answers.hide();
    timerDiv.hide();
}


const restartButton = function() {
    $('#restartButtonDiv').html('<button class="btn text-light bg-danger" id="restartButton">Start Over</button>');
    $('#restartButton').click(function() {
        correctAnswers = 0;
        incorrectAnswers = 0;
        playerScore = 0;
        gameStarted = false;
        startButton()
    });
}


// Start button on screen at the beginning of game and after restart button press
if (gameStarted === false) {
    startButton();
}

// Restart button displayed when game is over and stats are displayed
if (gameOver === true) {
    restartButton()
}


// if correct answer is chosen, a page saying correct with an uncle ozai quote appears 
// after a few seconds a new question is posted and the timer starts
// if incorrect answer is chosen, a page displays the correct answer with zuko saying that's rough buddy
// if time runs out, you get out of time dialogue on the page with a graphic
// once finished, player game stats are displayed
// player is graded based on correct guesses and evaluated for fandom level
// after game is finished, start over button appears
// player can choose book 1, 2, or 4 again.
// start over button does not relaod the page





}); // *close document.ready function