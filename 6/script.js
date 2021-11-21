//functions
// function just(){
//     return "Hello world";
// }
// function just(){
//     console.log("Hello world");
// }
//
// console.log(just());


// function greeting(name = "imposter"){
//     console.log("Hello, " + name);
// }

// function greeting(name = "NAME", lastname = "LASTNAME"){
//     console.log("Hello, " + name + " " + lastname);
// }
//
//
// greeting("vlad", false, "asd", "asdasd");


// function greeting(...names){
//     let str = "Hello " + names[0];
//     for(let i = 1; i < names.length; i++){
//         str += ", " + names[i];
//     }
//     console.log(str)
//
// }
// greeting("vlad", "nikita", "lera");

//Матрёшка
// function makeSumBigCalc(data){
//     function makeSumSmallCalc(){
//         return x;
//     }
//     let x = 12;
//     return x;
// }


//Замыкания;
// function parent(parent_name){
//     function child(child_name){
//         console.log("I am " + child_name, "My parent is " + parent_name);
//     }
//     return child;
// }
//
// let child = parent("Nikita");
// child("Valera")


//Замыкания
// function setCounter(start = 0){
//     let x = 10;
//     function counter(){
//         start += 1;
//         return start;
//     }
//     return counter;
// }
//
// const counter1 = setCounter(5);
// const counter2 = setCounter(1);
// const counter3 = setCounter(2);
// const counter4 = setCounter(3);
//
// counter1();
// counter1();
// counter1();
// counter1();
// console.log(counter1());
// console.log(counter2());
// console.log(counter3());
// console.log(counter4());



// function HOF(callback){
//     let x = 10;
//     if(x < 10) callback();
// }

// const arr = [1, 2, 3, 7, 1, 2, 4, 1, 1, 1, 2, 3];

// let counter = 0;
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] === 1){
//         counter += 1;
//     }
// }
// console.log(counter)
// counter = 0;
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] < 7){
//         counter += 1;
//     }
// }
// console.log(counter)
// counter = 0;
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] > 5){
//         counter += 1;
//     }
// }
// console.log(counter);

// let counter = 0;

// function callback1(item){
//     if(item === 1){
//         counter += 1;
//     }
// }
// function callback2(item){
//     if(item < 7){
//         counter += 1;
//     }
// }
//
// function callback3(item){
//     if(item > 1){
//         counter += 1;
//     }
// }

// function forEach(arr, callback){
//     for (let i = 0; i < arr.length; i++){
//         callback(arr[i]);
//     }
// }
//
//
//
//
// forEach(arr, function (item){
//     if(item === 1){
//         counter += 1;
//     }
// });
//
//
// console.log(counter)
// counter = 0;
//
//
// forEach(arr, function (item){
//     if(item < 7){
//         counter += 1;
//     }
// });
//
//
// console.log(counter)
// counter = 0;
//
//
// forEach(arr, (item) => {
//     if(item > 1){
//         counter += 1;
//     }
// });
//
// console.log(counter)


//Разновидности функций

//1) Function declaration
// smth();
// function smth(){
//     console.log("smth")
// }

//2) Function expression

// const smth = function (){
//     console.log("smth")
// }
// smth();

//3) Arrow functions

// const smth = (name) => {
//     console.log("smth");
// }
//
// const smth1 = name => console.log("smth")
//
// smth1();


//4*) IIFE
// (() => {
//     console.log("Hello world")
// })();


// const person = {
//     name: "vlad",
//     lastname: "yandrinsky",
//     age: 19,
//     male: true,
// }
//Свойства
// console.log(person.name)
// person.name = "VLAD";
// console.log(person.name)


//Ссылка на объект
// let person2 = person;
//
// person2.name = "Nikita";
// console.log(person)
// console.log(person2)


// let name = "Nikita";
//
// const person = {
//     name: "vlad",
//     lastname: "yandrinsky",
//     age: 19,
//     male: true,
//     greeting(){
//         console.log("My name is " + this.name, "  my age is " + this.age);
//     },
// }
// person.greeting();
//


// const shapes = {
//     "1231231234": {
//         start: {
//             x: 10,
//             y: 20,
//         },
//         end: {
//             x: 40,
//             y: 50,
//         },
//         type: "line",
//     },
//     "12354432534": {
//         start: {
//             x: 10,
//             y: 20,
//         },
//         end: {
//             x: 40,
//             y: 50,
//         },
//         type: "line",
//     },
//     "786986798679": {
//         start: {
//             x: 10,
//             y: 20,
//         },
//         end: {
//             x: 40,
//             y: 50,
//         },
//         type: "line",
//     }
// }
//
// let key = "786986798679";
// console.log(shapes[key]);
// console.log(Object.keys(shapes));
// console.log(Object.values(shapes));
//
// for(let key in shapes){
//     console.log(key);
//     console.log(shapes[key]);
// }




