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
        ask: 'Who teaches Aang firebending?',
        choices: ['A. Zuko','B. Iroh','C. Roku','D. Azula'],
        answer: 'A. Zuko',
    },
    question = {
        ask: 'What skill does Katara reluctantly learn during a full moon?',
        choices: ['A. Sewing','B. Bloodbending','C. gardening','D. Healing'],
        answer: 'B. Bloodbending',
    },
    question = {
        ask: 'What song did Chong sing before Aang and Katara enter the cave of two lovers?',
        choices: ['A. Cave of wonders','B. Lover\'s kiss','C. Romantic passage','D. Secret tunnel'],
        answer: 'D. Secret tunnel',
    },
    question = {
        ask: 'Besides Aang, how many other airbenders are there?',
        choices: ['A. 10','B. 4','C. 0','D. 12'],
        answer: 'C. 0',
    },
    question = {
        ask: 'What is the Avatar\'s flying lemur called?',
        choices: ['A. Momo','B. Popo','C. Lolo','D. Steve'],
        answer: 'A. Momo',
    },
    question = {
        ask: 'What makes Sokka hallucinate in the desert?',
        choices: ['A. Dehydration','B. Cactus juice','C. Heat stroke','D. A snake bite'],
        answer: 'B. Cactus juice',
    },
    question = {
        ask: 'How does Aang defeat Firelord Ozai?',
        choices: ['A. Freezes him','B. Smashes him with a rock','C. Burns him alive','D. Takes away his bending ability'],
        answer: 'D. Takes away his bending ability',
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
let questionNumber = 1;



// Functions



const startButton = function() {
    $('#startButtonDiv').html('<button class="btn text-light bg-danger" id="startButton">Start</button>');
    correctAnswers = 0;
    incorrectAnswers = 0;
    playerScore = 0;
    questionNumber = 1;
    $('#startButton').click(function() {
        $(this).hide();
        message.show();
        nextQuestion();
        
    });
}

function askQuestion(indexPosition, correctAnswer, wrongOne, wrongTwo, wrongThree) {
    answers.show();
    let count = 10;
    let timerId = setInterval(function() {
        count--
        $('#timerH').html('Time left: ' + count + ' seconds')
        if (count===0){
            clearInterval(timerId);
            message.html('You ran out of time! The correct answer was ' + questions[indexPosition].answer)
            answers.hide();
            timerDiv.hide();
            questionNumber++
            console.log(questionNumber)
            setTimeout(function(){
                nextQuestion();
            }, 4000)
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
        $('#timer').hide();
        questionNumber++
        console.log(questionNumber)
        setTimeout(function(){
            nextQuestion();
        }, 4000)
    })
    
    wrongOne.click(function() {
        message.html('Incorrect! The correct answer was ' + questions[indexPosition].answer);
        answers.hide();
        incorrectAnswers++;
        clearInterval(timerId);
        $('#timer').hide();
        questionNumber++
        console.log(questionNumber)
        setTimeout(function(){
            nextQuestion();
        }, 4000)
    })
    
    wrongTwo.click(function() {
        message.html('Incorrect! The correct answer was ' + questions[indexPosition].answer);
        answers.hide();
        incorrectAnswers++;
        clearInterval(timerId);
        $('#timer').hide();
        questionNumber++
        console.log(questionNumber)
        setTimeout(function(){
            nextQuestion();
        }, 4000)
    })
    
    wrongThree.click(function() {
        message.html('Incorrect! The correct answer was ' + questions[indexPosition].answer);
        answers.hide();
        incorrectAnswers++;
        clearInterval(timerId);
        $('#timer').hide();
        questionNumber++
        console.log(questionNumber)
        setTimeout(function(){
            nextQuestion();
        }, 4000)
    })
}

function nextQuestion() {
    if (questionNumber === 1) {
        askQuestion(0, answerD, answerA, answerB, answerC)
    } else if (questionNumber === 2) {
        askQuestion(1, answerC, answerA, answerB, answerD)
    } else if (questionNumber === 3) {
        askQuestion(2, answerB, answerA, answerD, answerC)
    } else if (questionNumber === 4) {
        askQuestion(3, answerA, answerD, answerB, answerC)
    } else if (questionNumber === 5) {
        askQuestion(4, answerB, answerA, answerD, answerC)
    } else if (questionNumber === 6) {
        askQuestion(5, answerD, answerA, answerB, answerC)
    } else if (questionNumber === 7) {
        askQuestion(6, answerC, answerA, answerB, answerD)
    } else if (questionNumber === 8) {
        askQuestion(7, answerA, answerD, answerB, answerC)
    } else if (questionNumber === 9) {
        askQuestion(8, answerB, answerA, answerD, answerC)
    } else if (questionNumber === 10) {
        askQuestion(9, answerD, answerA, answerB, answerC)
    } else if (questionNumber >= 11) {
        if (correctAnswers === 10){
            message.html('Wow you really know your stuff! You\'re a true fan.')
        } else if (correctAnswers < 10 && correctAnswers > 7) {
            message.html('You did pretty well. Not bad!')
        } else if (correctAnswers < 8 && correctAnswers > 3){
            message.html('Not too bad, might want to rewatch the show before trying again..')
        } else if (correctAnswers <= 3) {
            message.html('Have you even seen the show?')
        }
        message.show();
        correct.show();
        incorrect.show();
        score.show();
        playerScore = correctAnswers*10 + '%'
        correct.html('Correct Answers: ' + correctAnswers)
        incorrect.html('Incorrect Answers: ' + incorrectAnswers)
        score.html('Your Score: ' + playerScore)
        restartButton()
    }
}







const restartButton = function() {
    $('#restartButtonDiv').html('<button class="btn text-light bg-danger" id="restartButton">Start Over</button>');
    $('#restartButton').click(function() {
        correctAnswers = 0;
        incorrectAnswers = 0;
        playerScore = 0;
        questionNumber = 1;
        message.hide();
        correct.hide();
        incorrect.hide();
        score.hide();
        $('#restartButton').hide();
        startButton();
    });
}

startButton();


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