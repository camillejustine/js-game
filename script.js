// test skickar funktioner till html

// window.onload = start;


/** Game starts */

function start() {

    document.getElementById("sceneOne").classList.toggle("hidden");
}

/** Get choices to if accept invitation or not*/

function accept() {

    document.getElementById("sceneTwo").classList.toggle("hidden");


}

/** Get choice to eat ice cream or not*/

function takeIceCream() {

    document.getElementById("sceneThree").classList.toggle("hidden");
}


/** Endings */

function end2() {

    document.getElementById("endScene2").classList.toggle("hidden");
}

function end() {

    document.getElementById("endScene").classList.toggle("hidden");
}

/** Play again */

function replay() {

        location.reload();
}
