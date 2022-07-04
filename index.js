let noteName = $("#title-text-box");
let noteBody = $("#body-text-box");

let button = $("#btn").on('click', function() {
    console.log(noteName.val);
    console.log(noteBody.val);
})

dict = {
    "Name" : noteName,
    "Body" : noteBody
};
