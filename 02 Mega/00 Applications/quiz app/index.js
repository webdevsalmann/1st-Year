

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn")
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerBtnElement = document.getElementById("answer-btn");

let shuffledQuestions, currentQuestionIndex;

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startBtn.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = answer.text;
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerBtnElement.appendChild(button)
    });
}

function resetState() {
    nextBtn.classList.add("hide");
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild(answerBtnElement.firstChild);
    }
}


function selectAnswer(e) {
    const selectBtn = e.target;
    const correct = selectBtn.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerBtnElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    nextBtn.classList.remove("hide")
    if (shuffledQuestions.lengtn > currentQuestionIndex + 1) {
        nextBtn.classList.remove("hide");
    } else {
        startBtn.innerText = "Restart";
        startBtn.classList.remove("hide");
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        console.log("correct")
        element.classList.add("correct")
    } else if (!correct) {
        element.classList.add("wrong")
        console.log("Wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}



const questions = [
    {
        question: "what is 2 + 2 ?",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false }
        ]
    },
    
    {
        question: "what is 2 + 6 ?",
        answers: [
            { text: "4*2", correct: true },
            { text: "16/2", correct: true },
            { text: "8*1", correct: true },
            { text: "64/8", correct: true },
        ]
    },
    {
        question: "Who is Salman ?",
        answers: [
            { text: "18", correct: false },
            { text: "UI/UX", correct: false },
            { text: "Web Developer", correct: true },
            { text: "Graphic D", correct: false },
        ]
    },
    {
        question: "When whas the Portfolio Complete ?",
        answers: [
            { text: "Next Weekend", correct: true },
            { text: "Tomorrow", correct: false },
            { text: "The Day Before Tomorrow", correct: false },
            { text: "Dont Know", correct: false },
        ]
    },

]