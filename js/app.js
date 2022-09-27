const answers = [
  "Yes!",
  "No",
  "Very Unlikely",
  "Oh Heavens No",
  "Ask Your Mom",
  "Totally!",
  "Make it happen",
  "Nah..",
  "Perhaps",
  "I Know Everything... Except That",
  "Heck Yeah!",
  "Bad Idea",
  "Good Idea!",
  "Love it! Yes!",
  "Maybe",
  "You Wish",
  "I forgot the question",
  "Ain't Nobody Got Time For That",
  "I'll Tell You Later",
  "Ask Google",
  "Look to the sky for your answer",
  "Ask Your Dad",
  "Keep Looking For The Answer.",
];

const results = [];

const app = document.getElementById("app");

const h1 = document.createElement("h1");
h1.innerText = "8 Ball";
h1.classList.add("alert");
h1.classList.add("alert-info");

const ball = document.createElement("div");
ball.className = "ball";
ball.innerHTML = '<div id="answer">?</div>';

const resultCounter = document.createElement("h2");
resultCounter.innerText = "No entries yet";

const table = document.createElement("table");
table.id = "resultsTable";
table.style.border = "1px solid blue";
table.style.width = "100%";

const inputDiv = document.createElement("div");
inputDiv.style.textAlign = "center";

const input = document.createElement("input");
input.className = "form-control";
input.id = "inputField";
input.type = "text";
input.placeholder = "Enter your question";

const button = document.createElement("button");
button.id = "btn";
button.className = "btn btn-primary";
button.innerText = "Find out";

inputDiv.append(input, button);

app.append(h1, ball, inputDiv, resultCounter, table);

const $inputField = document.querySelector("#inputField");
const $button = document.querySelector("#btn");

$inputField.addEventListener("keyup", function () {
  if ($inputField.value !== "") {
    $inputField.style.border = "1px solid #999";

    return;
  }
});

$button.addEventListener("click", function () {
  if ($inputField.value === "") {
    $inputField.style.border = "3px solid red";

    return;
  }

  const randomIndex = Math.floor(answers.length * Math.random());

  const answer = answers[randomIndex];

  const $answer = document.querySelector("#answer");
  $answer.innerText = answer;

  const newEntry = {
    id: uuidv4(),
    question: $inputField.value,
    answer: answer,
  };

  results.push(newEntry);

  refreshTable();

  $inputField.value = "";
  $inputField.focus();
});

console.log(pluralize("cactus", 2)); // p

function refreshTable() {
  resultCounter.innerText = `${results.length} ${pluralize(
    "answer",
    results.length
  )}`;

  const $table = document.querySelector("#resultsTable");

  $table.innerHTML = "";

  results.forEach((data) => {
    const $row = document.createElement("tr");

    $row.innerHTML = `<td>${data.id}</td> <td></td> <td>${data.answer}</td>`;

    const td = $row.querySelector("td:nth-of-type(2)");
    td.textContent = data.question;

    $table.append($row);
  });
}
