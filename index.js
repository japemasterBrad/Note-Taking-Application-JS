let noteName = document.getElementById("title-text-box");
let noteBody = document.getElementById("body-text-box");
let btn = document.getElementById("btn");

let tester_text = document.getElementById("tester-text")
let tester_text_2 = document.getElementById("tester-text-2")

btn.addEventListener("click", function() {
    let _name = noteName.value;
    let _body = noteBody.value;

    let newNote = new noteTemplate()

    // VISUAL REPRESENTATION OF WORKING FORM
    tester_text.innerText = _name;
    tester_text_2.innerText = _body;
    // VISUAL REPRESENTATION OF WORKING FORM
})

let noteTemplate = {
    name : _name,
    body : _body
}