
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
        answer: "Paris",

    },

    {
        question: "Whats 2+2?",
        options: ["3", "6", "4", "7"],
        answer: "4",
    },

    {
        question: "Which fruit is red?",
        options: ["Pear", "Orange", "Lemons", "Apple"],
        answer: "Apple",
    },

    {
        question: "Which is NOT a type of vehicle?",
        options: ["Car", "Train", "Cup", "Plane" ],
        answer: "Cup",
    },

    {
        question: "How do get you out of the house?",
        options: ["Window", "Door", "Chandelier", "Cupboard"],
        answer: "Door",
    },
];

let currentIndex = 0;
question.textContent = questions[currentIndex].question;

let buttons = [answer1. answer2, answer3, answer4];






