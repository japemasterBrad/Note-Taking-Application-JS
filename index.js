let noteName = document.getElementById("title-text-box");
let noteBody = document.getElementById("body-text-box");
let btn = document.getElementById("btn");
let notesSection = document.getElementsByClassName("view-notes");

let notes = [];
let savedNote = [];


btn.addEventListener("click", function() {
    let _noteName = noteName.value;
    let _noteBody = noteBody.value;
    
    saveNote(_noteName, _noteBody);
    
    // console.log(_noteName);
    // console.log(_noteBody);
    
    // for(let i = 0; i <= notes.length; i++) {
        //     console.log(notes.length[noteName]);
        //     console.log(notes.length[noteBody]);
        
        // }
        // saveNote(_noteName, _noteBody);
});


function saveNote(noteName, noteBody) {
    let newNote = {
        'noteName' : noteName,
        "noteBody" : noteBody
    }
    
    let data = JSON.stringify(newNote)
    
    savedNote.push(noteName);
    savedNote.push(noteBody);
    // Successfully adding to array
    
    notes.push(data);
    
    
    // loadNotes();
}

// function loadNotes() {
// }


function createNewNote(name, body) {
    const viewNotes = getElementsByClassName('view-notes');

    const note = document.createElement("div");
    note.className += "notenotenote";
    
    // h3
    const noteHeader = document.createElement('h3');
    noteHeader += "note-name";
    noteHeader.innerText = name;
    
    
    // p
    const noteBody = document.createElement('p');
    noteBody += "note-body";
    noteBody.innerText = body;
    
    // NEED TO APPEND WITH JQUERY, NOT DOM
    
    note.innerHTML
    
    $(".view-notes").append(note)
    
    
    // note.classList.add("note");

    // TAKE THE CODE FOR A NEW NOTE AND PASTE IT HERE
    
    // note.innerHTML = `
    // <h3 class="note-name">Lorem ipsum</h3>
    // <p class="note-body">$(</p>
    // `;
}

for(let i = 0; i <= notes.length; i++) {
    console.log(notes[i]);
}