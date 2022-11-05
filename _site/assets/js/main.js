// Libs 
import { Engine } from './modules/engine.js'; // loads the engine

// Main
// Primary ingress point and should be used to provide functionality for the app.
document.addEventListener("DOMContentLoaded", function(event) { 

    // Debug
    const debug = true; // Turn debug on or off (bool)

    // Keys
    // Used to map keys to various input triggers within the space (handled by engine)
    // https://stackoverflow.com/a/44213036/1143732
    const keys  = { 
        up:     "KeyW",
        down:   "KeyS",
        left:   "KeyA",
        right:  "KeyD"
    }
    
    // Engine
    var engine = new Engine(debug, keys);

    // Initialize
    engine.init();

});