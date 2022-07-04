let noteName = document.getElementById("#title-text-box");
let noteBody = document.getElementById("#body-text-box");
let btn = document.getElementsByClassName("#btn");

$("#btn").on("click", function() {
    console.log("click");
})

noteTemplate = {
    "Name" : noteName,
    "Body" : noteBody
};
