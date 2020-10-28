
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
let carrotsLeft = 5 - carrots;
let currentScene = 0;


function chooseTristan(){
    playerID = "Tristan";
    presentScene();
}

function chooseRuben(){
    playerID = "Ruben";
    presentScene();
}


function getScene() {
    switch(currentScene){
        case 0: 
            return {
                description: "It's a beautiful, sunny autumn day. You have just left the Fluffy Guinea Pig Village, and there is a road straight ahead of you. To the left is a huge field of grass, and to the right is a forest. What will you do?",
                choices: ["Go straight", "Go left", "Go right"],
                nextScene: [1, 2, 3]
            };
        case 1:
            return {
                description: "After walking for a while, you notice someone coming towards you. It looks like a large animal. What do you do?",
                choices: ["Keep walking", "Hide by the side of the road"],
                nextScene: [4, 5]
            };
        case 2:    
            return {
                description: "The grass is very tall and covers you completely. After walking for a while, you notice that you're feeling a bit hungry. It's been almost an hour since breakfast, and the grass looks delicious. What do you do?",
                choices: ["Eat grass", "Keep walking, don't let anything distract you from your mission"],
                nextScene: [11, 10]
            };
        case 3:
            return {
                description: "The forest is dark and scary. You remember all the stories your grandmother told you, about other fluffy guinea pigs who went into the forest and never came back. This might not be such a good idea after all. Suddenly, you hear a cracking sound. What do you do?",
                choices: ["Turn back and run for your life", "Hide in a pile of leaves", "Get ready to fight"],
                nextScene: []
            };
            // THE ROAD 4-9
        case 4: 
            return {
                description: "Today is your lucky day! The animal was a friendly capybara. She offers you a carrot. What do you do?",
                choices: ["Eat the carrot", "Put the carrot in my backpack"],
                nextScene: [7, 8]
            };
        case 5:    
            return {
                description: "When the animal comes closer, you can see that it is a capybara. It is very big, but it looks friendly. What do you do?",
                choices: ["Go out and talk to the capybara", "Stay hidden until the capybara has passed"],
                nextScene: [6, 9]
            };
        case 6:
            return {
                description: "The capybara is very kind and offers you a carrot. What do you do?",
                choices: ["Eat the carrot", "Put the carrot in my backpack"],
                nextScene:[7, 8]
            };
        case 7:
            return {
                description: "The carrot was delicious! But don't forget about your mission. You still have to find " + printCarrotsLeft() + " to bring back to your village.",
                choices: ["Continue"],
                nextScene: [9]
            };
        case 8:
    
            return {
                description: "Congratulations! You now have " + printCarrots(++carrots) + " in your backpack. Only " + printCarrotsLeft() + " left until mission is finished.",
                choices: ["Continue"],
                nextScene: [9]
            };
        case 9:
            return {
                description: "After a long walk you reach a river. It looks like there's a carrot field on the other side! What do you do?",
                choices: ["Swim over", "Look for a bridge"],
                nextScene: []
            };

        // THE GRASS AND THE GARDEN

        case 10:
            return {
                description: "You struggle hard to carry on with your mission, but it's been hours since your last meal and now you're too hungry and too tired to resist all that tempting grass. You're a guinea pig after all, so you have to spend 80% of your time eating or sleeping.",
                choices: ["Eat grass", "Continue anyway, until you faint and start eating grass in your sleep" ],
                nextScene: [11, 11]
            };
        case 11:
            return {
                description: "Wow, that grass was delicious! Now you feel energized and ready for anything! After a quick nap you continue walking, and reach the end of the field. You see a cottage with a little garden. What do you do?",
                choices: ["Investigate the cottage", "Investigate the garden"],
                nextScene: [16, 12]
            };
        case 12:
            return {
                description: "The garden looks well tended, and is full of vegetables that have not yet been harvested. You spot a row of carrots! What do you do?",
                choices: ["Pull the carrots", "Go to the cottage instead"],
                nextScene: [13, 16]
            };
        case 13:
            return {    
                description: "Unfortunately, most carrots are too heavy for you to pull up by yourself. But at last you find one that you can pull up. Success! What do you do?",
                choices: ["Eat the carrot", "Put the carrot in my backpack"],
                nextScene: [14, 15]
            };
        case 14:
            return {   
                description: "The carrot was delicious! But don't forget about your mission. You still have to find " + printCarrotsLeft() + " to bring back to your village.",
                choices: ["Go to the cottage", "Go back to the road"],
                nextScene: [16, ]
            };
        case 15:
            return {
                description: + printCarrots(++carrots) + " in your backpack. Only " + printCarrotsLeft() + " left until you have finished your mission.",
                choices: ["Go to the cottage", "Go back to the road"],
                nextScene: [16, ]
            };

// THE COTTAGE
        case 16:
            return {
                description: "The cottage looks nice and cozy, some humans might be living here. The door is slightly open. Do you want to sneak inside?",
                choices: ["Yes", "No"],
                nextScene: [18, 17]
            };
        case 17:
            return {
                description: "You're standing in front of the house. Where do you want to go?",
                choices: ["To the garden", "Back to the road"],
                nextScene: [12, ]
            };
        case 18:
            return {
                description: "You sneak into the cottage. It seems empty, and there is a faint smell of carrots coming from the kitchen. There is also a door to another room. What do you do?",
                choices: ["Go to the kitchen", "Go to the other room"],
                nextScene: [19, ]
            };
        case 19:
            return {
                description: "The sweet smell of carrots grows stronger as you enter the kitchen. There it is: a big basket of fresh carrots right in the middle of the room! But suddenly you notice that you are not alone. There is a huge black cat sleeping on a pillow by the window. It seems like cat hasn't noticed you yet. What do you do?",
                choices: ["Get out of there!", "Sneak quietly up to the basket to steal carrots"],
                nextScene: [17, 20]
            };
        case 20:
            return {
                description: "You manage to grab a carrot and put it in your backpack. Success! You now have " + printCarrots(++carrots) + " in your backpack. The cat seems to be moving a little. What do you do?",
                choices: ["Grab another carrot", "Sneak out as quietly as possible"],
                nextScene: [21, 17]             
            };
        case 21:
            return {
                description: "Oh no! Just as you reach for another carrot, the cat wakes up and jumps at you! You run for your life, as the cat lands its claws on your backpack. One carrot falls out, but you escape unharmed out through the door and into the field of grass. The cat won't find you here. You now have " + printCarrots(--carrots) + " in your backpack. Still " + printCarrotsLeft() + " left until your mission is finished. After walking through the grass you reach the main road. What do you do?",
                choices: ["Take the road straight ahead", "Go into the forest"],
                nextScene: [1, 3] 
            }

 //THE FOREST
 
    }        
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


button1.onclick = chooseRuben();

button2.onclick = chooseTristan();