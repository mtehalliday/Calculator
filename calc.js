const numbers = document.querySelectorAll("button.num");
const test = document.querySelector("#equals");
const display = document.querySelector(".display");



function add(x, y) {
    return x + y;
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
            add(num1, num2);
            break;
        case "subtract":
            subtract(num1, num2);
            break;
        case "multiply":
            multiply(num1, num2);
            break;
        case "divide":
            divide(num1, num2);
            break;
    }
}

let input = "";


function displayInput(input) {
    display.textContent = input;
}


numbers.forEach((num) => {
    num.addEventListener("click", function(e) {
        input += e.target.value;
        displayInput(input);
    });
});

console.log(input);



//for (let i = 0; i < numbers.length; i++){
//    numbers[i].addEventListener("click", function(e) {
//        console.log(e);
//    })
//}

test.addEventListener("click", () => console.log("fixed"));
