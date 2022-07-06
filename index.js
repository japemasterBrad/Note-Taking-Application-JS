
let name = document.getElementById("title-text-box").value;
let body = document.getElementById("body-text-box").value;
let btn = document.getElementById("btn");

// let parsedNote = JSON.parse("notes.json")

// console.log(parsedNote[0].name);

btn.addEventListener("click", function() {
    saveNote(name, body);
});

function saveNote(name, body) {
    const fs = require("fs");
    
    let newNote = {
        name : name,
        body : body
    };
    
    let data = JSON.stringify(newNote);
    console.log(data);
    
    // PUSH INTO JSON FILE
    fs.writeFile("notes.json", data)
        console.log("JSON data was saved")
}