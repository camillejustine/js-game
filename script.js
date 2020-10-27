



// Sidans array:
let listItem = []


// Change text in html

function start() {
    listItem = [];
    
    let catLand = document.getElementById("startText").innerHTML = 
        'Welcome to Catland. Would you like an icecream?';

    document.getElementById("userAnswer").classList.toggle("hidden");
    
    listItem.push(catLand);
}


function clear() {
    document.getElementById("userAnswer").value = "";
  }

function userAnswer() {
    listItem = [];

    let answer = document.getElementById("userAnswer");

    listItem.push(answer);
  }



// Game start


let answer = document.getElementById("userAnswer").value;

if (answer === "yes") {

    document.getElementById("yes").classList.toggle("hidden");

    listItem.push(answer);

  } 