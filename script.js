
let buttonContainer = document.querySelector(".main-btn-container");
let textBox = document.querySelector(".textbox");

let leftOperand;
let rightOperand;
let operation;

buttonContainer.addEventListener("click", (event) => {
  let target = event.target;

  if(target.textContent.length == 1 && !isNaN(parseInt(target.textContent)) || target.textContent == "00" || target.textContent == ".")
  {
    textBox.value += target.textContent;
  }

  if (target.textContent === "+" || target.textContent === "-" || target.textContent === "*" || target.textContent === "/")
  {
    leftOperand = parseFloat(textBox.value);
    operation = target.textContent;
    textBox.value = "";
  }

  if (target.textContent == "EVALUATE")
  {
    rightOperand = parseFloat(textBox.value);

    textBox.value = evaluate(leftOperand, rightOperand, operation);
  }

  if (target.textContent == "CLR")
  {
    textBox.value = "";
    leftOperand = "";
    rightOperand = "";
    operation = "";
  }

  textBox.focus()
  textBox.setSelectionRange(input.value.length, input.value.length);

})


function evaluate(leftOpe, rightOpe, Operation)
{
  if (Operation === "+") {
    return leftOpe + rightOpe;
  } else if (Operation === "-"){
    return leftOpe - rightOpe;
  } else if (Operation === "*"){
    return leftOpe * rightOpe;
  } else if (Operation === "/"){
    return leftOpe / rightOpe;
  }
}