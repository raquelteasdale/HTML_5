//single line comment
/*

multiline comment

*/


// document.write("<h1>I can't wait for <em>spring!</em></h1>");

//alert("Warning! will Robinson...Warning!");

//confirm("Do you like pokemon?");

//prompt("What type of pokemon do you like?");

//var pc = prompt("What is your name?");

//confirm("So your name is "+pc);

// Game();

 //     function Game(){

 //     var wizardNames = ["bethazar", "Mordac", "Grendor", "Orco"];
 
 //     alert("Legend of "+wizardNames[Math.floor(Math.random()+ 4)]+"1");

 //     var playerName = prompt("What is your name?");

 //     alert("Welcome to the land of Drizdal "+ playername);

var inventory = {
    daggers:0,
    maxDaggers:5,
}

var player = {
    race:"Human",
    age:28,
    inventory:{
    
        backpack:{
    
            grapple:0,
        
            coins:0,
        
            water:{
            
                full:0,
            }
        }
    }
}

var backpackChk = function(){
    alert("Grapple: "+player.inventory.backpack.grapple+"\n Water: "+player.inventory.backpack.water+"\n Coins: "+player.inventory.backpack.coins);
}

function GetRandInt(max){
    var randInt = Math.floor(Math.random()*Math.floor(max));
    
    return randInt;
}

// Start Game

Game();

    function Game(){
        
        var characterNames = ["Wanderer", "Traveler", "Rover", "Rambler"]
        
        document.write("Golden Compass Adventure");
        
        alert("Legend of the "+characterNames[Math.floor(Math.random()* 4)]+"!");
        
        var playerName = prompt("What is your name?");
        
        while(!confirm("Are you sure you want "+playerName+" as your name?")){
            playerName = prompt("What is your name?");
        }
        
        alert("Welcome to the Golden Compass Adventure "+ playerName);
    
        Adventure();
        
        function Adventure(){
            
            var adventure = prompt("You are in a blank golden field, a compass in your hand. \n - Look \n - Follow compass").toLowerCase();
            
            if(adventure == "look" || adventure == "look around"){
                alert("You breath in the fresh air, the sun is setting in front of you and you look down at your compass. It points towards the golden sun.");
                Compass();
            }
            
            else if(adventure == "follow compass" || adventure == "compass" || adventure == "follow"){
                Compass();
            }
            else if(adventure == "skip"){
                Grapple();
            }
            
        }
        
        function Compass(){
            
            var compass = prompt("You start walking north through the golden field, wheat brushes against your legs. You can hear something tossing in the wheat ahead, but you cannot see what. \n - Continue North \n - Go Right \n - Go Left").toLowerCase();
                
            if(compass == "continue north" || compass == "north"){
                alert("You continue to walk towards the sun, you hear growling in front of you. A strange hound leaps through the golden canvas, it jumps on you. You try and fight it off of you but you fail, it nips your arm and drags you into the wheat, you die.")
                Game();
            }
            
            else if(compass == "go right" || compass == "right"){
                Right();
            }
            
            else if(compass == "go left" || compass == "left"){
                Left();
            }
        }
            
        function Right(){

            var right = prompt("You go right. The wheat soon turns into an open green land, the animal behind you howls. You see a home far off, your direction points North but you are now walking East. \n - Continue to the home \n - Follow compass").toLowerCase();
        
            if(right == "continue to the home" || right == "continue" || right == "home"){
                Home();
            }
            
            else if(right == "follow compass" || right == "compass" || right == "follow"){
                Compass2();
            }
        }
        
        function Left(){
            
            var left = prompt("You go left. There is a stream that trickles down a small hillside, shadowed by hovering oak trees, sunlight seeps through the leaves. The clear water is refreshing. It flowls endlessly. \n - Go Upstream \n - Go Downstream").toLowerCase();
            
            if(left == "go upstream" || left == "go up" || left == "up" || left == "upstream"){
                Upstream();
            }
            
            else if(left == "go downstream" || left == "go down" || left == "down" || left == "downstream"){
                Downstream();
            }
        }
        
        function Downstream(){
            var downstream = prompt("You find a backpack wedged between a few stones beside the stream. \n - Search backpack \n - Leave backpack");
            
            if(downstream == "search backpack" || downstream == "search"){
                var downstream = prompt("You grab the torn backpack and unzip it. It holds rope with a grappel at the end, an empty bottle, and a total of 5 coins. \n - Take backpack \n - Drop backpack").toLowerCase();
            }
            
            else if(downstream == "leave backpack" || downstream == "leave"){
                alert("You leave the backpack untouched. It seems there is not much downstream. You decide to scale back up the stream to starting point");
                    Compass();
            }
            
            if(downstream == "take backpack" || downstream == "take"){
                takeBackpack();
            }
            
            else if(downstream == "drop backpack" || downstream == "drop"){
                alert("You leave the backpack untouched. It seems there is not much downstream. You decide to scale back up the stream to starting point.");
                    Compass();
            }

        }
        
        function takeBackpack(){
            
            player.inventory.backpack.grapple ++;
            
            player.inventory.backpack.coins +=5;
            
            var takebackpack = prompt("You took the backpack. You stop by the stream, it runs of clean endless water. \n - Fill bottle \n - Drink").toLowerCase();
            
            if(takebackpack == "fill bottle" || takebackpack == "fill water bottle" || takebackpack == "fill"){
                
                player.inventory.backpack.water.full ++;
                
                alert("You take your bottle and fill it with cool water, latching it back into your backpack. You go back to starting point.");
                    Compass();
            }
            
            else if(takebackpack == "drink" || takebackpack == "drink stream"){
                alert("You drink from the stream with your hands, replenishing your thirst. You walk back to starting point.")
                    Compass();
            }
        }
        
        function Upstream(){
            alert("You go upstream.")
        }
            
        function Home(){
            
            var home = prompt("You reach the home. It is small and made of old wood. It looks empty and abandoned. A mohagany door hangs broken off its hinges. You feel a presence. /n - Enter home /n - Do not enter").toLowerCase();
               
            if(home == "enter home" || home == "enter"){
                alert("You enter the home, the door collapses as you push it open a little more, making dust consume the room and a loud slam to echo through the area. A faint growl is heard. Your heart beats as you recover. A hound leaps into view. You are chewed alive.")
                Game();
            }
            
            else if(home == "do not enter" || home == "don't enter"){
                Compass2();
            }
        }
        
        function Compass2(){
            
            var compass2 = prompt("You follow the compass instead of entering. You hear a howl grow from within the home behind you. You shake your head, looking at the compass. It leads you back North and you soon grow hungry as you walk. You see a rabbit. /n - Follow rabbit").toLowerCase();
             
            if(compass2 == "follow rabbit" || compass2 == "follow" || compass2 == "rabbit"){
                Rabbit();
            }
        }
            
        function Rabbit(){
            var rabbit = prompt("A rabbit leaps around your feet. /n - Capture rabbit /n - Leave rabbit alone").toLowerCase();
        
            if(rabbit == "capture rabbit" || rabbit == "capture"){
                alert("You leap on the rabbit, it's legs push against your grip. It's eyes turn red and it fights againt your hold. You notice it foaming at the mouth, it bites your hand and you drop the rabbit. You die of rabbies.")
                Game();
            }
            
            else if(rabbit == "leave rabbit alone" || rabbit == "leave rabbit" || rabbit == "leave"){
                var rabbit = prompt("You notice the rabbit foaming at the mouth and decide to leave it alone, fearing as it skips around you. /n - Continue walking /n - Run from rabbit").toLowerCase();
            }
            
            if(rabbit == "continue walking" || rabbit == "continue"){
                alert("You continue your slow pace, the rabbit bites your ancle. You die of rabbies.")
                Game();
            }
            
            else if(rabbit == "run from rabbit" || rabbit == "run"){
                Run();
            }
        }
            
        function Run(){
            alert("You escape the red eyed foaming rabbit, pacing yourself into a glowing forest. You see an old oak sign tilted in the dirt. It points four directions.");
            Alpine();
        }
        
        function Alpine(){
            var alpine = prompt("north - south - east - west").toLowerCase();
            
            switch(alpine){
                case "north" || "go north":
                    var alpine = prompt("You go north. It seams this is the way the compass points, though the path leads to the base of a cliff in a clearing. There is no way around, you feel your shoulders heavy as you sigh, your backpack weighing you down. \n - Backpack").toLowerCase();
                
                    if(alpine == "backpack"){
                        backpackChk();
                        Backpack();
                          
                    }
                
                    
                break;
                case "south" || "go south":
                    alert("You go south. You see the house again in the distance, a howl is heard from inside.");
                    Alpine();
                    
                break;
                case "east" || "go east":
                    alert("You go east. There is nothing but forest.");
                    Alpine();
                    
                break;
                case "west" || "go west":
                    alert("You go west. There is nothing but a golden meadow.");
                    Alpine();
                    
                break;
                default:
                    alert(""+alpine+" is not a direction.")
                    Alpine();
                
                break;
                        
            }
            
            Alpine();
          
        }
        
        function Backpack(){       
            var removeItem = prompt("What item would you like to remove from backpack? \n - Coins \n - Grapple \n - Water");
                
                if(removeItem == "coins"){
                    if(player.inventory.backpack.grapple > 0){
                    alert("You hold the coins, they are heavy. They are of no use, you put the coins back.")
                    }
                    else{
                        alert("You have no coins.")
                    }
                    Backpack();
                }
            
                if(removeItem == "grapple"){
                    if(player.inventory.backpack.grapple > 0){
                    player.inventory.backpack.grapple --;
                    alert("You take the grapple, it is heavy.");
                    Grapple();
                    }
                    else{
                        alert("You have no grapple.")
                    }
                    Backpack();
                }
                            
                if(removeItem == "water"){
                    if(player.inventory.backpack.water > 0){
                    player.inventory.backpack.water.full --;
                    var alpine = prompt("You take the water out of your backpack. \n - drink \n - don't drink");
                    }
                    
                if(alpine == "drink" || alpine == "drink water"){
                    alert("You drink the last of your water.")
                }
                        
                else if(alpine == "don't drink" || alpine == "don't drink water"){
                    
                    player.inventory.backpack.water.full ++;
                    
                    alert("You put the water back into your backpack.")
                }
                    else{
                        alert("You have no water.")
                    } 
                }
            
            Backpack();
        }
        
        function Grapple(){
            alert("You examine the grapple, and look up at the cliff. It looks as if there is a ledge on the cliff, leading into an open cave. You latch the grapple to the ledge and ascend, soon reaching the cave. Breathing heavily. There is an elf waiting at the entrance with a torch. It's eyes are filled with merriment and it looks happy to see you. The cave looks dark.");
            
            var grapple = prompt("Hello. Would you like to trade? I have daggers, the trolls are horrible down there. \n - Trade \n - No thanks").toLowerCase();
            
            if(grapple == "trade"){
                Trade();
            }
            
            else if(grapple == "no thanks" || grapple == "no" || grapple == "no thank you"){
                Venture();
            }
        }
        
        function Venture(){
            var venture = alert("You  proceed into the cave. It is dark. You trip and fall into a rivine and die.");
        }
        
        function Trade(){
            var daggerShop = 5;
            var daggerPrice = 1;
            
            var daggerCount = prompt("How many daggers would you like to purchase? \n - Daggers: "+daggerShop).toLowerCase();
        
            while(!confirm("Are you sure you want to purchase "+daggerCount+" dagger(s), for "+daggerPrice+" coin(s)?")){
                
            var daggerCount = prompt("How many daggers would you like to purchase?").toLowerCase();
            }
            
            for(i = 1; i <= daggerCount; i++){
                inventory.daggers ++;
                console.log("You have "+inventory.daggers+" daggers.");
            }
            
            alert("You have purchased "+daggerCount+" dagger(s). Thank you, here is a torch for your journey.");
                Cave();
        }
        
        function Cave(){
            if(inventory.daggers >=1){
                var cave = prompt("You venture into the cave. There is a troll, it blocks your path. You see a smiling and greeting man behind the troll. You must kill the troll to complete your adventure. \n - Throw daggers").toLowerCase();
            }
          
            if(cave == "throw daggers" || cave == "throw"){
                Throw();
            }
            
        }
        
        function Throw(){
            if (inventory.daggers == 5){
                alert("You throw 5 daggers into the Troll, exactly enough to kill it. You greet the man, he gives you a Saphire necklace, congradulating you. You have succeeded.");
            }
            
            else if(inventory.daggers <= 4){
                alert("You throw "+inventory.daggers+" at the Troll. He is hit but does not die. You are eaten by the Troll.");
            }
        }
    }
 //           function higherRoom(){
 //               var higherRoom = prompt(" - North - South - East - West - ").toLowerCase;
                
 //               switch(higherRoom){
 //                   case "North" || "Go North":
 //                       var North = prompt("You go north.");
                        
 //                       higherRoom();
 //                   break;
 //                   case "South" || "Go South":
 //                       alert("You go South.");
 //                   break;
 //                   case "East" || "Go East":
 //                       alert("You go East.");
 //                   break;
 //                   case "West" || "Go West":
 //                       alert("You go West.")
 //                       higherRoom();

 // Game();

 //     function Game(){

 //     var wizardNames = ["bethazar", "Mordac", "Grendor", "Orco"];
 
 //     alert("Legend of "+wizardNames[Math.floor(Math.random()+ 4)]+"1");

 //     var playerName = prompt("What is your name?");

 //     alert("Welcome to the land of Drizdal "+ playername);