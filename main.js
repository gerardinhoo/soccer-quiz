// Select elements in the DOM
const questionNumber = document.querySelector(".question-num-value");
const totalQuestion = document.querySelector(".total-question");
const question = document.querySelector(".question");
const optionOne = document.querySelector(".option1");
const optionTwo = document.querySelector(".option2");
const optionThree = document.querySelector(".option3");
const optionFour = document.querySelector(".option4");
let questionIndex = 0;
let index = 0;

// Questions and answers

const questions = [
  {
    q: "Who won The FIFA Ballon D'or in 2005",
    options: ["Zidane", "Kaka", "Ronaldinho", "Ronaldo"],
    answer: 2,
  },
  {
    q: "Who won The Champions League in 2010",
    options: ["Barcelona", "Inter", "Bayern Munich", "Lyon"],
    answer: 1,
  },
  {
    q: "How many goals has Pelé scored in his carreer",
    options: ["500", "150", "700", "650"],
    answer: 3,
  },
  {
    q: "Who won The Golden Boot Trophy in the World Cup 2018",
    options: ["Modric", "C Ronaldo", "MBAPPE", "Kane"],
    answer: 3,
  },
  {
    q: "Who won The 2019 African Cup of Nations",
    options: ["Senegal", "Tunisia", "Algeria", "Nigeria"],
    answer: 2,
  },
];

// Set questions, options and question number;
totalQuestion.innerHTML = questions.length;

function load() {
  questionNumber.innerHTML = index + 1;
  question.innerHTML = questions[questionIndex].q;
  optionOne.innerHTML = questions[questionIndex].options[0];
  optionTwo.innerHTML = questions[questionIndex].options[1];
  optionThree.innerHTML = questions[questionIndex].options[2];
  optionFour.innerHTML = questions[questionIndex].options[3];
  index++;
}

window.onload = function() {
  load();
};
