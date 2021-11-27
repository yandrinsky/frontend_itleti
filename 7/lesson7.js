// let obj = {
//     a: 1,
//     b: "asda",
//     "8123asdasd": false,
//     "asdasd": true,
//     "12312asdasd": false,
// }

// for(let key in obj){
//     console.log(String(Number(key[0])) === "NaN")

    //NaN !== NaN
    //{} !== {}

    //Суть рассуждения
    //1) Преобразовать к число
    //2) Преобразовать обратно к строке
    //3) Проверить ошибку
//}

//Arrays


//let arr = [1, false, [1, false], "Hello", 2.34, ()=>{}];
//console.log(arr[arr.length - 1]);
// let arr2 = arr;
// arr2[0] = 99;
// console.log(arr)
// console.log(arr2)

//
//const arr = [1,2,3];
//Добавление в конец;
// arr.push(4);
// console.log(arr)
//ДОбавление в начало
// arr.unshift(0);
// console.log(arr)
//Вставка
// arr.splice(1, 0, 9);
// console.log(arr)

//Удаление
//Удаление  с конца
// arr.pop();
// console.log(arr)
//Удалить с начала
// arr.shift();
// console.log(arr)
//Удалить определённый элемент
// delete arr[1];
// console.log(arr)
//Метод для удаления!
// arr.splice(1, 1);
// console.log(arr);

// const arr = [1,2,3];
//Методы высших порядков
// arr.forEach((item, index)=>{
//     console.log(item, index)
// })

//MAP
// let newArr = arr.map((item, index)=> {
//     return "<p>" + item + "</p>";
// })
// console.log(arr)
// console.log(newArr)

//Конец части базовый JS










//WEB API
//DOM - document object model
//Hell world;
// document.write("<h1>Hello world</h1>")
// document.write("<h1>Hello world</h1>")
// document.write("<h1>Hello world</h1>")


//Selectors;
//const box = document.querySelector(".box");

//Перезапись контента
//box.innerText = "<p>Hello</p>";
// box.innerHTML = "<p>Hello1</p>";
// box.innerHTML = "<p>Hello2</p>";
// box.innerHTML = "<p>Hello3</p>";

//Контент - добавление
// box.insertAdjacentHTML("beforebegin", "<p>1</p>");
// box.insertAdjacentHTML("afterbegin", "<p>2</p>");
// box.insertAdjacentHTML("afterend", "<p>3</p>");


//const box = document.querySelector(".box");
// setInterval(()=> {
//     setTimeout(()=> {
//         box.classList.add("red");
//     }, 1000)
//     setTimeout(()=> {
//         box.classList.add("green");
//     }, 2000)
//     setTimeout(()=> {
//         box.classList.remove("green");
//     }, 3000)
//
//     setTimeout(()=> {
//         box.classList.remove("red");
//     }, 4000)
// }, 4000)

//click
// box.addEventListener("click", (e)=> {
//     e.target.classList.toggle("red");
// })

//dblclick
// box.addEventListener("dblclick", (e)=> {
//     e.target.classList.toggle("red");
// })



// const input = document.querySelector("input");
//change
// input.addEventListener("change", (e)=> {
//     console.log(e.target.value)
// })

//input
// input.addEventListener("input", (e)=> {
//     console.log(e.target.value)
// })


//JS - однопточный язык
//Event loop
//Надо смотреть на видео


//События







