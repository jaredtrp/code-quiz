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

const questionContainerEl = document.getElementById('question-container');
const startText = document.getElementById('start-text');
const startButton = document.getElementById('start-btn');
const timerEl = document.getElementById('timer');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let questionShuffler, questionsIndex

startButton.addEventListener('click', startGame);

const questions = [
    {
        question: 'What is 2 + 1?',
        answers: [
            { text: '3', correct: true },
            { text: '22', correct: false},
            { text: '23', correct: false},
            { text: '24', correct: false}
        ]
    },
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '27', correct: false },
            { text: '23', correct: false },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'What is 2 + 3?',
        answers: [
            { text: '5', correct: true },
            { text: '27', correct: false },
            { text: '23', correct: false },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'What is 2 + 4?',
        answers: [
            { text: '6', correct: true },
            { text: '27', correct: false },
            { text: '23', correct: false },
            { text: '22', correct: false }
        ]
    },
]

// function questionShuffler = question.sort(() => Math.random() - .5)

function startGame() {
    startText.classList.add('hide')
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    // currentQuestionIndex = 0
    countdown();
    showQuestion();
};

function nextQuestion() {
    
};

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer() {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionsIndex + 1) {

    }
};

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

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
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Ends the quiz
        endQuiz();
      }
    });
  }