$( document ).ready(function() { // page loads before js is executed
    console.log( "ready!" );

// Questions object with 3 tiers(book 1,2,3) of 10 questions each.
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
const header = $('#headerH')

const timer = function(){
    // timer counts down from 30 to 0
    let count = 3
    let timerId = setInterval(function() {
        count--
        $('#timerH').html('Time left: ' + count + ' seconds')
        if (count===0){
            clearInterval(timerId);
            outOfTime(questions.questionOne, questions.questionTwo)
        }
    }, 1000)
    
};
const message = $('#messageH')
const answers = $('#answersH')
const correct = $('#correct')
const incorrect = $('#incorrect')
const score = $('#score')
const startButton = function() {
    $('#startButtonDiv').html('<button class="btn text-light bg-danger" id="startButton">Start</button>');
    $('#startButton').click(function() {
        ask = true;
        $(this).hide();
        askQuestion(questions.questionOne)
    });
}
const restartButton = function() {
    $('#restartButtonDiv').html('<button class="btn text-light bg-danger" id="restartButton">Start Over</button>');
    $('#restartButton').click(function() {
        correctAnswers = 0;
        incorrectAnswers = 0;
        playerScore = 0;
    });
}

// General Global Variables
let correctAnswers = 0;
let incorrectAnswers = 0;
let playerScore = 0;
let ask = false;
let allDone = false;

if (ask === false) {
    startButton();
}

if (allDone === true) {
    resetButton()
}

function outOfTime(currentQuestion, nextQuestion) {
    message.html('You ran out of time! The correct answer was ' + currentQuestion.answer)
    $('#centerImage').html('<img src="assets/images/iroh2.jpg" class="img-fluid" alt="Uncle Iroh">')
    $('#answers').hide();
    $('#timer').hide();
    setTimeout(function(){
        askQuestion(nextQuestion);
        $('#answers').show();
        $('#timer').show();
        $('#centerImage').hide();
    }, 4000)
    
}

function askQuestion(currentQuestion) {
    timer();
    message.html(currentQuestion.ask)
    $('#answersA').html(currentQuestion.choices[0])
    $('#answersB').html(currentQuestion.choices[1])
    $('#answersC').html(currentQuestion.choices[2])
    $('#answersD').html(currentQuestion.choices[3])
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