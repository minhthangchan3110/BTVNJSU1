class Note {
    title: string;
    content: string;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
    addNote(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
}
class NoteList {
    notes: Note[];
    constructor() {
        this.notes = [];
    }
    addNoteToList(note: Note) {
        this.notes.push(note);
    }
}

const todo1 = new Note("", "");
const todo2 = new Note("", "");
const noteList = new NoteList();

todo1.addNote("Di hoc", "bang tau ");
noteList.addNoteToList(todo1);

todo1.addNote("Di choi", "bang xe may ");
noteList.addNoteToList(todo2);

