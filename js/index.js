// Your code goes here

//Button Color (click)
let button = document.querySelectorAll(".btn");

button.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.target.style.color = "orange";
    })
})

//Button Resizing (mouseover)
button.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
        event.target.style.transform = "scale(1.3)";
        event.target.style.transition = "transform .7s";
    })
})

//Picture Resizing (wheel)
let wheelPic = document.querySelector(".content-destination img");

wheelPic.addEventListener("wheel", (event) => {
    event.preventDefault();
    event.target.style.transform = "scale(1.3)";
}) 

//Picture Rotating (dblclick)
let headerPic = document.querySelector(".intro img");

headerPic.addEventListener("dblclick", (event) => {
    event.target.style.transform = "rotate(360deg)";
    event.target.style.transition = "transform 1s";
})

//Text Deletion (cut)
let cutText = document.querySelector(".content-section p");

cutText.addEventListener("cut", (event) => {
    const selection = document.getSelection();
    selection.deleteFromDocument();
    event.preventDefault;
})

//Nav Background (mousemove)
let nav = document.querySelector("header");

let colors = ['#1f1fff', '#4992ff', '#7cdaff', '#6453ff'];
nav.addEventListener("mousemove", (event) => {
    event.target.style.backgroundColor = "#7cdaff";
    event.target.style.color = "#4992ff";
})

// Context Menu Cancellation, Rotation (contextmenu, auxclick)
let noMenu = document.querySelectorAll(".content-section img");

noMenu.forEach((element) => {
    element.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    })
    
    element.onauxclick = function(event) {
        element.style.transform = "rotate(45deg)";
        element.style.transition = "transform .5s"
    }
})

//Erasing Paragraphs (pointerlockchange)
let erasedPara = document.querySelectorAll(".destination p");

erasedPara.forEach((element) => {
    element.addEventListener("mouseenter", (event) => {
        element.style.border = "5px solid green";
        element.style.color = "#6453ff";
    })
})

//Changing Body Color (keyup)
let bodyColor = document.querySelector("body");

bodyColor.addEventListener("keyup", (event) => {
    bodyColor.style.backgroundColor = "#6453ff";
})

