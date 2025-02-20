// Initialize the current scene to scene 0 (Intro)
var curScene = 0;

function changeScene(option) {
        // Clear the scene message
        var message = "";
    
        if (curScene == 0) {
                curScene = 1;
                message = "Your journey begins at a fork in the road.";
            }
        
        else if (curScene == 1) {
            if (option == 1) {
                curScene = 2;
                message = "You have arrived at a cute little house in the woods.";
            }
            else  {
                curScene = 3;        
                message = "You are standing on the bridge overlooking a peaceful stream.";
            }
        }
    else if (curScene == 3) {
        if (option == 1) {
            curScene = 6;
            message = "Sorry, a troll lives on the other side of the bridge and you " + 
            "just became his lunch.";
        }
        else{
            curScene = 7;
            message = "Your stare is interrupted by the arrival of a huge troll.";
        }
    }

    else if (curScene == 4) {
        if (option == 4) {
            curScene = 8;
        }
        else {
            curScene = 5;
            message = "sorry, you became part of the witch's stew.";
        }
    }

    document.getElementById("sceneImg").src="scene" + curScene + ".png";
    if(message != "")
    alert(message);
}
