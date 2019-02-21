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

var player = {
    race:"Human",
    age:28,
    backpack:{
        grapple:0,
        water:0,
        knife:0,
    }
}

var backpackChk = function(){
    alert("Grapple: "+player.backpack.grapple+"\n Water: "+player.backpack.water+"\n Knife: "+player.backpack.knife);
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
        
        alert("Welcome to the Golden Compass Adventure "+ playerName);
    
        Adventure();
        
        function Adventure(){
            
            var adventure = prompt("You are in a blank golden field, a compass in your hand. /n - Look /n - Follow compass").toLowerCase();
            
            if(adventure == "look" || adventure == "look around"){
                alert("You breath in the fresh air, the sun is setting in front of you and you look down at your compass. It points towards the golden sun.");
                Compass();
            }
            
            else if(adventure == "follow compass" || adventure == "compass" || adventure == "follow"){
                Compass();
            }
            
        }
        
        function Compass(){
            
            var compass = prompt("You start walking north through the golden field, wheat brushes against your legs. You can hear something tossing in the wheat ahead, but you cannot see what. /n - Continue North /n - Go Right /n - Go Left").toLowerCase();
                
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

            var right = prompt("You go right. The wheat soon turns into an open green land, the animal behind you howls. You see a home far off, your direction points North but you are now walking East. /n - Continue to the home /n - Follow compass").toLowerCase();
        
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
            var downstream = prompt("You find a backpack wedged between a few stones beside the stream. \n - Search backpack \n - Leave backpack alone");
            
            if(downstream == "search backpack" || downstream == "search"){
                var downstream("You grab the torn backpack and unzip it. It holds rope with a grappel at the end, an empty bottle, and a knife strapped inside. \n - Take backpack \n - Leave backpack").toLowerCase();
            }
            
            else if(downstream == "leave backpack alone" || downstream == "leave backpack"){
                var upstream("You leave the backpack untouched. It seems there is not much downstream. You decide to back up it to your original spot. \n - Go back to starting point \n - Go upstream").toLowerCase();
            }
            
            if(downstream == "take backpack"){
                player.backpack.grapple ++;
                player.backpack.water ++;
                player.backpack.number ++;
            }
            
            if(downstream == "Go back to starting point"){
                Compass();
            }
            
            else if(downstream == "go upstream"){
                Upstream();
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
                    var alpine = prompt("You go north. It seams this is the way the compass points, though the path leads to the base of a cliff in a clearing. There is no way around, you feel your shoulders heavy as you sigh, your backpack weighing you down. \n - backpack").toLowerCase();
                
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
            var removeItem = prompt("What item would you like to remove from backpack? \n - Grapple \n - Water \n - Knife");
                        
                if(removeItem == "grapple"){
                    player.backpack.grapple --;
                    alert("You take the grapple, it is heavy.");
                    Grapple();
                }
                            
                if(removeItem == "water"){
                    player.backpack.water --; 
                    var alpine = prompt("You take the water out of your backpack. \n - drink \n - don't drink");
                        
                if(alpine == "drink" || alpine == "drink water"){
                    alert("You drink the last of your water.")
                }
                        
                else if(alpine == "don't drink" || alpine == "don't drink water"){
                    player.backpack.water ++;
                    alert("You put the water back into your backpack.")
                }
                    
                }
                        
                else if(removeItem == "knife"){
                    alert("You hold the knife in your caloused hand. It shimmers as you twist it in the sunlight. You put it back in your backpack, it is of no use.");
                }
            
            Backpack();
        }
        
        function Grapple(){
            alert("You examine the grapple, and look up at the cliff. You wish to ascend it.");
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