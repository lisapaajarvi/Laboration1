/** @type {HTMLHeadingElement} Main heading of the page */
let mainTitle = document.getElementById("title");

/** Reloads the page when the main heading is clicked */
mainTitle.onclick = function() {
    window.location = "";
}

/** @type {HTMLDivElement} A box that displays the description of each scene */
let text = document.getElementById("textbox");

/** @type {HTMLButtonElement} A button for choice 1*/
let button1 = document.getElementById("button-1");

/** @type {HTMLButtonElement} A button for choice 2*/
let button2 = document.getElementById("button-2");

/** @type {HTMLButtonElement} A button for choice 3*/
let button3 = document.getElementById("button-3");

/** @type {HTMLDivElement} A box that displays an image of the character and the carrot backpack */
let playerInfo = document.getElementById("player-info");

/** A variable that stores the name of the character */
let playerID = ""

/** @type {HTMLImageElement} An image of the character Tristan*/
let tristanImage = document.getElementById("tristan-img");

/** @type {HTMLImageElement} An image of the character Ruben*/
let rubenImage = document.getElementById("ruben-img");

/** @type {HTMLDivElement} A container for the carrot backpack */
let backpackContainer = document.getElementById("carrot-backpack-container");

/** @type {HTMLDivElement} A box that displays the number of carrots the player has */
let backpack = document.getElementById("carrot-backpack");

/** A variable that stores the number of carrots the player has */
let carrots = 0;

/** A variable that stores the number of the current scene */
let currentScene = 0;

/** Chooses the character Tristan, adds image and carrot backpack, and starts game */
function chooseTristan(){
    playerID = "Tristan";
    playerInfo.appendChild(tristanImage);
    tristanImage.style.margin = "1rem";
    backpackContainer.style.display = "flex";
    presentScene();
}

/** Chooses the character Ruben, adds image and carrot backpack, and starts game */
function chooseRuben(){
    playerID = "Ruben";
    playerInfo.appendChild(rubenImage);
    rubenImage.style.margin = "1rem";
    backpackContainer.style.display = "flex";
    presentScene();
}

/**
 * Adds a number to the variable carrots and returns the total number with "carrot" or "carrots"
 * @param {Number} addedcarrots number of carrots added
 * @returns {String} text with number of carrots
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
 * Calculates how many carrots are left until mission accomplished, and returns the total number with "carrot" or "carrots"
 * @returns {String} text with number of carrots
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

/**
 * Displays how many carrots the player has with carrot emojis inside the div "backpack"
 */
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
    else if (carrots === 5){
        backpack.innerHTML = "🥕🥕🥕🥕🥕"        
    }
    else if (carrots > 5){
        backpack.innerHTML = "🥕🥕🥕🥕🥕<br>🥕🥕🥕🥕🥕"       
    }
}

/**
 * Displays or hides buttons (1-3) for each scene
 * @param {Number} numberOfButtons 
 */
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

/**
 * Displays or hides a video of the Guinea Pig Bridge
 * @param {Boolean} videoAvailable shows if there is an available video or not
 */
function showVideo(videoAvailable) {
    let guineaPigBridge = document.getElementById("guineapigbridge");
    if (videoAvailable === true) {
        guineaPigBridge.style.display = "flex";
        }
    else if (videoAvailable === false) {
        guineaPigBridge.style.display = "none";
    }
}

/**
 * Presents the scene with a description and buttons with descriptions for each choice
 */
function presentScene(){
    


    let scene = getScene();   
    if (carrots >= 5){
        currentScene = 41;
        scene = getScene();
    }
    
    showButtons(scene.choices.length);
    text.innerHTML = scene.description;
    button1.innerHTML = scene.choices[0];
    button2.innerHTML = scene.choices[1];
    button3.innerHTML = scene.choices[2];
    if (currentScene === 41){
        button1.onclick = function() {
        window.location = "";
        }
        carrots = 10;
    }
    else {
        button1.onclick = function() {
            currentScene = scene.nextScene[0]; 
            presentScene();      
        }
    } 
    button2.onclick = function() {
        currentScene = scene.nextScene[1];
        presentScene();
    }
    button3.onclick = function() {
        currentScene = scene.nextScene[2];
        presentScene();
    }
    showVideo(scene.video);
    showCarrotsInBackpack();
}    

button1.onclick = chooseRuben;

button2.onclick = chooseTristan;