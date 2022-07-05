// import notes from "./notes.json" assert {type: "json"}

let noteName = document.getElementById("title-text-box");
let noteBody = document.getElementById("body-text-box");
let btn = document.getElementById("btn");

let tester_text = document.getElementById("tester-text")
let tester_text_2 = document.getElementById("tester-text-2")

// console.log("JSON DATA:");
// console.log(jsonFile);

let allNotes = [];
// allNotes.push(newNote);
// for(let i = 0; i <= allNotes.length(); i++) {
//     console.log(allNotes);
// }

btn.addEventListener("click", function() {
    // let _name = noteName.value;
    // let _body = noteBody.value;

    // saveNote(_name, _body);
    
    loadJSON();

    // VISUAL REPRESENTATION OF WORKING FORM
    tester_text.innerText = _name;
    tester_text_2.innerText = _body;
    // VISUAL REPRESENTATION OF WORKING FORM
})


function saveNote(name, body) {
    // take the name/ body and save to new object
    console.log(name);
    console.log(body);

    let newNote = {
        "name" : name,
        "body" : body
    };

    const date = JSON.stringify(newNote);

    console.log();
    

    // PUSH INTO JSON FILE
}

function loadJSON() {
    let myData = JSON.parse("./notes.json")

    console.log(myData[0].name);
    console.log(myData[0].body);
    console.log(myData[1].name);
    console.log(myData[1].body);
    console.log(myData[2].name);
    console.log(myData[2].body);
}



// function loadArray() {
    // Take all JSON entries, and load them into an array
    // For loop the array to put them on the webpage
// }

// LOAD NOTES FROM OBJECTS
// SAVE NOTES AS OBJECTS
// EDIT (?)