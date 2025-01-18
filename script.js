let listItem1 = document.getElementById("list-itemC")
let listItem2 = document.getElementById("list-item=")
let listItem3 = document.getElementById("list-item+")

let listItem4 = document.getElementById("list-item-")
let listItem5 = document.getElementById("list-item*")
let listItem6 = document.getElementById("list-item/")

let result = document.getElementById("result")
let history = document.getElementById("history")


// let listItem11 = document.getElementById("list-item1")
// let listItem12 = document.getElementById("list-item2")
// let listItem13 = document.getElementById("list-item3")
// let listItem14 = document.getElementById("list-item4")
// let listItem15 = document.getElementById("list-item5")
// let listItem16 = document.getElementById("list-item6")
// let listItem17 = document.getElementById("list-item7")
// let listItem18 = document.getElementById("list-item8")
// let listItem19 = document.getElementById("list-item9")
// let listItem10 = document.getElementById("list-item0")

function getNum(num) {
    history.value = history.value + num
}
function getNum2(num) {
    history.value = history.value + num
}
function getNum3(num) {
    history.value = history.value + num
}
function getNum4(num) {
    history.value = history.value + num
}
function getNum5(num) {
    history.value = history.value + num
}
function getNum6(num) {
    history.value = history.value + num
}
function getNum7(num) {
    history.value = history.value + num
}
function getNum8(num) {
    history.value = history.value + num
}
function getNum9(num) {
    history.value = history.value + num
}
function getNum0(num) {
    history.value = history.value + num
}
// function getNumPlus() {
//     history.value = history.value + "+"
// }

// function getNumMinus() {
//     history.value = history.value + "-"
// }
// function getNumYmnozit() {
//     history.value = history.value + "*"
// }
// function getNumRazdelit() {
//     history.value = history.value + "/"
// }
function getOperator(op) {
    history.value = history.value + op
}

function getNumReset() {
    history.value = ""
    result.value = ""
}

function getNumRavno() {
    result.value = eval(history.value)
}
















































// function one() {
//     let number1 = Number(input1.value);
//     let number2 = Number(input2.value);
//     let id = list.value;
//     let res
//     if (id == "+") {
//         res = number1 + number2
//     }
//     if (id == "-") {
//         res = number1 - number2
//     }
//     if (id == "*") {
//         res = number1 * number2
//     }
//     if (id == "/") {
//         res = number1 / number2

//     }
//     result.value = res

// }
// button.addEventListener("click", one)
// button.addEventListener("click", () => {
//     let inp1 = input1.value
//     let inp2 = input2.value
//     if (inp1 <= 0 && inp2 <= 0) {
//         alert("поля для цифр пусты")
//         result.value = ""
//     }
//     if (inp1 <= 0 && inp2 > 0) {
//         alert("поле 1 пустое")
//         result.value = ""
//     }
//     if (inp2 <= 0 && inp1 > 0) {
//         alert("поле 2 пустое")
//         result.value = ""
//     }
// })



// input1.addEventListener("keydown", (event) => {
//     let isDigit = false;
//     let isDashedPlus = false;
//     let isControl = false;
//     if (event.key >= 0 && event.key <= 9) {
//         isDigit = true;

//     }
//     if (event.key == `-` || event.key == `+`) {
//         isDashedPlus = true;
//     }
//     if (event.key == `ArrowLeft` || event.key == `ArrowRight` || event.key == `Backspace` || event.key == `Delete`) {
//         isControl = true;
//     }
//     if (!isDigit && !isDashedPlus && !isControl || event.keyCode == 32) {
//         event.preventDefault();
//     }

//     //     console.log(event.preventDefault);

// })

// input2.addEventListener("keydown", (event) => {
//     let isDigit = false;
//     let isDashedPlus = false;
//     let isControl = false;
//     if (event.key >= 0 && event.key <= 9) {
//         isDigit = true;

//     }
//     if (event.key == `-` || event.key == `+`) {
//         isDashedPlus = true;
//     }
//     if (event.key == `ArrowLeft` || event.key == `ArrowRight` || event.key == `Backspace` || event.key == `Delete`) {
//         isControl = true;
//     }
//     if (!isDigit && !isDashedPlus && !isControl || event.keyCode == 32) {
//         event.preventDefault();
//     }

//     //     console.log(event.preventDefault);

// })

