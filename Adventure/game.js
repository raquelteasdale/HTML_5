//single line comment
/*

multiline comment

*/


// document.write("<h1>I can't wait for <em>spring!</em></h1>");

//alert("Warning! will Robinson...Warning!");

//confirm("Do you like pokemon?");

//prompt("What type of pokemon do you like?");
Game();
//var pc = prompt("What is your name?");

//confirm("So your name is "+pc);

function Game(){
    
    document.write("Embers of Escape");
    var playerName = prompt("What is your name?");
    alert("Welcome to the Topaz Temple "+ playerName);
    
    Temple();
    
    function Temple(){
        var temple = prompt("Your body is still. You look around, the area is cold and damp dripping with topaz inlignment along the echoing stone walls. A hand wakes you and you flinch, your head rolls to the side with a stiff movement. A small being looks over the altar as you lay, its eyes barely peeking above the stone with a knowing grin. You look into its silver eyes, scared and disoriented. You feel your eyes heavy, lulling you back to sleep as the being's eyes twitch in merrament. /n - Look around /n - Rest eyes").toLowerCase();
    
        if(temple == "Look around" || temple == "Look"){
            var templeLook = prompt("The space is quiet, and you smell insence burning through your lungs. An altar is centered within the closed room, made of smooth stone dampened by the air. An elf stands aside you, ears sharp. There is a cobble staircase to your left that leads with dim torches upwards. /n - Rest eyes");
            
        }
        
        else if(temple == "Rest eyes" || temple == "Sleep"){
            alert("Your eyes weigh you down, you sink back into sleep, dreaming of the golden sun, running through a maze of white roses.");
            var resume = confirm("Do you wish to continue?");
            
            if(resume){
                Temple();
            }
            else{
                alert("Game Over:");
                
            }
        }
    }
    
    
    
    
    
}