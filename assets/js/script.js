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
            {text: "3",correct: false},
            {text: "7",correct: true},
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
            {text: "Gandalf",correct: false},
            {text: "Arwen",correct: false},
            {text: "Glorfindel",correct: true},
            {text: "Aragorn",correct: false},
        ]
    },
    

]

let quizOne = document.getElementById("quizone")

let quizTwo = document.getElementById("quiztwo")

let quizThree = document.getElementById("quizthree")

let nextButton = document.getElementById("next-button")

quizOne.addEventListener('click',startGame)
quizTwo.addEventListener('click',startGame)
quizThree.addEventListener('click',startGame)
let questionElement = document.getElementById("question")
let shuffledQuestions , currentQuestionIndex;
let answerButtonsElement = document.getElementById("answer-buttons")
let pickquiz = document.getElementById("pick-quiz")
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setQuestion()
  })

function startGame() {
    pickquiz.classList.add("hide")
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
        nextButton.classList.add("hide")
    }
}

function selectAnswer(e) { 
        const selectedButton = e.target;
        const isCorrect = selectedButton.dataset.correct === "true";
      
        if (isCorrect) { // Selected button will turn green or red according to class styling
          selectedButton.classList.add("correct");
          nextButton.classList.remove("hide");
        addScore()}
          else {
            selectedButton.classList.add("incorrect");
            nextButton.classList.remove("hide");
             }
             Array.from(answerButtonsElement.children).forEach(button => {
                if(button.dataset.correct === "true") {
                    button.classList.add("correct");
                }
                button.disabled = true
             })
        }
function addScore() {       
        let oldScore = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++oldScore +"/5";
    }