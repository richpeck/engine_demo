/*
    RPECK 03/11/2022
    Main ingress point into the system - used to provide functionality, game loop etc.
*/

// Libs 
import { Engine } from './modules/engine.js'; // loads the engine

// Start
// This is the main ingress point and should be used to provide functionality for the app.
document.addEventListener("DOMContentLoaded", function(event) { 

    // Vars
    // Used to create 'global' values which can be passed to the engine (allows us to create a settings thing later if needed)
    const debug = true;
    
    // Engine
    var engine = new Engine(debug);

    // Initialize
    engine.init();

});