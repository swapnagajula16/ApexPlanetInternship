
//adding questions
const questions = [
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        answers: [
            { text: "var", correct: "false" },
            { text: "let", correct: "false" },
            { text: "constant", correct: "false" },
            { text: "const", correct: "true" },
        ]
    },
    {
        question: "What will typeof null return in JavaScript?",
        answers: [
            { text: "object", correct: "true" },
            { text: "null", correct: "false" },
            { text: "undefined", correct: "false" },
            { text: "boolean", correct: "false" },
        ]
    },
    {
        question: "Which method is used to add an element at the end of an array?",
        answers: [
            { text: "push()", correct: "true" },
            { text: "pop()", correct: "false" },
            { text: "shift()", correct: "false" },
            { text: "unshift()", correct: "false" },
        ]
    },
    {
        question: "How do you write a comment in JavaScript?",
        answers: [
            { text: "!--comment--", correct: "false" },
            { text: "// comment", correct: "true" },
            { text: " # comment", correct: "false" },
            { text: "** comment **", correct: "false" },
        ]
    },
    {
        question: "What will console.log(0.1 + 0.2 === 0.3) output?",
        answers: [
            { text: "true", correct: "false" },
            { text: "false", correct: "true" },
            { text: "0.3", correct: "false" },
            { text: "NaN", correct: "false" },
        ]
    },
];


const questionElement = document.getElementById("question");
const answerbutton = document.getElementById("answerbutton");
const nextbutton = document.getElementById("next-btn");
let resultCard = document.getElementsByClassName("container");
const circularProgress = document.querySelector(".circular-progress");
const progressValue = document.querySelector(".progress-value");

let currentQuestionIndex = 0;
let score = 0;

resultCard[0].style.display="none";


function Quiz() {

    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    startQuestion();
}

function startQuestion() {
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetstate() {
    nextbutton.style.display = "none";
    while (answerbutton.firstChild) {
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";
}



function showScore() {
    resetstate();
    resultCard[0].style.display ="flex";
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}! `;
    let progressStartValue = 0;
    let progressEndValue = (score / questions.length) * 100;
    let speed = 100;

    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`
        circularProgress.style.background = `conic-gradient(#001e4d ${progressStartValue * 3.6}deg, #ededed 0deg)`
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
        console.log(progressStartValue);
    }, speed);
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = "block";
}
function handleNextButton() {
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        startQuestion();
    } else {
        showScore();
    }
}
nextbutton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        Quiz();
    }
});
Quiz();

// Joke js

document.getElementById("Jokebtn").addEventListener("click", joke);

async function joke() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };

  let a = await fetch("https://icanhazdadjoke.com/", config);
  let b = await a.json();
  document.getElementById("content").innerHTML = b.joke;
}