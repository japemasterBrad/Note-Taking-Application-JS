import jsonNotes from "./notes.json" assert {type: 'json'};
import require from "./require-2.3.6"

let btn = document.getElementById("btn");
let titleInput = document.getElementById("input-note-title");
let bodyInput = document.getElementById("input-note-body");
let noteSection = document.getElementsByClassName("view-notes");

        // not recognising require
const fs = require('fs');

btn.addEventListener("click", function() {
    let title = titleInput.value;
    let body = bodyInput.value;

    localStorage.setItem("title", title);
    localStorage.setItem("body", body);

    saveNote(title, body);
})


function createNote(title, body) {    
    let note = document.createElement("div"); 
    note.classList.add("note");    

    let noteHeader = document.createElement("h3"); 
    noteHeader.classList.add("note-title")    
    noteHeader.innerText = title;
    
    let noteBody = document.createElement("p");
    noteBody.classList.add("note-body");
    noteBody.innerText = body; 

    note.append(noteHeader);
    note.append(noteBody);

    $(".view-notes").append(note);
}


function saveNote() {
    let newNote = {
        "title" : localStorage.getItem("title"),
        "body" : localStorage.getItem("body")
    };
    let data = JSON.stringify(newNote);
    
    jsonNotes.push(data);
    fs.writeFileSync() // FS WRITE
    loadAllNotes();
}


function loadAllNotes() {
    $(noteSection).children().remove();

    for(let i = 0; i < jsonNotes.length; i++) {
        createNote(jsonNotes[i]["title"], jsonNotes[i]["body"]);
    }
}

loadAllNotes();
console.log(jsonNotes.length)



    // - local storage is taking title and body
    // - stringify is working somehow, so that's good
    // - now we just need to add more shit to local storage instead of one thing at a time


