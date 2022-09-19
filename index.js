//get DOM elements

let equationContainer = document.querySelector(".equation")
let inputContainer = document.querySelector(".input")
let operatorContainer = document.querySelector(".operatorContainer")

//buttons

const backspace = document.getElementById("backspace")
const clear = document.getElementById("clear")
const divisibleBtn = document.getElementById("divisible")
const addBtn = document.getElementById ("add")
const divideBtn = document.getElementById("divide")
const multiplyBtn = document.getElementById("multiply")
const subtractBtn = document.getElementById("minus")
const equalBtn = document.getElementById("equals")
const plusMinusBtn = document.getElementById("negative")
const decimalBtn = document.getElementById("decimal")

const nineBtn = document.getElementById("9")
const eightBtn = document.getElementById("8")
const sevenBtn = document.getElementById("7")
const sixBtn = document.getElementById("6")
const fiveBtn = document.getElementById("5")
const threeBtn =  document.getElementById("3")
const twoBtn = document.getElementById("2")
const oneBtn = document.getElementById("1")
const zeroBtn = document.getElementById("0")

const operators = document.querySelectorAll(".operator_btn")
for (let operator of operators){
    operator.addEventListener("click", getOperator)
    operator.addEventListener("click", getValueEquation )
   
}

const numbers = document.querySelectorAll(".number_btn")
for(let number of numbers){
    number.addEventListener("click", getValue )
    number.addEventListener("click", getValueEquation )
}


equals.addEventListener("click", endEquation)

operatorClicked = false
equalClicked = false

let num1 =""
let num2= ""
let operator 
let operator1
let operator2
let inputText = ""
let equationText = ""

function clearInput() {
    inputContainer.textContent = ""
  inputText = ""
}

function getValue(e){
    value = e.target.textContent
setInput(value)

}

function getValueEquation(e){
    value = e.target.textContent
    setEquation(value)

}

function setInput(value){
    inputText+=value
    inputContainer.textContent = inputText

}

function setEquation(value){
    equationText +=  value
    console.log(equationText)
    equationContainer.textContent = equationText
}

function getOperator(e){

operator = e.target.textContent
setCurrentNum(operator)
console.log(operator)
if (operator !== "="){
    clearInput()
}
        // clearInput()

}
function setCurrentNum(operator) {
 operator = operator
        currentNum = inputContainer.textContent
        if (num1 == ""){
            num1 = currentNum
            operator1 = operator
        } else {
            num1 = num1
      operator1 = operator1
            num2 = currentNum
            console.log(num2, currentNum)
    
            // operator2 = operator
            console.log(num1, num2, operator1, operator2)
        }
        return {num1, num2, operator1, operator2}
}

function setOperator(operatorValue){
operator = operatorValue

}

function endEquation(num1, num2, operator1){
let data = setCurrentNum()
num1 = data.num1
 num2 = data.num2
 operator1 = data.operator1

console.log(data)
console.log(num1, num2, operator1)
}





function add (num1, num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2
}
function multiply(num, num2){
    return num1 * num2
}
function divide(num1, num2) {
    let answer = num1 / num2
    return Math.round(answer *100)/100
}
function divisible(num1, num2){
    return num1 % num2
    // return Math.round(answer * 100) / 100
}
