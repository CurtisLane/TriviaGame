# TriviaGame
Fun trivia game built with HTML, CSS, JavaScript, and jQuery

# unit-4-game
## Star Wars role playing game using jQuery

### Play the game here: [Avatar: The Last Airbender Trivia Game](https://curtislane.github.io/trivia-game/)

### Directories:
* Root
    * [index.html](./index.html)
    * [assets](./assets)
        * [css](./assets/css)
            * [style.css](./assets/css/reset.css)
        * [favicon](.assets/favicon)
            * [favicon1.ico](./assets/favicon/favicon1.ico)
        * [font](./assets/font)
            * [herculanum](./assets/font/herculanum.ttf)
        * [images](./assets/images)
        * [javascript](./assets/javascript)
            * [app.js](./assets/javascript/app.js)

### Functions: 
    1. Title screen displayed with "Start" button.
        1a. Clicking the "Start" button initialized the game.
    2. 10 questions will be displayed one at a time
        2a. Four answer choices are desplayed below each question 
        2b.30 second count down timer will begin.
    3. An event listener function determines which answer the user clicks.
        3a. If a question is answered correctly, the page will display a message and image
        3b. If a quesiton is answered incorrectly, the page will display a message and image as well as the correct answer.
        3c. If the count down timer reaches 0, a message will display and image as well as the correct answer.
    4. Once all 10 questions have been asked: 
        4a. The total number of correct and incorrect answers will be displayed.
        4b. A score based on the percentage of correct answers.
        4c. A message is displayed rating the user's level of fandom.

