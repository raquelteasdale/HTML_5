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

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Adventure Game</title>
    </head>
    <body>
            <h1>Adventure Game v1.8</h1>
            <p>Made by: Raquel Teasdale</p>
            <script>
                //Javascript Object for an inventory
                    var inventory = {
                        rope:1,
                    }





Game();

    function Game(){
    
        document.write("Embers of Escape");
        var playerName = prompt("What is your name?");
        alert("Welcome to the Topaz Temple "+ playerName);
    
        Temple();
    
        function Temple(){
        
            var temple = prompt("Your body is still. You look around, the area is cold and damp dripping with topaz inlignment along the echoing stone walls. Your head rolls to the side with a stiff movement, aching against the cold dampened ground. You are scared and disoriented. You feel your eyes heavy, lulling you back to sleep. \n - Look around \n - Rest eyes").toLowerCase();
    
            if(temple == "Look around" || temple == "Look"){
                
                    var temple = prompt("The space is quiet, you smell insence and it burns through your lungs. There is torches around the square room, flickering dimly. There is a cobble staircase to the West that leads with dim torches upwards, a silver sword flickering in the torchlight beside you, and a pile of coiled rope next to it. \n - Rest eyes \n - Sit up").toLowerCase;
                    
                    if(temple == "Sit up" || "Sit" || "Get up"){
                        var temple = prompt("You try to move your body, it aches with every movement. You move onto your side, pushing yourself upwards with all your strength. You are weak but manage to move yourself to a prone position, still very unaware of your surroundings. \n - Pick up sword \n - Pick up rope").toLowerCase;
                    }
                    
                    else if(temple == "Rest eyes" || "Sleep" || "Go to sleep" || "Close eyes"){
                        alert("Your eyes weigh you down, you sink back into sleep, dreaming of the golden sun, running through a maze hidden by a canvas of blue roses.").toLowerCase;
                        var resume = confirm("Do you wish to continue?");
                        
                        if(resume){
                            Temple();
                        }
                        else{
                            alert("Game Over.");
                        }
                    }
                       
                               
                    if(temple == "Pick up sword" || "Examine sword"){
                        var temple = prompt("You pick up the sword, it weighs down your arms, cold and heavy. It has a twisting design climbing up the silver and rooting and twisting around the handle. You examine it with an exhale before shaking yourself awake and standing. \n - Pick up rope").toLowerCase;
                    }
                    
                    if(temple == "Pick up rope" || "Take rope" || "Examine rope"){
                        var temple = prompt("You pick up the rope. It is heavy and dirty. \n - Stand up").toLowerCase;
                    }
                    
                    if(temple == "Stand up"  || "Stand"){
                        var temple = prompt("You stand, your muscles ache but you manage to stand heavy against your feet, taking in the box room. Only one way to go. \n - Go West").toLowerCase;
                    }
                    
                    if(temple == "Go West"){
                        var temple = prompt("You walk to the West, an empty staircase leads upwards. Befor you acend, you examine a torch on the wall; the torch flickers with orange light. \n Take torch \n Walk up").toLowerCase;
                        
                    if(temple == "Take torch"){
                        alert("You take the torch, it illuminates the area as you wave it in front of you. You walk upwards.")    
                    
                    else if(temple == "Walk up"){
                        var temple = prompt("You walk upwards. It is too dark to see. You walk back towards the torch. \n - Take torch").toLowerCase;
                    }
            
            function higherRoom(){
                var higherRoom = prompt("")
            }    
            
        
            else(templeSleep == "Pick up rope" || "Take rope" || "Examine rope"){
                alert("You pick up the rope. It is heavy and dirty.");
                var resume = confirm("Do you wish to continue?").toLowerCase();
            
            if(resume){
                Temple();
            }
            else{
                alert("Game Over.");
                
            }
        }  
    }
    
        
        
        
        
        
}