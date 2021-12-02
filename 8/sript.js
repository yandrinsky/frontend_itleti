/*
1)*- Функция рендера
2)*- Формирования заметки
3) Формирования текста заметки
4)* Удаление заметки
5)* Добавления заметки
6)* Обработка "применить изменения"
7) Обраотка "изменить заметку"
8)* Сформировать state
9) функция сохранения локально
 */

const state = {
    notes: [
        {
            text: "Привет мир",
            isChanging: true,
        },
        {
            text: "Привет мир 2",
            isChanging: true,
        },
    ]
}

const addNewNote = () => {
    state.notes.push({
        text: "",
        isChanging: true,
    })
    //Вызвать функцию редера
    render();
}

const removeNote = (index) => {
    state.notes.splice(index, 1)
    //Вызвать функцию редера
    render();
}

const onNoteApply = (note_link) => {
    note_link.isChanging = false;
    //Вызвать функцию редера
}
/*
{
    text,
    isChanging,
    order,
    onApply,
    дургие обработчики событий

}
*/



const creatingNote = (props) => {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <span><small>${props.order || ""}</small></span>
        <h3>${props.text}</h3>
        <div class="note_btns_wrapper">
            
        </div>
    `

        //Создание кнопки "принять" (треугольник)
    const applyBth = document.createElement("button");
    applyBth.onclick = props.onApply;
    applyBth.classList.add("btn", "apply");
    //Вставить элемент
    note.querySelector(".note_btns_wrapper").append(applyBth);

    return note;

}
function render(){
    const noteWrapper = document.querySelector(".note_wrapper");
    noteWrapper.innerHTML = "";
    state.notes.forEach((item, index) => {
        let res = creatingNote({
            text: state.notes[index].text,
            isChanging: state.notes[index].isChanging,
            order: `${index + 1}/${state.notes.length}`,
            onApply: onNoteApply.bind(this, state.notes[index]),
        })
        noteWrapper.append(res);
    })
}

render();


document.querySelector(".add_note").onclick = addNewNote;

//Bind - пример
// let sayName = (name) => {
//     console.log(name);
// }
// let someFunc = sayName.bind(this, "vlad");
//
// someFunc()