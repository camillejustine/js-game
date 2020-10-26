
var iceCream1 = "Yummy!";
var iceCream2 = "Oh no it has dairy!";


function chooseIceCream() {
    var response = document.getElementById("response").value;

if (response === '1') {
    document.getElementById("cream1").classList.toggle('hidden');
    document.getElementById("intro").classList.toggle('hidden');
}

else if (response === '2') {
    document.getElementById("cream2").classList.toggle('hidden');
    document.getElementById("intro").classList.toggle('hidden');
}

else { document.getElementById("error").innerHTML = "You need to choose an icecream." }

}