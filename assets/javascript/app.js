// page loads before js is executed
$( document ).ready(function() { 
    console.log( "ready!" );

// 10 questions with choices and answers
const questions = {
    questionOne: {
        ask: 'How long was Aang frozen in ice before being discovered?',
        choices: ['A. 4 years','B. 10 years','C. 50 years','D. 100 years'],
        answer: 'D. 100 years',
    },
    questionTwo: {
        ask: "What did Sokka's first girlfriend turn into?",
        choices: ['A. A fish','B. A river','C. The moon','D. The ocean'],
        answer: 'C. The moon',
    },
    questionThree: {
        ask: 'What skill does Toph invent',
        choices: ['A. Rock bending','B. Metal bending','C. Echo-location','D. Lava bending'],
        answer: 'B. Metal bending',
    },
    questionFour: {
        ask: '',
        choices: ['A. ','B. ','C. ','D. '],
        answer: '',
    },
    questionFive: {
        ask: '',
        choices: ['A. ','B. ','C. ','D. '],
        answer: '',
    },
    questionSix: {
        ask: '',
        choices: ['A. ','B. ','C. ','D. '],
        answer: '',
    },
    questionSeven: {
        ask: '',
        choices: ['A. ','B. ','C. ','D. '],
        answer: '',
    },
    questionEight: {
        ask: '',
        choices: ['A. ','B. ','C. ','D. '],
        answer: '',
    },
    questionNine: {
        ask: '',
        choices: ['A. ','B. ','C. ','D. '],
        answer: '',
    },
    questionTen: {
        ask: '',
        choices: ['A. ','B. ','C. ','D. '],
        answer: '',
    },    
}    


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
let questionNumber = questions.questionOne;



// Functions



// timer appears on screen and counts down from 30 to 0
const startButton = function() {
    $('#startButtonDiv').html('<button class="btn text-light bg-danger" id="startButton">Start</button>');
    $('#startButton').click(function() {
        gameStarted = true;
        $(this).hide();
        if (questionNumber === questions.questionOne) {
            askQuestion(questionNumber)
        }
    });
}

const timer = function(seconds){
    let count = seconds;
    let timerId = setInterval(function() {
        count--
        $('#timerH').html('Time left: ' + count + ' seconds')
        if (count===0){
            clearInterval(timerId);
            outOfTime(questionNumber)
        }
    }, 1000)
    
};
 
function askQuestion(currentQuestion) {
    timer(1);
    message.html(currentQuestion.ask)
    answerA.html(currentQuestion.choices[0])
    answerB.html(currentQuestion.choices[1])
    answerC.html(currentQuestion.choices[2])
    answerD.html(currentQuestion.choices[3])
}

function outOfTime(currentQuestion) {
    message.html('You ran out of time! The correct answer was ' + currentQuestion.answer)
    questionNumber=questions.questionTwo
    $('#centerImage').html('<img src="assets/images/iroh2.jpg" class="img-fluid" alt="Uncle Iroh">')
    answers.hide();
    timerDiv.hide();
    setTimeout(function(){
        askQuestion(questionNumber);
        answers.show();
        timerDiv.show();
        $('#centerImage').hide();
    }, 4000)
    
}


const restartButton = function() {
    $('#restartButtonDiv').html('<button class="btn text-light bg-danger" id="restartButton">Start Over</button>');
    $('#restartButton').click(function() {
        correctAnswers = 0;
        incorrectAnswers = 0;
        playerScore = 0;
        gameStarted = false;
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


// player can choose book 1, 2 , or 3. Each has 10 questions
// timer counts down 30sec while question and answers are posted
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