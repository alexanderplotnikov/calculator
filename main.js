function add(a, b){
    return a + b;
}
function substract(a, b){
    return a- b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function operate(num1, num2, sign){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch(sign){
        case "/":
            if(num2 == 0){
                return "cannot divide by 0"
            }
            return divide(num1, num2)
            break;
        case "+":
            return add(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "-":
            return substract(num1, num2);
            break;
        default:
            return '';
    }
}
function updateDisplay(input){
    display.textContent = input;
}
function clear(){
    input = [''];
    index = 0;
    sign = '';
    updateDisplay(input);
}
let input = [''];
let index = 0;
let sign = '';
const btns = document.querySelectorAll("button");
const display = document.querySelector(".display");
btns.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        if (e.target.name == "operator"){
            sign = e.target.value;
            if(input[index] != ''){
                index += 1;
            }
            input[index] = '';
        }
        else {
            input[index] += e.target.value;
        }
        updateDisplay(input[index]);
    })
});
let res;
const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    res = operate(input[0], input[1], sign);
    index = 0;
    input[0] = res;
    updateDisplay(res);
});
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => clear());

