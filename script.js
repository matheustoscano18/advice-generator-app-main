window.onload = populateQuote();

let idNum = document.getElementById("GetIdAdvice");
let advice = document.getElementById("adviceTxt");
let adviceBtn = document.getElementById("btn");

adviceBtn.addEventListener("click", populateQuote);

function populateQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      let name = data.slip;
      idNum.innerHTML = name.id;
      advice.innerHTML = name.advice;
    });
}
