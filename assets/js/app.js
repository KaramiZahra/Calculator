const inputElem = document.querySelector("input");
const calcBtn = document.querySelectorAll("button");

window.addEventListener("load", () => {
  inputElem.focus();
});

calcBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnValue = btn.textContent;

    btnValue == "=" || btnValue == "CE" || (inputElem.value += btnValue);
    btnValue == "=" && (inputElem.value = eval(inputElem.value));
    btnValue == "AC" && (inputElem.value = "");
    btnValue == "CE" && (inputElem.value = inputElem.value.slice(0, -1));
  });
});
