



// Sidans array:

let array = [];
let answer = "";

// Change text in html

function start() {
    array = [];
    
    let catLand = document.getElementById("startText").innerHTML = 
        'Welcome to Catland. Would you like an icecream?';

    document.getElementById("buttonSceneYes").classList.toggle("hidden");
    document.getElementById("buttonSceneNo").classList.toggle("hidden");
    
    array.push(catLand);
}

function scene1() {
    array = [];
    
    let catLand = document.getElementById("stepTwo").innerHTML = 
        'Hello here is scene 1';
    
    array.push(catLand);
}
