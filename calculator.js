//create functions for each operation: add, subtract, multiply and divide

//create a function named operate that takes in 3 parameters: 
//2 numbers and the operation to be performed 

function operate(num1, num2, operator){
    operator = operator.toLowerCase()
  if(operator.toLowerCase()==='add'){
    return num1 + num2
  }
  else if(operator=== 'subtract'){
    return num1 - num2
  }
  else if(operator === 'multiply'){
    return num1 * num2
  }
  else if(operator=== 'divide'){
    return num1 / num2
  }
  else {
    return 'error, operator not recognized'
  }
}

//variables to hold values from form inputs
let num1 = 0
let num2 = 0
let operatorButtonVal = ''

//function that runs when equals button is clicked using onClick
function equalsClicked(){
  ///saving the number value of the first input to the num1 variable
num1 = document.querySelector('#num1').value
//parseInt turns a string into a number
num1 = parseInt(num1)
  ///saving the number value of the second input to the num2 variable
num2 = document.querySelector('#num2').value
//parseInt turns a string into a number
num2 = parseInt(num2)

let mathOperators = document.getElementById('operator')
    if(mathOperators.options[mathOperators.selectedIndex].value === "add"){
    document.getElementById("result-num").innerHTML = num1+num2}
    if(mathOperators.options[mathOperators.selectedIndex].value === "subtract"){
    document.getElementById("result-num").innerHTML = num1 - num2}
    if(mathOperators.options[mathOperators.selectedIndex].value === "divide"){
    document.getElementById("result-num").innerHTML = num1 / num2}
    if(mathOperators.options[mathOperators.selectedIndex].value === "multiply"){
    document.getElementById("result-num").innerHTML = num1 * num2}
}



// operatorButtonVal = document.querySelector('#equals-button').value
// console.log(operatorButtonVal)
// }

// let mathOperators = document.getElementById('operator')
    // if(mathOperators.options[mathOperators.selectedIndex].value === "add");

// function displayResult() {
  // const display = document.querySelector('#result-num');
  // update the value of the element with the contents of `displayResult`
  // display.value = calculator.displayResult;
// }