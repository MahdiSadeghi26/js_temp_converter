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
// functions

function tempConverter(e) {
  let tempNumber = inputNumber.value;
  result.style.display = "block";
  if (!inputNumber.value) {
    result.style.color = "red";
    result.innerHTML = "Empty Value!";
    return;
  }
  if (status == "Convert ℃ to ℉") {
    let outputC = (tempNumber * 9) / 5 + 32;
    result.style.color = "white";
    result.innerHTML = `${tempNumber}℃ = ${outputC}℉`;
  } else if (status == "Convert ℉ to ℃") {
    let celsius = (tempNumber - 32) * 0.5556;
    result.innerHTML = `${tempNumber}℉ = ${Math.floor(celsius)}℃`;
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
