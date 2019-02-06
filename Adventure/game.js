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


var inventory = {
    rope:0
}



Game();

    function Game(){
    
        document.write("Golden Adventure");
        var playerName = prompt("What is your name?");
        alert("Welcome to the Golden Adventure "+ playerName);
    
        Adventure();
        
        function Adventure(){
            
            var adventure = prompt("You are in a blank golden field, a compass in your hand. /n - Look /n - Follow compass").toLowerCase();
    
            if(adventure == "look" || "look around"){
                var adventure = prompt("You breath in the fresh air, the sun is setting in front of you and you look down at your compass. It points towards the sun. /n - Follow compass.").toLowerCase;
            }
            
            else if(adventure == "follow compass"){
                Compass();
            }
        }
        
        function Compass(){
            
            var compass = prompt("You start walking north through the golden field, wheat brushes against your legs. You can hear something tossing in the wheat ahead, but you cannot see what. /n - Continue North /n - Go Right /n - Go Left").toLowerCase;
                
            if(compass == "continue North" || "north"){
                alert("You continue to walk towards the sun, you hear growling in front of you. A strange hound leaps through the golden canvas, it jumps on you. You try and fight it off of you but you fail, it nips your arm and drags you into the wheat, you die.").toLowerCase;
            }
            
            else if(compass == "go Right" || "right"){
                Right();
            }
            
            else if(compass == "go Left" || "left"){
                Left();
            }
        }
            
        function Right(){

            var right = prompt("You go right. The wheat soon turns into an open green land, the animal behind you howls. You see a home far off, your direction points Left but you are now walking East. /n - Continue to the home /n - Follow compass").toLowerCase;
        
            if(right == "continue to the home"){
                Home();
            }
        }
            
        function Home(){
            var home = prompt("You reach the home. It is small and made of old wood. It looks empty and abandoned. A mohagany door hangs broken off its hinges. You feel a presence. /n - Enter home /n -  Do not enter").toLowerCase;
               
            if(right == "enter home"){
                alert("You enter the home, the door collapses as you push it open a little more, making dust consume the room and a loud slam to echo through the area. A faint growl is heard. Your heart beats as you recover. A hound leaps into view. You are chewed alive.").toLowerCase;
            }
            else if(right == "do not enter"){
                var right = prompt("You follow the compass instead of entering. You hear a howl grow from within the home behind you. You shake your head, looking at the compass. It leads you back North and you soon grow hungry as you walk. You see a rabbit. /n - Follow rabbit").toLowerCase;
            }
            
            
            if(right == "follow rabbit"){
                Rabbit();
            }
        }
            
        function Rabbit(){
            var rabbit = prompt("A rabbit leaps around your feet. /n - Capture rabbit /n - Leave rabbit alone").toLowerCase;
        
            
            if(right == "capture rabbit"){
                alert("You leap on the rabbit, it's legs push against your grip. It's eyes turn red and it fights againt your hold. You notice it foaming at the mouth, it bites your hand and you drop the rabbit. You die of rabbies.").toLowerCase;
            }
            else if(right == "leave rabbit alone"){
                var right = prompt("You notice the rabbit foaming at the mouth and decide to leave it alone, fearing as it skips around you. /n - Continue walking /n - Run from rabbit").toLowerCase;
            }
            
            if(right == "continue walking"){
                alert("You continue your slow pace, the rabbit bites your ancle. You die of rabbies.").toLowerCase;
            }
            
            else if(right == "run from rabbit"){
                Alpine();
            }
        }
            
        function Alpine(){
            var alpine = prompt("You escape the red eyed foaming rabbit, pacing yourself into a glowing forest.").toLowerCase;
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