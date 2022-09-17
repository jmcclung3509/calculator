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

const nineBtn = document.getElementById("9").addEventListener("click", getValue)
const eightBtn = document.getElementById("8").addEventListener("click", getValue)
const sevenBtn = document.getElementById("7").addEventListener("click", getValue)
const sixBtn = document.getElementById("6").addEventListener("click", getValue)
const fiveBtn = document.getElementById("5").addEventListener("click", getValue)
const fourBtn = document.getElementById("4").addEventListener("click", getValue)
const threeBtn =  document.getElementById("3").addEventListener("click", getValue)
const twoBtn = document.getElementById("2").addEventListener("click", getValue)
const oneBtn = document.getElementById("1").addEventListener("click", getValue)
const zeroBtn = document.getElementById("0").addEventListener("click", getValue)

const operators = document.querySelectorAll(".operator_btn")
for (let operator of operators){
    operator.addEventListener("click", getOperator)


}
equals.addEventListener("click", endEquation)


let numberComplete = false
let isNum1 = false
let isNum2 = false

let num1 = ""
let num2=""
let operator = ""
let inputText = ""
let equationText = ""


function getValue(e){
   let value = e.target.textContent
setInput(value)
setEquation(value)
}

function getNum1(){
    if (isNum1== true){
        num1 = inputContainer.textContent
    }
return num1
}
function clearInput() {
       inputContainer.textContent = ""
     inputText = ""
}

function getNum2(){
    if ( isNum2 == true){
    
    num2 = inputContainer.textContent  
    console.log(num2)
    }

    return num2

}



// function setNumState(){
//     if (num1Done == false && num2Done == false){
//         num1Done = true
//         num2Done = false
// } else if (num1Done == true && num2Done == false){
//     num1Done = false
//     num2Done = true
// }
// console.log(num1Done, num2Done)
// }
// function setNumState(){
//     num1Done = true
//     num2Done = true
//     console.log(num1Done, num2Done)
//     getNum2()

// }

function setInput(value){
    inputText+=value
    inputContainer.textContent = inputText

}
function setEquation(value){
    equationText += value
    equationContainer.textContent = equationText
}

function getOperator(e){

    operator = e.target.textContent
   setOperatorContainer(operator)
    clearInput()

}

function setOperatorContainer(operatorValue){
 operatorContainer.textContent = operatorValue
}
function getOperatorValue(){
    operator = operatorContainer.textContent
    return operator
}



function endEquation(){
    num1 = getNum1()
    console.log(num1)
operator = getOperatorValue()

    num2= getNum2()
    console.log(num2)
    console.log(`num1 = ${num1}, operator=${operator}, num2= ${num2}`)
}





function operate(num1, num2, operator){
    console.log(num1, num2, operator)
    // if (e.target.textContent == "+"){
   
    //     return operator
    //   }else if (e.target.textContent == "-"){
    //     let  operator = "minus"
    //     return operator
    //   } else if (e.target.textContent == "x"){
    //     let operator = "multiply"
    //     return operator
    //   } else {
    //     let  operator = "divide"
    //     return operator
    //   }
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
