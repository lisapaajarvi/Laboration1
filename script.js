/** Reloads the page if the title is clicked */
let titleReload = document.getElementById("title");
titleReload.onclick = function() {
    document.location.reload(true);
    return false;
}
/** A box that displays the description of each scene */
let text = document.getElementById("textbox");

let button1 = document.getElementById("button-1");
let button2 = document.getElementById("button-2");
let button3 = document.getElementById("button-3");

/** A box that displays an image of the character and the carrot backpack */
let playerInfo = document.getElementById("player-info");

let playerID = ""
let tristanImage = document.getElementById("tristan-img");
let rubenImage = document.getElementById("ruben-img");
let backpackContainer = document.getElementById("carrot-backpack-container");
let backpack = document.getElementById("carrot-backpack");

let carrots = 0;
let currentScene = 0;

/** Chooses the character Tristan, adds photo and backpack, and starts game */
function chooseTristan(){
    playerID = "Tristan";
    playerInfo.appendChild(tristanImage);
    tristanImage.style.margin = "1rem";
    backpackContainer.style.display = "flex";
    presentScene();
}
/** Chooses the character Ruben, adds photo and backpack, and starts game */
function chooseRuben(){
    playerID = "Ruben";
    playerInfo.appendChild(rubenImage);
    rubenImage.style.margin = "1rem";
    backpackContainer.style.display = "flex";
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
    if(carrotsLeft === 1) {
        return "1 carrot"
    }
    else {
        return carrotsLeft + " carrots"
    }
}   

function showCarrotsInBackpack() {
    if (carrots === 1){
        backpack.innerHTML = "🥕"
    }
    else if (carrots === 2){
        backpack.innerHTML = "🥕🥕"        
    }
    else if (carrots === 3){
        backpack.innerHTML = "🥕🥕🥕"        
    }
    else if (carrots === 4){
        backpack.innerHTML = "🥕🥕🥕🥕"        
    }
    else if (carrots >= 5){
        backpack.innerHTML = "🥕🥕🥕🥕<br>🥕🥕🥕🥕"
            
    }
}

function showButtons(numberOfButtons) {
    if (numberOfButtons === 3){
        button3.style.display = "flex";
        button2.style.display = "flex";
    }
    else if (numberOfButtons === 2){
        button3.style.display = "none";
        button2.style.display = "flex";
    }
    else if (numberOfButtons === 1){
        button3.style.display = "none";
        button2.style.display = "none";
    }
}
function playVideo() {
    let guineaPigBridge = document.getElementById("guineapigbridge");
    if (scene.video === true) {
        guineaPigBridge.style.display = "flex";
        }
    else if (scene.video === false) {
        guineaPigBridge.style.display = "none";
    }
}

/**
 * 
 */
function presentScene(){
    let scene = getScene();    
    showButtons(scene.choices.length);
    text.innerHTML = scene.description;
    button1.innerHTML = scene.choices[0];
    button2.innerHTML = scene.choices[1];
    button3.innerHTML = scene.choices[2];
/*
    if (carrots >= 5){
        alert("Congratulations! Your backpack is full of carrots! Your mission was successful, and you can now return to your village.")
        button3.style.display = "none";
        button2.style.display = "none";
        button1.style.display = "none";
        body.backgroundImage = "url(./images/carrots.jpg)";
        text.innerHTML = "All the other guinea pigs welcome you home and throw a big party. You will always be remembered as " + playerID + ", the very brave and fluffy guinea pig hero!"
    }
*/
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
    //playVideo();
    showCarrotsInBackpack();
}    

button1.onclick = chooseRuben;

button2.onclick = chooseTristan;