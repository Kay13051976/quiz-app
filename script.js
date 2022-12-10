const questionData = [
  {
    question: "1.Wich one is not operation system",
    a: "Mac",
    b: "Microsoftword",
    c: "Linux",
    d: "Window11",
    correct: "b",
  },
  {
    question: "2.Wich one is a Web Browser",
    a: "Google Chrome",
    b: "Keyboard",
    c: "Monitor",
    d: "Mouse",
    correct: "a",
  },
  {
    question: "3.Which one is a hardware",
    a: "Keyboard",
    b: "Mouse",
    c: "Monitor",
    d: "All above",
    correct: "d",
  },
];
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const container = document.querySelector(".question-container");
const choiceA = document.getElementById("a-text");
const choiceB = document.getElementById("b-text");
const choiceC = document.getElementById("c-text");
const choiceD = document.getElementById("d-text");

const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;
loadQuestion();

function loadQuestion() {
  const currentQuizData = questionData[currentQuestion];
  questionEl.innerText = currentQuizData.question;
  choiceA.innerText = currentQuizData.a;
  choiceB.innerText = currentQuizData.b;
  choiceC.innerText = currentQuizData.c;
  choiceD.innerText = currentQuizData.d;
}
function checkChoice() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
submitBtn.addEventListener(`click`, () => {
  let answer = getChoiceAnswer();
  if (answer) {
    if (answer === questionData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questionData.length) {
      loadQuestion();
    } else {
      container.innerHTML = `<h2>Totol Score ${score}/${questionData.length}</h2>`;
    }
  }
});

function getChoiceAnswer() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
