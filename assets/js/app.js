/*
    RPECK 03/11/2022
    Main ingress point into the system - used to provide functionality, game loop etc.
*/

// Libs 
import { Engine } from './engine.js'; // loads the engine

// Start
// This is the main ingress point and should be used to provide functionality for the app.
document.addEventListener("DOMContentLoaded", function(event) { 
    
    // Engine
    var engine = new Engine;

    // Initialize
    engine.init();

});