
let titleReload = document.getElementById("title");
titleReload.onclick = function() {
    document.location.reload(true);
    return false;
}

let start = document.getElementById("start");
let text = document.getElementById("textbox");
let button1 = document.getElementById("button-1");
let button2 = document.getElementById("button-2");
let button3 = document.getElementById("button-3");
let playerInfo = document.getElementById("player-info");
let playerID = ""

let carrots = 0;
let currentScene = 0;


function chooseTristan(){
    playerID = "Tristan";
    presentScene();
}

function chooseRuben(){
    playerID = "Ruben";
    presentScene();
}

function printCarrots (carrots){
    if(carrots === 1) {
        return "1 carrot"
    }
    else {
        return carrots + " carrots"
    }
}
function printCarrotsLeft (){
    let carrotsLeft = 5 - carrots;
    return printCarrots(carrotsLeft);
}    

function presentScene(){
    let scene = getScene();
    text.innerHTML = scene.description;
    button1.innerHTML = scene.choices[0];
    button2.innerHTML = scene.choices[1];
    button3.innerHTML = scene.choices[2];
    if (scene.choices.length == 3){
        button3.style.display = "inline";
    }
    else {
        button3.style.display = "none";
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