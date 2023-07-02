const numbers = document.querySelectorAll("button.num");
const equals = document.querySelector("#equals");
const display = document.querySelector(".display");
const ac = document.querySelector("#clear");
const operators = document.querySelectorAll("button.op")



function add(x, y) {
    return Number(x) + Number(y);
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

let num1 = null;
let num2 = null;
let operator = "";

function operate(num1, num2, operator){
    switch (operator) {
        case "add":
            return add(num1, num2);
            break;
        case "subtract":
            return subtract(num1, num2);
            break;
        case "multiply":
            return multiply(num1, num2);
            break;
        case "divide":
            return divide(num1, num2);
            break;
    }
}

let input = "";


function displayInput(input) {
    display.textContent = input;
}

function clearDisplay(){
    display.textContent = "";
    input = "";
}


numbers.forEach((num) => {
    num.addEventListener("click", function(e) {
        input += e.target.value;
        displayInput(input);
    });
});

operators.forEach((op) => {
    op.addEventListener("click", function(e) {
        operator = e.target.value;
        num1 = input;
        clearDisplay();
    })
})

equals.addEventListener("click", function(e) {
    num2 = input;
    let output = operate(num1, num2, operator);
    console.log(output);
    displayInput(output);
    input = "";
});

ac.addEventListener("click", clearDisplay);



//for (let i = 0; i < numbers.length; i++){
//    numbers[i].addEventListener("click", function(e) {
//        console.log(e);
//    })
//}


