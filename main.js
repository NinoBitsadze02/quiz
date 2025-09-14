
const question = document.getElementById("question");
let questionCount = document.getElementById("questionCount");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const next = document.getElementById("next");
let score = document.getElementById("score");

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Rome", "Tbilisi", "London"],
        answer: 0,

    },

    {
        question: "Whats 2+2?",
        options: ["3", "6", "4", "7"],
        answer: 2,
    },

    {
        question: "Which fruit is red?",
        options: ["Pear", "Orange", "Lemons", "Apple"],
        answer: 3,
    },

    {
        question: "Which is NOT a type of vehicle?",
        options: ["Car", "Train", "Cup", "Plane" ],
        answer: 2,
    },

    {
        question: "How do get you out of the house?",
        options: ["Window", "Door", "Chandelier", "Cupboard"],
        answer: 1,
    },
];

let currentIndex = 0;
question.textContent = questions[currentIndex].question;

let buttons = [answer1, answer2, answer3, answer4];
for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = questions[currentIndex].options[i];
}

next.addEventListener("click", nextQuestion);

function nextQuestion() {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        question.textContent = questions[currentIndex].question;
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].textContent = questions[currentIndex].options[i];
            buttons[i].disabled = false;

        } 
    } else {
        question.textContent = "Quiz finished";
    }
}
let userScore = 0;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            if (i === questions[currentIndex].answer) {
                userScore++;
                score.textContent = userScore + "/5";
            }
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].disabled = true;
            }
        });

    }









