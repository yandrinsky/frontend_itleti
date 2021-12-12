/*
1)* Функция рендера
2)* Формирования заметки
3)* Формирования текста заметки
4)* Удаление заметки
5)* Добавления заметки
6)* Обработка "применить изменения"
7)* Обраотка "изменить заметку"
8)* Сформировать state
9) функция сохранения локально
10) *Обрабтка ввода заметки
 */

const Storage = {
    __key: "__MY_NOTES",
    save(notes){
        localStorage.setItem(this.__key, JSON.stringify(notes));
    },
    recover(){
        return JSON.parse(localStorage.getItem(this.__key)) || [];
    }
}

const state = {
    notes: Storage.recover(),
}


const obj = {
    one: 1,
    two: 2,
    name: [1, 2, false, {a1: 2}],
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
    note_link.isChanging =  !note_link.isChanging;
    //Вызвать функцию редера
    render();
}



const onNoteInput = (note_link, e) => {
    note_link.text = e.target.value;
    e.target.previousElementSibling.innerHTML = createText(note_link.text, true);
}


const createText = (text, isChanging) => {
    if(text === ""){
        return "Your note..."
    } else if(text.length > 150 && isChanging){
        return text.slice(0, 147) + "...";
    } else {
        return text
    }
}

const creatingNote = (props) => {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <span><small>${props.order || ""}</small></span>
        <h3>${createText(props.text, props.isChanging)}</h3>
        <div class="note_btns_wrapper">
            
        </div>
    `
    if(props.isChanging){
        //Создание кнопки "принять" (треугольник)
        const applyBth = document.createElement("button");
        applyBth.onclick = props.onApply;
        applyBth.classList.add("btn", "apply");
        //Вставить элемент
        note.querySelector(".note_btns_wrapper").append(applyBth);

        const textarea = document.createElement("textarea");
        textarea.value = props.text;
        textarea.oninput = props.onInput;
        note.querySelector(".note_btns_wrapper").insertAdjacentElement("beforebegin", textarea)

        const removeBtn = document.createElement("button");
        removeBtn.innerHTML = "x";
        removeBtn.classList.add("btn", "remove");
        removeBtn.onclick = props.onRemove;
        note.querySelector(".note_btns_wrapper").append(removeBtn);

    } else {
        const editBtn = document.createElement("button");
        editBtn.onclick = props.onApply;
        editBtn.innerHTML = "✎";
        editBtn.classList.add("btn", "edit", "hide");
        note.querySelector(".note_btns_wrapper").append(editBtn);

        note.onmouseenter = () => {
            editBtn.classList.remove("hide");
        }
        note.onmouseleave = () => {
            editBtn.classList.add("hide");
        }

    }
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
            onInput: onNoteInput.bind(this, state.notes[index]),
            onRemove: removeNote.bind(this, index),
        })
        noteWrapper.append(res);
    })
}

render();

document.querySelector(".add_note").onclick = addNewNote;

window.onbeforeunload = () => {
    Storage.save(state.notes);
}
