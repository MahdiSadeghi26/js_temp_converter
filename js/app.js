// variables
let title = document.querySelector(".title");
let inputNumber = document.querySelector("#input");
let result = document.querySelector(".result");
let convert = document.querySelector("#convert");
let reset = document.querySelector("#Reset");
let change = document.querySelector("#change");
let status = title.innerHTML;
// flag variable
let flag = false;

// events
convert.addEventListener("click", tempConverter);
reset.addEventListener("click", resetButton);
change.addEventListener("click", scaleChanger);
inputNumber.addEventListener("keypress", preventingNotNumberInput);
window.addEventListener("load", () => (inputNumber.value = ""));
// functions

function tempConverter(e) {
  let tempNumber = Number(inputNumber.value);
  result.style.display = "block";
  if (status == "Convert ℃ to ℉") {
    let outputC = (tempNumber * 9) / 5 + 32;
    result.style.color = "white";
    result.innerHTML = `${tempNumber}℃ = ${outputC}℉`;
  } else if (status == "Convert ℉ to ℃") {
    let celsius = (tempNumber - 32) * 0.5556;
    result.innerHTML = `${tempNumber}℉ = ${Math.floor(celsius)}℃`;
  }
}
function preventingNotNumberInput(e) {
  if (e.which < 48 || e.which > 57) {
    e.preventDefault();
    result.style.cssText = "display:block;color:red";
    result.innerHTML = "Not a Number";
    setTimeout(() => {
      result.style.display = "none";
    }, 1000);
  }
}
function scaleChanger(e) {
  if (!flag) {
    flag = true;
    document.title = "Convert ℉ to ℃";
    title.innerHTML = "Convert ℉ to ℃";
    inputNumber.setAttribute("placeholder", "℉");
  } else {
    flag = false;
    title.innerHTML = "Convert ℃ to ℉";
    document.title = "Convert ℃ to ℉";
    inputNumber.setAttribute("placeholder", "℃");
  }
  status = "Convert ℉ to ℃";
}
function resetButton() {
  inputNumber.value = "";
  location.reload();
}
