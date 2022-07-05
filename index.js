
let name = document.getElementById("title-text-box").value;
let body = document.getElementById("body-text-box").value;
let btn = document.getElementById("btn");

// let parsedNote = JSON.parse("notes.json")

// console.log(parsedNote[0].name);

btn.addEventListener("click", function() {
    const fs = require("fs");

    let newNote = {
        name : __name,
        body : __body
    };

    let data = JSON.stringify(newNote);
    console.log(data);

    // PUSH INTO JSON FILE
    fs.writeFile('./notes.json', data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data was saved");
    });
})
