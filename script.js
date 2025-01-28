// Задача №1
let a = parseInt(prompt("введи свой возраст, брат: "));
if (a < 65) {
    console.log("ещё рано на пенсию, брат");
} else {
    console.log("поздравляю пенсией!");
}

// Задача №2
let b = parseInt(prompt("введи первое число, брат: "));
let c = parseInt(prompt("введи второе число, брат: "));
if(b > c) {
    console.log("первое число больше");
}
else if(b < c) {
    console.log("второе число больше");
}
else {
    console.log("числа равны");
}

// Задача №3
let d = parseInt(prompt("введи число, брат: "));
if (d % 2 === 0) {
    console.log("это четик");
} else {
    console.log("это нечетик");
}