// page loads before js is executed
$( document ).ready(function() { 

    // 10 questions with choices and answers
    const questions = [
        {
            ask: 'How long was Aang frozen in ice before being discovered?',
            choices: ['4 years','10 years','50 years','100 years'],
            answer: '100 years',
            answerImage: '<br><img src="assets/images/angChakras.jpg" alt="Avatar Aang Chakras" height="auto" width="100%">'            
        },
        {
            ask: "What did Sokka's first girlfriend turn into?",
            choices: ['A fish','A river','The moon','The ocean'],
            answer: 'The moon',
            answerImage: '<br><img src="assets/images/iroh4.png" alt="Iroh quote" height="auto" width="100%">'            
        },
        {
            ask: 'What skill does Toph invent',
            choices: ['Rock bending','Metal bending','Echo-location','Lava bending'],
            answer: 'Metal bending',
            answerImage: '<br><img src="assets/images/iroh3.jpg" alt="Iroh quote" height="auto" width="100%">'            
        },
        {
            ask: 'Who teaches Aang firebending?',
            choices: ['Zuko','Iroh','Roku','Azula'],
            answer: 'Zuko',
            answerImage: '<br><img src="assets/images/Avatar_The_Last_Airbender-Aang-Katara-Sokka-Toph_Beifong-Prince_Zuko-Momo_lemur-Appa-748x598.jpg" alt="Avatar main characters" height="auto" width="100%">' 
        },
        {
            ask: 'What skill does Katara reluctantly learn during a full moon?',
            choices: ['Sewing','Bloodbending','gardening','Healing'],
            answer: 'Bloodbending',
            answerImage: '<br><img src="assets/images/BaSingSeIrohCrying.jpg" alt="Iroh sad" height="auto" width="100%">'            
        },
        {
            ask: 'What song did Chong sing before Aang and Katara enter the cave of two lovers?',
            choices: ['Cave of wonders','Lover\'s kiss','Romantic passage','Secret tunnel'],
            answer: 'Secret tunnel',
            answerImage: '<br><img src="assets/images/iroh2.jpg" alt="Iroh Quote" height="auto" width="100%">'            
        },
        {
            ask: 'Besides Aang, how many other airbenders are there?',
            choices: ['10','4','0','12'],
            answer: '0',
            answerImage: '<br><img src="assets/images/avatarthelastairbender.jpg" alt="Zuko" height="auto" width="100%">'            
        },
        {
            ask: 'What is the Avatar\'s flying lemur called?',
            choices: ['Momo','Popo','Lolo','Steve'],
            answer: 'Momo',
            answerImage: '<br><img src="assets/images/momo.jpg" alt="Momo" height="auto" width="100%">'            
        },
        {
            ask: 'What makes Sokka hallucinate in the desert?',
            choices: ['Dehydration','Cactus juice','Heat stroke','A snake bite'],
            answer: 'Cactus juice',
            answerImage: '<br><img src="assets/images/cactus-juice.jpg" alt="Sokka on cactus juice" height="auto" width="100%">'            
        },
        {
            ask: 'How does Aang defeat Firelord Ozai?',
            choices: ['Freezes him','Smashes him with a rock','Burns him alive','Takes away his bending ability'],
            answer: 'Takes away his bending ability',
            answerImage: '<br><img src="assets/images/Avatar_The_Last_Airbender-Aang-748x421.jpg" alt="Avatar Aang Chakras" height="auto" width="100%">'            
        },    
    ]


    // DOM Variables ==========================================
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

    // General Global Variables ====================================

    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let playerScore = 0;
    let questionNumber = 1;

    // Functions ==================================

    // Start button is displayed, when clicked the game begins
    const startButton = function() {
        
        // Message to user: Press Start To Begin!
        $('#messageH').html('Press Start To Begin!')

        // timer is displayed
        $('#timerH').html('Time left: 30 seconds')
        timerDiv.show()
        
        // Start button is displayed
        $('#startButtonDiv').html('<button type="button" class="btn text-light bg-danger" id="startButton">Start</button>');
        
        // All stats are set to original state
        correctAnswers = 0;
        incorrectAnswers = 0;
        playerScore = 0;
        questionNumber = 1;
        
        // Listens for user click on start button
        $('#startButton').click(function() {
            
            // Hide/show html elements, call nextQuestion function
            $(this).hide();
            message.show();
            nextQuestion();
        });
    }

    // Displays question and answers. Count down timer begins
    function askQuestion(indexPosition) {
        
        

        // Assign variables to the question and correct answer 
        const question = questions[indexPosition];
        const answer = question.answer;
        const answerImage = question.answerImage;

        

        // Show hidden HTML elements to user
        answers.show();
        $('#timerH').html('Time left: 30 seconds')
        timerDiv.show();


        // Timer counts down from 30 seconds
        let count = 30;
        let timerId = setInterval(function() {
            count--;
            $('#timerH').html('Time left: ' + count + ' seconds');
            if (count===0){

                // Increment the questionNumber
                questionNumber++;

                // Timer stops when it gets to 0
                clearInterval(timerId);
                
                // Message displayed
                message.html('You ran out of time! The answer was: ' + answer + answerImage);
                
                // Unecessary HTML elements hidden
                answers.hide();
                timerDiv.hide();
                
                // Incorrect answers incremented
                incorrectAnswers++;
                
                // After 4 seconds the nextQuestion function is called
                setTimeout(function(){
                    nextQuestion();
                }, 5000);
            }
        }, 1000);

        // Display question and answer choices to user
        message.html(question.ask);
        answerA.html(question.choices[0]);
        answerB.html(question.choices[1]);
        answerC.html(question.choices[2]);
        answerD.html(question.choices[3]);
        
        // Listens for click event on h5 elements inside the answers div
        $('#answers h5').on('click', function(){

            // Increment the questionNumber
            questionNumber++;
            
            // Prevents multiple incrementation of questionNumber, correctAnswers, and incorrectAnswers
            $('#answers h5').off('click');
            
            // Variable assigned to answer chosen by user
            var chosenAnswer = $(this).text()

            // If the correct answer is chosen
            if (chosenAnswer === answer) {
                
                // Message to user displayed
                message.html('Correct! The answer is: ' + answer + answerImage);
                
                // Hide unnecessary html elements
                answers.hide();
                timerDiv.hide();

                // Increment the correct answers variable
                correctAnswers++;

                // Stops the count down timer
                clearInterval(timerId);
                
                // Waits 4 seconds before displaying the next question or score
                setTimeout(function(){
                    nextQuestion();
                }, 5000)

            // If the incorrect answer if chosen
            } else {
                $('#answers h5').off('click');

                // Message to user displayed
                message.html('Incorrect! The answer was: ' + answer + answerImage);
                
                // Hide unnecessary html elements
                answers.hide();
                timerDiv.hide();

                // Increment the incorrect answers variable
                incorrectAnswers++;
                
                // Stops the count down timer
                clearInterval(timerId);
                
                // Waits four seconds before displaying next question or score
                setTimeout(function(){
                    nextQuestion();
                }, 5000)
            }
        });
    }

    // Generates the next question in sequence
    function nextQuestion() {
        if (questionNumber < 11) {
            askQuestion(questionNumber-1);            

        // Score with message is displayed after all 10 questions have finished
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
            
            // Player is given a score based on correct answers        
            playerScore = correctAnswers*10 + '%'


            // Hidden html elements are shown
            message.show();
            correct.show();
            incorrect.show();
            score.show();
            
            // Stats displayed 
            correct.html('Correct Answers: ' + correctAnswers)
            incorrect.html('Incorrect Answers: ' + incorrectAnswers)
            score.html('Your Score: ' + playerScore)
            
            // Generates restart button
            restartButton()

        }
    }






    // Restart button appears when game is over
    const restartButton = function() {
        $('#restartButtonDiv').html('<button type="button" class="btn text-light bg-danger" id="restartButton">Start Over</button>');
        
        // Clicking restart button resets game without reloading page
        $('#restartButton').click(function() {
            
            // HTML elements are hidden
            message.hide();
            correct.hide();
            incorrect.hide();
            score.hide();
            $(this).hide();
            
            // Start button is generated
            startButton();
        });
    }

// Function calls ==========================================

    // Display start button which initializes the game
    startButton();

}); // *close document.ready function