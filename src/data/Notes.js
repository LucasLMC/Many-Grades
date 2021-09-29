export default class NoteGroup{
    constructor(){
        this.notes = []
        this._enrolleds = []
    }

    addNote(title, text, category){
        const newNote = new Note(title, text, category)
        this.notes.push(newNote)
        this.notify()
    }

    deleteNote(index){
        this.notes.splice(index,1)
        this.notify()
    }

    register(func){
        this._enrolleds.push(func);
    }

    unRegister(func){
        this._enrolleds = this._enrolleds.filter(f => f !== func)
    }

    notify(){
        this._enrolleds.forEach(func => {
            func(this.notes)
        })
    }
}

class Note{
    constructor(title, text, category){
        this.title = title;
        this.text = text;
        this.category = category;
    }
}