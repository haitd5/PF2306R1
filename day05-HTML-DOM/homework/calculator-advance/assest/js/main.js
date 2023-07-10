let nb1 = " ";
let nb2 = " ";
let opt;

function buttonHandler(btn) {
  const pressedValue = btn.innerText;

  const resultInput = document.getElementById("resultInput");

  if (isNaN(pressedValue)) {
    if (pressedValue == "AC") {
      nb1 = "";
      nb2 = "";
      opt = undefined;
      resultInput.value = "";
      return;
    }
    if (pressedValue == "=") {
      const result = perform(nb1, nb2, opt);
      resultInput.value = result;
      nb1 = "";
      nb2 = "";
      opt = undefined;
    } else {
      opt = pressedValue;
    }
  } else {
    if (opt) {
      nb2 += pressedValue;
      resultInput.value = nb2;
    } else {
      nb1 += pressedValue;
      resultInput.value = nb1;
    }
  }
}
function perform(n1, n2, otor) {
  n1 = Number(n1);
  n2 = Number(n2);
  switch (otor) {
    case "+":
      return n1 + n2;
      break;
    case "-":
      return n1 - n2;
      break;
    case "x":
      return n1 * n2;
      break;
    case "÷":
      return n1 / n2;
      break;
  }
}
