// Initialize the current scene to scene 0 (Intro)
//var curScene = 0;

// function changeScene(decision) {
    //         // Clear the scene message
    //     //     var message = "";
    
    //     //     if (curScene == 0) {
        //     //             curScene = 1;
        //     //             message = "Your journey begins at a fork in the road.";
        //     //         }
        
        //     //     else if (curScene == 1) {
            //     //         if (option == 1) {
                //     //             curScene = 2;
                //     //             message = "You have arrived at a cute little house in the woods.";
                //     //         } else  { // option != 1
                //     //             curScene = 3;        
                //     //             message = "You are standing on the bridge overlooking a peaceful stream.";
                //     //         }
                //     //     }
                //     //     else if (curScene == 3) {
                    //     //         if (option == 1) {
                        //     //         curScene = 6;
                        //     //         message = "Sorry, a troll lives on the other side of the bridge and you just became his lunch.";
                        //     //     } else { // option != 1
                        //     //         curScene = 7;
                        //     //         message = "Your stare is interrupted by the arrival of a huge troll.";
                        //     //     }
                        //     // }
                        
                        //     // else if (curScene == 4) {
                            //     //     if (option == 1) {
                                //     //         curScene = 8;
                                //     //         message = "Sorry, to be continued...";
                                //     //     } else { // option != 1
                                //     //         curScene = 5;
                                //     //         message = "sorry, you became part of the witch's stew.";
                                //     //     }
                                //     // }
                                //     var message = "";
                                
                                //         // let img = document.getElementById("decision0; decision1; decision2; decision3; decision4; decision5; decision6; decision7; decision8");
                                //         // img.src = scenes; 
                                //         // img.style.display = "block"; // Make the image visible
                                
                                //     switch (curScene) {
                                    //         // clear the scene message
                                    //         case 0:
                                    //             curScene = 1;
//             message = "Your journey begins at a fork in the road.";
//             break;
//         case 1:
//             if (decision == 1) {
    //                 curScene = 2;
    //                 message = " You have arrived at a cute little house in the woods.";
    //             }
    //             else { // decision != 1
    //                 curScene = 3;
    //                 message = " You are standing on the bridge overlooking a peaceful stream.";
    //             }
    //             break; 
    
    //         case 3:
    //             if (decision == 1) {
        //                 curScene = 6;
        //                 message = "Sorry, a troll lives on the other side of the bridge and you " + "just became his lunch.";
        //             }
        //             else { // decision != 1
        //                 curScene = 7;
        //                 message = " Your stare is interrupted by the arrival of a huge troll.";
        //             }            
        //             break;
        //         case 4:
        //             if (decision == 1) {
            //                 curScene = 8;
            //                 message = "To be continued...";
            //             }
            //             else { // decision != 1
            //                 curScene = 5;
            //                 message = "Sorry, you just became part of the witch's stew.";
            //             }
            //             break;    
            //     }
            //     // update the Scene Image
            //     //document.getElementById("sceneImg").src="scenes" + curScene + ".png";
            
            //     // show the message if needed
            //     if(message != "")
            //     alert(message);
            // }
            
var myImage = document.querySelector("#sceneImg");
            
function FirstImage () {
    myImage.src = "Scene1.png";
}

function SecondImage () {
    myImage.src = "Scene2.png";
}

function thirdImage () {
    myImage.src = "Scene 4.png";
}

function fourthImage () {
    myImage.src = "Scene 5.png";
}

function fifthImage () {
    myImage.src = "Scene 6.png";
}

function sixthImage () {
    myImage.src = "Scene 7.png";
}

function seventhImage () {
    myImage.src = "Scene 8.png";
}