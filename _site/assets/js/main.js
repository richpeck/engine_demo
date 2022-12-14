// Libs 
import { Engine } from './modules/engine.js'; // loads the engine

// Main
// Primary ingress point and should be used to provide functionality for the app.
document.addEventListener("DOMContentLoaded", function(event) { 

    // Debug
    const debug = true; // Turn debug on or off (bool)

    // Vars
    const keys = { up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' }

    // Engine
    var engine = new Engine(debug, keys);

    // Initialize
    engine.init();

});