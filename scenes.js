
function getScene() {
    switch(currentScene){
        case 0: 
            return {
                description: "It's a beautiful, sunny autumn day. You have just left the Fluffy Guinea Pig Village, and there is a road straight ahead of you. To the left is a huge field of grass, and to the right is a forest. What will you do?",
                choices: ["Go straight", "Go left", "Go right"],
                nextScene: [1, 2, 3]
            }
// THE BEGINNING 1-3            
        case 1:
            return {
                description: "After walking for a while, you notice someone coming towards you. It looks like a large animal. What do you do?",
                choices: ["Keep walking", "Hide by the side of the road"],
                nextScene: [4, 5]
            }
        case 2:    
            return {
                description: "The grass is very tall and covers you completely. After walking for a while, you notice that you're feeling a bit hungry. It's been almost an hour since breakfast, and the grass looks delicious. What do you do?",
                choices: ["Eat grass", "Keep walking, don't let anything distract you from your mission"],
                nextScene: [11, 10]
            }
        case 3:
            return {
                description: "The forest is dark and scary. You remember all the stories your grandmother told you, about other fluffy guinea pigs who went into the forest and never came back. This might not be such a good idea after all. Suddenly, you hear a cracking sound. What do you do?",
                choices: ["Turn back and run for your life", "Hide in a pile of leaves", "Get ready to fight"],
                nextScene: [30, 31, 34]
            }
// THE ROAD 4-9
        case 4: 
            return {
                description: "Today is your lucky day! The animal was a friendly capybara. She offers you a carrot. What do you do?",
                choices: ["Eat carrot", "Put carrot in backpack"],
                nextScene: [7, 8]
            }
        case 5:    
            return {
                description: "When the animal comes closer, you can see that it is a capybara. It is very big, but it looks friendly. What do you do?",
                choices: ["Go out and talk to the capybara", "Stay hidden until the capybara has passed"],
                nextScene: [6, 9]
            }
        case 6:
            return {
                description: "The capybara is very kind and offers you a carrot. What do you do?",
                choices: ["Eat carrot", "Put carrot in backpack"],
                nextScene:[7, 8]
            }
        case 7:
            return {
                description: "The carrot was delicious! But don't forget about your mission. You still have to find " + printCarrotsLeft() + " to bring back to your village.",
                choices: ["Continue"],
                nextScene: [9]
            }
        case 8:
    
            return {
                description: "Congratulations! You now have " + printCarrots(++carrots) + " in your backpack. Only " + printCarrotsLeft() + " left until mission is finished.",
                choices: ["Continue"],
                nextScene: [9]
            }
        case 9:
            return {
                description: "After a long walk you reach a river. It looks like there's a carrot field on the other side! What do you do?",
                choices: ["Swim across", "Look for a bridge"],
                nextScene: [37, 39]
            }

// THE GRASS AND THE GARDEN 10-15

        case 10:
            return {
                description: "You struggle hard to carry on with your mission, but it's been hours since your last meal and now you're too hungry and too tired to resist all that tempting grass. You're a guinea pig after all, so you have to spend 80% of your time eating or sleeping.",
                choices: ["Eat grass", "Continue anyway, until you faint and start eating grass in your sleep" ],
                nextScene: [11, 11]
            }
        case 11:
            return {
                description: "Wow, that grass was delicious! Now you feel energized and ready for anything! After a quick nap you continue walking, and reach the end of the field. You see a cottage with a little garden. What do you do?",
                choices: ["Investigate the cottage", "Investigate the garden"],
                nextScene: [16, 12]
            }
        case 12:
            return {
                description: "The garden looks well tended, and is full of vegetables that have not yet been harvested. You spot a row of carrots! What do you do?",
                choices: ["Pull the carrots", "Go to the cottage instead"],
                nextScene: [13, 16]
            }
        case 13:
            return {    
                description: "Unfortunately, most carrots are too heavy for you to pull up by yourself. But at last you find one that you can pull up. Success! What do you do?",
                choices: ["Eat carrot", "Put carrot in backpack"],
                nextScene: [14, 15]
            }
        case 14:
            return {   
                description: "The carrot was delicious! But don't forget about your mission. You still have to find " + printCarrotsLeft() + " to bring back to your village.",
                choices: ["Go to the cottage", "Go back to the road"],
                nextScene: [16, 22]
            }
        case 15:
            return {
                description:"You now have " + printCarrots(++carrots) + " in your backpack. Only " + printCarrotsLeft() + " left until you have finished your mission.",
                choices: ["Go to the cottage", "Go back to the road"],
                nextScene: [16, 22]
            }

// THE COTTAGE 16-29
        case 16:
            return {
                description: "The cottage looks nice and cozy, some humans might be living here. The door is slightly open. Do you want to sneak inside?",
                choices: ["Yes", "No"],
                nextScene: [18, 17]
            }
        case 17:
            return {
                description: "You're standing in front of the house. Where do you want to go?",
                choices: ["To the garden", "Back to the road"],
                nextScene: [12, 22]
            }
        case 18:
            return {
                description: "You sneak into the cottage. It seems empty, and there is a faint smell of carrots coming from the kitchen. There is also a door to another room. What do you do?",
                choices: ["Go to the kitchen", "Go to the other room"],
                nextScene: [19, 23]
            }
        case 19:
            return {
                description: "The sweet smell of carrots grows stronger as you enter the kitchen. There it is: a big basket of fresh carrots right in the middle of the room! But suddenly you notice that you are not alone. There is a huge black cat sleeping on a pillow by the window. It seems like cat hasn't noticed you yet. What do you do?",
                choices: ["Get out of there!", "Sneak quietly up to the basket to steal carrots"],
                nextScene: [17, 20]
            }
        case 20:
            return {
                description: "You manage to grab a carrot and put it in your backpack. Success! You now have " + printCarrots(++carrots) + " in your backpack. The cat seems to be moving a little. What do you do?",
                choices: ["Grab another carrot", "Sneak out as quietly as possible"],
                nextScene: [21, 17]             
            }
        case 21:
            return {
                description: "Oh no! Just as you reach for another carrot, the cat wakes up and jumps at you! You run for your life, as the cat lands its claws on your backpack. One carrot falls out, but you escape unharmed out through the door and into the field of grass. The cat won't find you here. You now have " + printCarrots(--carrots) + " in your backpack. Still " + printCarrotsLeft() + " left until your mission is finished. After walking through the grass you reach the main road. What do you do?",
                choices: ["Take the road straight ahead", "Go into the forest"],
                nextScene: [1, 3] 
            }
        case 22: 
            return {
                description: "You are standing at the main road from Fluffy Guinea Pig Village. What do you do?",
                choices: ["Take the road straight ahead", "Go into the forest on the other side"],
                nextScene: [1, 3]
            }
        case 23:
            return {
                description: "The room seems to be a bedroom. There is a human reading a book on the bed. Suddenly she notices you, and puts down her book. She looks surprised. What do you do?",
                choices: ["Run!", "Charm her with my overwhelming cuteness", "Prepare to fight"],
                nextScene: [24, 25, 28]
            }
        case 24:
            return {
                description: "You run out the door and into the grass. That was close! Soon you find yourself at the main road again. What do you do?",
                choices: ["Take the road straight ahead", "Go into the forest on the other side"],
                nextScene: [1, 3]
            }
        case 25:
            return {
                description: "Humans are well-known to be easily charmed by cuteness and fluffiness, and it works perfectly this time! The human gives you plenty of snacks and cuddles, you take a nap on a soft pillow, and just as you're about to leave she hands you a beautiful carrot. What do you do?",
                choices: ["Eat carrot", "Put carrot in backpack"],
                nextScene: [26, 27]
            }
        case 26:
            return {   
                description: "The carrot was delicious! But don't forget about your mission. You still have to find " + printCarrotsLeft() + " to bring back to your village.",
                choices: ["Continue back to the main road"],
                nextScene: [22]
            }
        case 27:
            return {
                description:"Well done! You now have " + printCarrots(++carrots) + " in your backpack. Only " + printCarrotsLeft() + " left until you have finished your mission.",
                choices: ["Continue back to the main road"],
                nextScene: [22]
            }
        case 28:
            return {
                description: "You fluff up your fur and bare your sharp teeth to prepare for battle as the human comes closer. However, she doesn't look frightened. And she doesn't look hostile either. She bends down to pick you up. What do you do?",
                choices: ["Bite!", "Charm her with my overwhelming cuteness"],
                nextScene: [29, 25]
            }
        case 29:
            return {
                description: "Just as the human is about to pick you up, you bite he hand as hard as you can. She screams and moves away, so you run for the door as fast as you can. This was a scary place! You run all the way through the grass, and finally arrive back at the main road. What do you do?",
                choices: ["Take the road straight ahead", "Go into the forest on the other side"],
                nextScene: [1, 3]
            }
 //THE FOREST 30-36
        case 30:
            return {
                description: "You run as fast as you can, until you reach the main road again. That was scary! But at least you made it back alive. What do you do?",
                choices: ["Take the road straight ahead", "Go into the field of grass on the other side"],
                nextScene: [1, 2]
            }
        case 31:
            return {
                description: "The pile of leaves is very soft and comfortable. You're getting sleepy, and decide to take a nap. When you wake up you notice that there is a carrot right next to you! How wonderful! Some other animal must have hid it there. What do you do?",
                choices: ["Eat carrot", "Put carrot in backpack"],
                nextScene: [32, 33]
            }
        case 32:
            return {   
                description: "The carrot was delicious! But don't forget about your mission. You still have to find " + printCarrotsLeft() + " to bring back to your village. But the forest is too scary, let's find the carrots somewhere else.",
                choices: ["Go back to the main road"],
                nextScene: [35]
            }
        case 33:
            return {
                description:"Well done! You now have " + printCarrots(++carrots) + " in your backpack. Only " + printCarrotsLeft() + " left until you have finished your mission. But the forest is too scary, let's find the carrots somewhere else.",
                choices: ["Go back to the main road"],
                nextScene: [35]
            }    
        case 34:
            return {
                description: "You fluff up your fur and bare your sharp teeth to prepare for battle. This should scare anyone away! However, the one who made the sound doesn't look hostile. It is a small human (also known as a child) with a basket, picking mushrooms in the forest. What do you do?",
                choices: ["Run! Humans are too big and cannot be trusted.", "Charm the human with my overwhelming cuteness"],
                nextScene: [30, 36]
            }
        case 35:
            return {
                description: "You're standing at the main road, in front of the forest. What do you do?",
                choices: ["Take the road straight ahead", "Go into the field of grass on the other side"],
                nextScene: [1, 2]
            }
        case 36:
            return {
                description: "Humans (especially small ones) are well-known to be easily charmed by cuteness and fluffiness. It's a perfect strategy this time. You recieve lots of snacks and cuddles, and the child even gives you a carrot as a parting gift. What do you do?",
                choices: ["Eat carrot", "Put carrot in backpack"],
                nextScene: [32, 33]
            }
 
// THE RIVER 37-
        
        case 37:
            return {
                description: "You bravely jump into the water, but it's too cold and you're not a very good swimmer. Guinea pigs don't like to swim. So you give up and crawl back up on the riverbank, with your fluffy fur all soaked and dirty. After drying yourself and a quick nap under some bushes your now have to decide on another strategy. What do you do?",
                choices: ["Look for a bridge", "Build a raft"],
                nextScene: [39, 38]
            } 
        case 38:
            return {
                description: "To build a raft you need to find some wood. As you walk along the riverbank in search of some branches, you notice some kind of structure a bit further downstream. Could that be a bridge?",
                choices: ["Investigate the structure"],
                nextScene: [39]
            }
        case 39:
            return {
                description: "There it is! As you walk further downstream, you see the outlines of a bridge. And not just any bridge. It is the bridge of dreams, the bridge of legends, the famous GUINEA PIG BRIDGE that you heard so much about. How wonderful to be able to see it with your own eyes! And even walk over it! This is a day you will never forget.",
                choices: ["Cross the bridge"],
                nextScene: [40]
            }    

 

    }        
}