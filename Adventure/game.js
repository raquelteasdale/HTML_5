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
            
            else if(adventure == "follow compass" || adventure == "compass"){
                Compass();
            }
            
        }
        
        function Compass(){
            
            var compass = prompt("You start walking north through the golden field, wheat brushes against your legs. You can hear something tossing in the wheat ahead, but you cannot see what. /n - Continue North /n - Go Right /n - Go Left").toLowerCase();
                
            if(compass == "continue north" || compass == "north"){
                alert("You continue to walk towards the sun, you hear growling in front of you. A strange hound leaps through the golden canvas, it jumps on you. You try and fight it off of you but you fail, it nips your arm and drags you into the wheat, you die.")
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
            
            else if(right == "follow compass" || right == "compass"){
                Compass2();
            }
        }
            
        function Home(){
            
            var home = prompt("You reach the home. It is small and made of old wood. It looks empty and abandoned. A mohagany door hangs broken off its hinges. You feel a presence. /n - Enter home /n - Do not enter").toLowerCase();
               
            if(home == "enter home" || home == "enter"){
                alert("You enter the home, the door collapses as you push it open a little more, making dust consume the room and a loud slam to echo through the area. A faint growl is heard. Your heart beats as you recover. A hound leaps into view. You are chewed alive.")
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
            }
            
            else if(rabbit == "leave rabbit alone" || rabbit == "leave rabbit"){
                var rabbit = prompt("You notice the rabbit foaming at the mouth and decide to leave it alone, fearing as it skips around you. /n - Continue walking /n - Run from rabbit").toLowerCase();
            }
            
            if(rabbit == "continue walking" || rabbit == "continue"){
                alert("You continue your slow pace, the rabbit bites your ancle. You die of rabbies.")
            }
            
            else if(rabbit == "run from rabbit" || rabbit == "run"){
                Alpine();
            }
        }
            
        function Alpine(){
            var alpine = prompt("You escape the red eyed foaming rabbit, pacing yourself into a glowing forest.").toLowerCase();
            
            ;
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