"use strict";

// Anser Section -------------





// ***********************************************************

let audioTon = document.getElementById("audioTon");


let postSection = document.querySelector('.meText');
let inputPostText = document.getElementById("inputPostText");
let textSubmit = document.getElementById("textSubmit");






// Function to create a new post element
function createText(text) {
    if(inputPostText.value==''){
        return
    }
    else {
    let mePostDiv = document.createElement('div');
    mePostDiv.classList.add('postMe');

    let blankDiv = document.createElement('div');
    let textDiv = document.createElement('div');
    textDiv.classList.add('textDiv');

    let ptag = document.createElement('p');
    ptag.textContent = text;

    mePostDiv.appendChild(blankDiv);
    mePostDiv.appendChild(textDiv);
    textDiv.appendChild(ptag);
    inputPostText.value = "";
    return mePostDiv;
    }
}

// Function to handle the post submission
let postText = function(event) {
    event.preventDefault();
    let submit = createText(inputPostText.value);
    postSection.appendChild(submit);
    inputPostText.value = "";

}

// Add event listener to the submit button
textSubmit.addEventListener("click", function(event) {
    postText(event);
});