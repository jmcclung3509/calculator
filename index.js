//get DOM elements

const equationContainer = document.querySelector(".equation")
const inputContainer = document.querySelector(".input")

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
    console.log(operator)
    operator.addEventListener("click", getValue)
    operator.addEventListener("click", equationState)

}

let numberComplete = false
let num1Done = false
let num2Done = false
operatorIsDone = false

function getValue(e){
    console.log("click")
   let value = e.target.textContent
setInput(value)
setEquation(value)
return value


}
function equationState(){
    if (num1Done == false && num2Done == false){
        num1Done = true
        num2Done = false
        console.log(num1Done, num2Done)
        
    }else {
        console.log("is it working")
        num1Done = true
        num2Done = true
        console.log(num1Done, num2Done)
    }
}
function setInput(value){
    inputContainer.textContent = value

}
function setEquation(value){
    equationContainer.textContent = value

}
// function getNumber(num1, num2){
//     if (num1Done == false) {
//         if (!num1){
//             num1 = getValue(num1)   
//          } else if ( num1){
//         num1 += getValue(num1)
//     } 
//     console.log(num1)
  
//     return num1
// } else if (num1Done == true && operatorIsDone ==true){

//         if (!num2){
//          num2 = getNumber(num2)
//          } else if ( num2){
//         num2 += getValue(num2)
//     }
//     return num2

// } 

// }

// function getOperator(e){
//     // numberComplete = true
//     num1Done = true
//     let operator = e.target.textContent

//     operatorIsDone = true
//     console.log(operator)
//     return operator
// }

function operate(num1, operator, num2){
 num1 = getNumber(num1)
 console.log(num1)


    num2 = getNumber(num2)
    console.log(num2)
    operator = getOperator(operator)
 

    return `${num1} ${operator} ${num2}`
}

// console.log(operate("2" ,"+" ,"3"))
// function operate(num1,  operator, num2) {
//     if(numberComplete = false && !num1)
//      num1 = parseInt(getValue(num1))


// } else if (numberComplete = false && num1) {
//    num1 += parseInt(getValue(num1))
// } else if (numberComplete = true{
    

// }
// return operate


//operator functions

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
