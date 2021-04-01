"use strict"

//Работа со строками
const str = 'test';
const arr = [1, 2, 4];

// console.log(str[2]);

// Большие либо маленькие буквы

// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

//Посчитать с какого символа начинается

const fruit = "some fruit";
console.log(fruit.indexOf("fruit"));  

// Вырезать кусок строки

const logg = "Hello world!"
console.log(logg.slice(6));

console.log(logg.substring(6, 12));

console.log(logg.substr(6, 5));


//Работа с числами
//Оставить целое число
const num = 12.2;
console.log(Math.round(num));


const test = "12.2px";

//Убирает все до целого
// console.log(parseInt(test));

//Убирает толькое единицы измерения
console.log(parseFloat(test));