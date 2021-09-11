const images = [
    "images/dice-1.svg",
    "images/dice-2.svg",
    "images/dice-3.svg",
    "images/dice-4.svg",
    "images/dice-5.svg",
    "images/dice-6.svg"];

let dice = document.querySelectorAll("img");
const rollButton = document.getElementById("roll");

function roll() {

    console.log("hey")
    dice.forEach(function (die) {
        die.classList.add("shake");        
    });
    setTimeout(function () {
        dice.forEach(function (die){            
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()* images.length);
        let dieTwoValue = Math.floor(Math.random()* images.length);

        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue + 1));
    },
    1000
    );    
};

rollButton.addEventListener("click" , roll);
roll();