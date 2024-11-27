// console.log("Задача 1");
// let a = prompt("Введите число:");
// if (a % 3 == 0){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// a % 3 == 0 ? console.log(true) : console.log(false);

// console.log("Задача 2");
// let a = Number(prompt("Введите номер дня недели:"));
// if(a == 1){
//     console.log("Понедельник")
// }
// else if(a == 2){
//     console.log("Вторник")
// }
// else if(a == 3){
//     console.log("Среда")
// }
// else if(a == 4){
//     console.log("Четверг")
// }
// else if(a == 5){
//     console.log("Пятница")
// }
// else if(a == 6){
//     console.log("Суббота")
// }
// else if(a == 7){
//     console.log("Воскресенье")
// }
// else {
//     console.log("Введите число от 1 до 7")
// }

// switch(a){
//     case 1: {
//         console.log("Понедельник");
//         break;
//     }
//     case 2: {
//         console.log("Вторник");
//         break;
//     }
//     case 3: {
//         console.log("Среда");
//         break;
//     }
//     case 4: {
//         console.log("Четверг");
//         break;
//     }
//     case 5: {
//         console.log("Пятница");
//         break;
//     }
//     case 6: {
//         console.log("Суббота");
//         break;
//     }
//     case 7: {
//         console.log("Воскресенье");
//         break;
//     }
//     default:{
//         console.log("Введите число от 1 до 7");
//         break;
//     }
// }


// console.log("Задача 3");
// let a = prompt("Введите число:");
// if(isNaN(a)){
//     console.log(false);
// }
// else{
//     console.log(true);
// }

// isNaN(a) ? console.log(false) : console.log(true);

// console.log("Задача 4");
// let a = prompt("Введите число:");
// if (isNaN(a)){
//     console.log("Вы ввели не число!");
// }
// else if (a > 0) {
//     console.log(`Число ${a} положительное`);
// }
// else {
//     console.log(`Число ${a} отрицательное`);
// }

// isNan(a) ? console.log("Вы ввели не число!") : a > 0 ? console.log(`Число ${a} положительное`) : console.log(`Число ${a} отрицательное`);

// console.log("Задача 5");
// let a = prompt("Введите число:");
// if (isNaN(a)){
//     console.log("Вы ввели не число!");
// }
// else{
//     console.log(Math.round((Math.sqrt(a))))
// }

// console.log("Задача 6");
// let v1 = Number(prompt("Введите первую скорость:"));
// let v2 = Number(prompt("Введите вторую скорость:"));
// let s = Number(prompt("Введите путь:"));
// if (isNaN(v1) || isNaN(v2) || isNaN(s)){
//     console.log("Вы ввели не число!");
// }
// else{
//     console.log(`${s/(v1+v2)} часа`)
// }

// console.log("Задача 7");
// let a = Number(prompt("Введите номер месяца:"));
// if (isNaN(a)){
//         console.log("Вы ввели не число!");
// }
// else{
//     switch(a){
//         case 1: {
//             console.log("Зима");
//             break;
//         }
//         case 2: {
//             console.log("Зима");
//             break;
//         }
//         case 3: {
//             console.log("Весна");
//             break;
//         }
//         case 4: {
//             console.log("Весна");
//             break;
//         }
//         case 5: {
//             console.log("Весна");
//             break;
//         }
//         case 6: {
//             console.log("Лето");
//             break;
//         }
//         case 7: {
//             console.log("Лето");
//             break;
//         }
//         case 8: {
//             console.log("Лето");
//             break;
//         }
//         case 9: {
//             console.log("Осень");
//             break;
//         }
//         case 10: {
//             console.log("Осень");
//             break;
//         }
//         case 11: {
//             console.log("Осень");
//             break;
//         }
//         case 12: {
//             console.log("Зима");
//             break;
//         }
//         default:{
//             console.log("Введите число от 1 до 12");
//             break;
//         }
//     }
// }

// console.log("Задача 8");
// let a = Number(prompt("Введите номер поры года:"));
// if (isNaN(a)){
//         console.log("Вы ввели не число!");
// }
// else{
//     switch(a){
//         case 1: {
//             console.log("Зима");
//             break;
//         }
//         case 2: {
//             console.log("Весна");
//             break;
//         }
//         case 3: {
//             console.log("Лето");
//             break;
//         }
//         case 4: {
//             console.log("Осень");
//             break;
//         }
//         default: {
//             console.log("Введите число от 1 до 4")
//         }
//     }
// }

// console.log("Задача 9");
// let a = Number(prompt("Введите номер поры года:"));
// if (isNaN(a)){
//         console.log("Вы ввели не число!");
// }
// else if (a === 0){
//     console.log("Обратного числа не существует");
// }
// else{
//     console.log(1/a);
// }

// console.log("Задача 10");
// let a = Number(prompt("Введите количество сантиметров:"));
// if (isNaN(a)){
//         console.log("Вы ввели не число!");
// }
// else{
//     console.log(Math.floor(a/100));
// }

// console.log("Задача 11");
// let a = String(prompt("Введите слово hschool:"));
// if (a === "hschool"){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// console.log("Задача 12");
// let a = Number(prompt("Введите первое число:"));
// let b = Number(prompt("Введите второе число:"));
// console.log(`I'm ${a + b}`)

// console.log("Задача 13");
// let a = Number(prompt("Введите оценку от 1 до 5:"));
// if (isNaN(a)){
//         console.log("Вы ввели не число!");
// }
// else{
//     switch(a){
//         case 1: {
//             console.log("Очень плохо");
//             break;
//         }
//         case 2: {
//             console.log("Плохо");
//             break;
//         }
//         case 3: {
//             console.log("Удовлетворительно");
//             break;
//         }
//         case 4: {
//             console.log("Хорошо");
//             break;
//         }
//         case 5: {
//             console.log("Отлично")
//         }
//         default:{
//             console.log("Введите оценку от 1 до 5")
//         }
//     }
// }

console.log("Задача 14");
let a = Number(prompt("Введите сторону a"));
let b = Number(prompt("Введите сторону b:"));
let c = Number(prompt("Введите сторону c:"));
if(a + b > c && a + c > b && b + c > a){
    if (a === b === c){
        console.log("Равносторонний треугольник")
    }
    else if( (a === b && a !== c) || (b === c && b !== a)  || (a === c && a !==b)){
        console.log("Равнобедренный треугольник")
    }
    else{
        console.log("Разносторонний треугольник")
    }
}
else{
    console.log("Треугольника не существует")
}