/** Reloads the page if the title is clicked */
let titleReload = document.getElementById("title");
titleReload.onclick = function() {
    document.location.reload(true);
    return false;
}
/** The box that displays the description of each scene */
let text = document.getElementById("textbox");
let button1 = document.getElementById("button-1");
let button2 = document.getElementById("button-2");
let button3 = document.getElementById("button-3");

/** */
let playerInfo = document.getElementById("player-info");
let playerID = ""

let carrots = 0;
let currentScene = 0;

/** Chooses the character Tristan and starts game */
function chooseTristan(){
    playerID = "Tristan";
    presentScene();
}
/** Chooses the character Ruben and starts game */
function chooseRuben(){
    playerID = "Ruben";
    presentScene();
}

/**
 * Adds a number to the variable carrots, then returns it with "carrot" or "carrots" added
 * @param {Number} addedcarrots 
 */
function printCarrots (addedcarrots){
    carrots = carrots + addedcarrots;
    if(carrots === 1) {
        return "1 carrot"
    }
    else {
        return carrots + " carrots"
    }
}
/** 
 * Calculates how many carrots are left until mission accomplished, 
 * and returns the number with "carrot" or "carrots" added  
 */

function printCarrotsLeft (){
    let carrotsLeft = 5 - carrots;
    if(carrots === 1) {
        return "1 carrot"
    }
    else {
        return carrotsLeft + " carrots"
    }
}    
/**
 * 
 */
function presentScene(){
    let scene = getScene();    
    text.innerHTML = scene.description;
    button1.innerHTML = scene.choices[0];
    button2.innerHTML = scene.choices[1];
    button3.innerHTML = scene.choices[2];
    if (scene.choices.length === 3){
        button3.style.display = "flex";
        button2.style.display = "flex";
    }
    else if (scene.choices.length === 2){
        button3.style.display = "none";
        button2.style.display = "flex";
    }
    else if (scene.choices.length === 1){
        button3.style.display = "none";
        button2.style.display = "none";
    }
    if (scene.video === true) {
        let guineaPigBridge = document.getElementById("guineapigbridge");
        guineaPigBridge.style.display = "flex";
        }

    if (carrots >= 5){
        alert("Congratulations! Your backpack is full of carrots! Your mission was successful, and you can now return to your village.")
        button3.style.display = "none";
        button2.style.display = "none";
        button1.style.display = "none";
        body.backgroundImage = "url(./images/carrots.jpg)";
        text.innerHTML = "All the other guinea pigs welcome you home and throw a big party. You will always be remembered as " + playerID + ", the very brave and fluffy guinea pig hero!"
    }

    button1.onclick = function() {
        currentScene = scene.nextScene[0]; 
        presentScene();      
    } 
    button2.onclick = function() {
        currentScene = scene.nextScene[1];
        presentScene();
    }
    button3.onclick = function() {
        currentScene = scene.nextScene[2];
        presentScene();
    }
}    

button1.onclick = chooseRuben;

button2.onclick = chooseTristan;