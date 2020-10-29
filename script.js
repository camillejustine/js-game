// test skickar funktioner till html

// window.onload = start;



// Sidans array:

let array = [];
let answer = "";


// Game starts

function start() {
    array = [];

    let catLand = document.getElementById("stepOne").classList.toggle("hidden");

    array.push[catLand];
}

// First choice

function scene1() {
    array = [];
    
    let catLand = document.getElementById("stepTwo").classList.toggle("hidden");
    
    array.push(catLand);
}

// Second choice

function scene2() {
    array = [];
    
    let catLand = document.getElementById("stepThree").classList.toggle("hidden");
    
    array.push(catLand);
}


// Third choice

function end() {
    array = [];
    
    let catLand = document.getElementById("endScene").classList.toggle("hidden");
    
    array.push(catLand);
}

// Play again after death

function replay() {
    array = [];
    
    let catLand = document.getElementById("introScene").classList.toggle("hidden");
    
    array.push(catLand);
}
