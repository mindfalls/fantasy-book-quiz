const  lotr = [
    {
        question: "Frodo is Bilbo's?",
        answers: [
            {text: "Son",correct: false},
            {text: "Nephew",correct: true},
            {text: "Grandchild",correct: false},
            {text: "Cousin",correct: false},
        ]
    },
    {
        question: "Where does Frodo Live?",
        answers: [
            {text: "Bag End",correct: true},
            {text: "UnderHill",correct: false},
            {text: "Baggins",correct: false},
            {text: "Needlehole",correct: false},
        ]
    },
    {
        question: "How many rings for the Dwarves?",
        answers: [
            {text: "3",correct: true},
            {text: "7",correct: false},
            {text: "9",correct: false},
            {text: "4",correct: false},
        ]
    },
    {
        question: "Who leads the wizard order?",
        answers: [
            {text: "Gandalf",correct: false},
            {text: "Saruman",correct: true},
            {text: "Radagast",correct: false},
            {text: "Elrond",correct: false},
        ]
    },
    {
        question: "Who carries Frodo to Rivendell?",
        answers: [
            {text: "Gandalf",correct: true},
            {text: "Arwen",correct: false},
            {text: "Glorfindel",correct: false},
            {text: "Aragorn",correct: false},
        ]
    },
    

]

let quizOne = document.getElementById("quizone")

let quizTwo = document.getElementById("quiztwo")

let quizThree = document.getElementById("quizthree")

let quizFour = document.getElementById("quizfour")

quizOne.addEventListener('click',startGame)
quizTwo.addEventListener('click',startGame)
quizThree.addEventListener('click',startGame)
let questionElement = document.getElementById("question")
let shuffledQuestions , currentQuestionIndex;
let answerButtonsElement = document.getElementById("answer-buttons")


function startGame() {
    quizOne.classList.add("hide")
    quizTwo.classList.add("hide")
    quizThree.classList.add("hide")
    shuffledQuestions = lotr.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    setQuestion()
}

function setQuestion() {
    question = document.getElementById("question")
    question.classList.remove("hide")
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')

    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
})
}

function nextQuestion() {

}
function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectAnswer(event) {

}

function incrementScore() {

}