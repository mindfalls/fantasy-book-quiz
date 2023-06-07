// Question Arrays:
const firstLaw = [
    {question: "What is the first Law?",
     answers: [
      {text: "Forbidden to eat flesh", correct: false},
      {text: "Forbidden to touch the other side",correct:true},
      {text: "Forbidden to alter reality",correct: false},
      {text: "Forbidden to use magic on others",correct:false},

    ]
    },
    {question: "Logen often says 'You've got to be ______ about these things'",
     answers: [
      {text: "Optimistic", correct: false},
      {text: "Realistic",correct: true},
      {text: "Open minded",correct: false},
      {text: "Truthful",correct:false},

    ]
    },
    {question: "Cosca's favourite thing is?",
     answers: [
      {text: "Women", correct: false},
      {text: "Money",correct: false},
      {text: "Freedom",correct: false},
      {text: "Wine",correct:true},

   ]
   },
   {question: "Who is the best scout in the North?",
    answers: [
      {text: "Logen", correct: false},
      {text: "Rudd Threetrees",correct: false},
      {text: "Dogman",correct: true},
      {text: "Black Dow",correct:false},

   ]
   },
   {question: "How many were the original magi?",
    answers: [
      {text: "10", correct: false},
      {text: "18",correct: false},
      {text: "20",correct: false},
      {text: "12",correct:true},

   ]
   },
   ];

const locke = [
   {question: "In what district was Locke born?",
    answers: [
      {text: "Catchfire", correct: true},
      {text: "Shades Hill",correct: false},
      {text: "The Cauldron",correct: false},
      {text: "The Narrows",correct:false},

   ]
   },
   {question: "Who was the first 'Garrista' of the Gentlemen Bastards?",
    answers: [
      {text: "Locke Lamora", correct: false},
      {text: "Father Chains",correct: true},
      {text: "Barsavi",correct: false},
      {text: "Nicovante",correct:false},

   ]
   },
   {question: "What is Locke's master merchant alias?",
    answers: [
      {text: "Leocanto Costa", correct: false},
      {text: "Tavrinn Callas",correct: false},
      {text: "Lucas Fehrwight",correct: true},
      {text: "Jerome Valora",correct:false},

   ]
   },
   {question: "What is Jean Tannen's middle name?",
    answers: [
      {text: "Bruce", correct: false},
      {text: "Carlos",correct: false},
      {text: "Estevan",correct: true},
      {text: "Orrin",correct:false},

   ]
   },
   {question: "The spider is what?",
    answers: [
      {text: "A garrista", correct: false},
      {text: "A fence",correct: false},
      {text: "Secret Police",correct: true},
      {text: "Name of a Tavern",correct:false},

    ]
    },
    ];

const  lotr = [
   {question: "Frodo is Bilbo's?",
    answers: [
      {text: "Son",correct: false},
      {text: "Nephew",correct: true},
      {text: "Grandchild",correct: false},
      {text: "Cousin",correct: false},
    ]
    },
    {question: "Where does Frodo Live?",
     answers: [
      {text: "Bag End",correct: true},
      {text: "UnderHill",correct: false},
      {text: "Baggins",correct: false},
      {text: "Needlehole",correct: false},
    ]
    },
    {question: "How many rings for the Dwarves?",
     answers: [
      {text: "3",correct: false},
      {text: "7",correct: true},
      {text: "9",correct: false},
      {text: "4",correct: false},
    ]
    },
    {question: "Who leads the wizard order?",
     answers: [
      {text: "Gandalf",correct: false},
      {text: "Saruman",correct: true},
      {text: "Radagast",correct: false},
      {text: "Elrond",correct: false},
    ]
    },
    {question: "Who carries Frodo to Rivendell?",
     answers: [
      {text: "Gandalf",correct: false},
      {text: "Arwen",correct: false},
      {text: "Glorfindel",correct: true},
      {text: "Aragorn",correct: false},
    ]
    }, 
    ];

let quizOne = document.getElementById("quizone")
let quizTwo = document.getElementById("quiztwo")
let quizThree = document.getElementById("quizthree")
let nextButton = document.getElementById("next-button")
let intro = document.getElementById("intro")

quizOne.addEventListener('click',startGame)
quizTwo.addEventListener('click',startGameTwo)
quizThree.addEventListener('click',startGameThree)

let questionElement = document.getElementById("question")
let shuffledQuestions , currentQuestionIndex;
let answerButtonsElement = document.getElementById("answer-buttons")
let pickquiz = document.getElementById("pick-quiz")

nextButton.addEventListener('click', () => {
    if (shuffledQuestions.length > currentQuestionIndex +1){
    currentQuestionIndex++
    setQuestion()}
    else { finalScore()
    }
  })

  // Functions to start the game and set the quiz that was clicked
function startGame() {
    pickquiz.classList.add("hide")
    quizOne.classList.add("hide")
    quizTwo.classList.add("hide")
    quizThree.classList.add("hide")
    intro.classList.add("hide")
    shuffledQuestions = lotr.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    setQuestion()
}

function startGameTwo() {
    pickquiz.classList.add("hide")
    quizOne.classList.add("hide")
    quizTwo.classList.add("hide")
    quizThree.classList.add("hide")
    intro.classList.add("hide")
    shuffledQuestions = firstLaw.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    setQuestion()
}

function startGameThree() {
    pickquiz.classList.add("hide")
    quizOne.classList.add("hide")
    quizTwo.classList.add("hide")
    quizThree.classList.add("hide")
    intro.classList.add("hide")
    shuffledQuestions = locke.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    setQuestion()
}

// Sets the question in a random order
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

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        nextButton.classList.add("hide")
    }
}

function selectAnswer(e) { 
        const selectedButton = e.target;
        const isCorrect = selectedButton.dataset.correct === "true";

       // Selected button will turn green or red according to class styling
        if (isCorrect) {
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
        
        //Increments the score
function addScore() {       
        let oldScore = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++oldScore +"/5";
    }
    
    // sets the final score and reveals the reset button to go back to th start
function finalScore() {
    let finalScore = document.getElementById("final-score")
    finalScore.innerText = ("Final Score")
    resetState()
    let question = document.getElementById("question")
    question.classList.add("hide")
    let reset = document.getElementById("reset")
    reset.classList.remove("hide")
    reset.addEventListener('click', () => {
        window.location.reload()
    })
   
}

