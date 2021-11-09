//Часть 1
// console.log("Hello world!");

//2 Переменные
// const name = "vlad";
// let age = 19;
// let weight = 72.5;
// let male = true;


// console.log(name)
// console.log(name)

//3 строки
// let name = "vlad"
// let lastname = 'yandrinsky'
// let config = `Hi! I am ${name} ${lastname}`
// console.log(config);

//4 Унарные операции
// let x = false
// console.log(typeof x)

//5 Логические операторы
// && - И
// || - ИЛИ
// ! - НЕ
// console.log(true && true)
// console.log(true || false)
// console.log(!true)

//ФИЧА
// let gotName = "";
//Если имени нет, то мы вписываем unnamed;
// let name = gotName || "unnamed";
// console.log(name)

// 6 Преобразование типов
// console.log(2 + "3")
// console.log(2 - "3")
// console.log(2 * "3")
// console.log("hello" * "3")

//7 Сравнение
//Сравнения по значению
// ==
// console.log(2 == "2")
// console.log(1 == true)
// console.log(0 == false)
// console.log(null == undefined)

//Сравнение по идентичности
// ===
// console.log(2 === "2")
// console.log(1 === true)
// console.log(0 === false)
// console.log(null === undefined)


// 8 Условия
// let age = 18;
// if(age >= 18){
//     console.log("Просто покажи паспорт");
// } else if ( age >= 14 ) {
//     console.log("Ещё пару годиков")
// } else {
//     console.log("Чао, персик, дозревай")
// }

// 8.1
// let age = 100;
// switch (age){
//     case 18:
//         console.log("Хороший возраст")
//         break;
//     case 17:
//         console.log("Лучшее время")
//         break;
//     case 16:
//         console.log("И каково тебе быть молодым?")
//         break;
//     default:
//         console.log("Ничего тебе не могу сказать...")
//         break;
// }

//8.2
//Тернарный оператор
// let isFamiliar = true
// let greeting = isFamiliar ? "Hi, Friend!" : "Good afternoon";

// if (isFamiliar){
//     greeting = "Hi, Friend!"
// } else {
//     greeting = "Good afternoon";
// }
// console.log(greeting)

//Приоритет тернарного оператора выше сравнения
// if(1 > isFamiliar ? 1 : 0){
//     console.log("true")
// } else {
//     console.log("false")
// }

//9 Циклы
// for (let i = 0; i < 10; i = i + 1){
//     console.log("Js лучший язык на свете (" + i + ")");
// }
// let a = 2048;
// while (true){
//     a = a / 2;
//     console.log(a);
//     if(a <= 1){
//         break
//     }
// }

//10 Быстрое обновление переменных
//let i = 2;
// i = i + 1;
// i += 1;
// i++;
// ++i;
// i--;
// --i;
// i *= 2;
//i **= 3; // Возведение в степень
// console.log(i)

//11 Комментарии
// - одинострочный комментарий в webshtorm ctrl + l?

/*let a = 123123123 <- многострочный комментарий
let b = 123123          в webshtorm ctrl + shift + l?
let c = 123123*/

//ПРАКТИКА 1
//ЕЛОЧКА
// let height = 10;
// let sharp = ""
// for (let i = 0; i < height; i++) {
//     sharp += "#"
//     console.log(sharp);
// }
//

//ПРАКТИКА 2
//FizzBuzz
//Вывести все  числа от 1 до 100, но если число кратное 3,
// то вывести Fizz, если число кратно 5, но не кратное 3, то
//вывести Buzz;

// for (let i = 1; i < 100; i++){
//     if(i % 3 === 0){
//         console.log("Fizz")
//     } else if(i % 5 === 0){
//         console.log("Buzz")
//     } else {
//         console.log(i);
//     }
// }


//ПРАКТИКА 3
//Шахматная доска
// let size = 100;
// let even = "#"
// let odd = " "
// for (let i = 0; i < size; i++){
//     let line = "";
//     let tmp = even;
//     even = odd;
//     odd = tmp;
//     for(let j = 0; j < size; j++){
//         if (j % 2 === 0){
//             line += even
//         } else {
//             line += odd;
//         }
//         //j % 2 === 0 ? line += even : line += odd;
//     }
//     console.log(line)
// }

//Решение Даши
// let n = 10;
// for (let i = 0; i < n; i++){
//     let string = ''
//     for(let j = 0; j < n; j++){
//         if (i % 2 === 0){
//             string += '# '
//         } else  {
//             string += ' #'
//         }
//     }
//     console.log(string)
// }
//

