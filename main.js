// Select elements in the DOM
const options = document.querySelector(".options").children;
const questionNumber = document.querySelector(".question-num-value");
const totalQuestion = document.querySelector(".total-question");
const question = document.querySelector(".question");
const optionOne = document.querySelector(".option1");
const optionTwo = document.querySelector(".option2");
const optionThree = document.querySelector(".option3");
const optionFour = document.querySelector(".option4");
let questionIndex;
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

function check(el) {
  if (el.id == questions[questionIndex].answer) {
    el.classList.add("correct");
  } else {
    el.classList.add("wrong");
  }
  disabledOptions();
}

// Disabled options
function disabledOptions() {
  for (let i = 0; i < options.length; i++) {
    options[i].classList.add("disabled");
    if (options[i].id == questions[questionIndex].answer) {
      options[i].classList.add("correct");
    }
  }
}

// Generate random number with questions
function randomQuestion() {
  let randomNumber = Math.floor(Math.random() * questions.length);
  questionIndex = randomNumber;
  load();
}

// Load the randomQuestions function
window.onload = function() {
  randomQuestion();
};

function refreshPage() {
  window.location.reload();
}
