// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers


// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score



// Page begins with instructions and a start button to begin
// On start button click the following happens:
// Hide Instructions and start button
// Start timer
// Reveal first question and answers

// When an answer is selected, verify if correct
// If correct display "Correct!", change correct button bg to green, Add 1 to score
// If incorrect display "Wrong! Lose 2 Seconds", color button bg red, color correct button bg green, and deduct 2 seconds from timer
// Pause timer for 2 seconds to allow user to see the correct answer
// Automatically move on to the next question after 2 seconds

// For next question, the following happens:
// clear previous question and answers
// display next question and answers

// When time equals zero, the following happens:
// Remove question and answer
// Display "Game Over" and score
// give link to high scores



// const questionContainerEl = document.getElementById('quiz-container');
// const startText = document.getElementById('start-text');
// const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-button-container');
const timerEl = document.getElementById('timer-container');
const questionEl = document.getElementById('question-container');
const choices = Array.from(document.getElementById('choice-container'));

const correctBonus = 1;
const maxQuestions = 4;

let score = 0;
let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What is 2 + 1?',
        choice1: '3',
        choice2: '4',
        choice3: '5',
        choice4: '6',
        answer: 1
    },
    {
        question: 'What is 2 + 2?',
        choice1: '4',
        choice2: '5',
        choice3: '6',
        choice4: '7',
        answer: 2
    },
    {
        question: 'What is 2 + 3?',
        choice1: '5',
        choice2: '6',
        choice3: '7',
        choice4: '8',
        answer: 3
    },
    {
        question: 'What is 2 + 4?',
        choice1: '6',
        choice2: '7',
        choice3: '8',
        choice4: '9',
        answer: 4
    }
];

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    // countdown();
    newQuestions();
};

function newQuestions() {
        if(availableQuestions.length === 0 || questionsCounter >= maxQuestions) {
            endGame();
        }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionEl.innerText = currentQuestion.question;
    
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

startGame();

// choices.forEach(choice => {
//     choice.addEventListener('click', e => {
//         if(!acceptingAnswers) return;

//         acceptingAnswers = false;
//         const selectedChoice = e.target;
//         const selectedAnswer = selectedChoice.dataset["number"];
//         newQuestion();
//     });
// });

// function answerStatus (element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add('correct')
//     } else {
//         element.classList.add('incorrect')
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }

function countdown() {
    let timeLeft = 120;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 0) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = 'Time:' + timeLeft
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        timerEl.textContent = 'Time is up!'
        endGame();
        // Use `clearInterval()` to stop the timer
        // clearInterval(timeInterval);
        // Ends the quiz
        // endQuiz();
      }
    }, 1000);
  }

  function endGame() {
    // End the game either by running out of time or finishing all the questions
    // The score is the time remaining
  }