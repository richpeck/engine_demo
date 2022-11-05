---
---

// Libs 
import { World } from './world.js';     // loads the World (IE backend functionality to calculate position of player etc)
import { Player } from './player.js';   // loads the Player
import { HUD } from './hud.js';         // loads the HUD

// Engine
// Main application ingress point for the app -- handles user interactivity and dependent objects
export class Engine {

    // Constructor
    // Used to populate initial state of the object (IE Engine.world etc)
    constructor(debug) {

        // Objects
        this.world  = new World;    // engine.world.x
        this.player = new Player;   // engine.player.y
        this.hud    = new HUD;      // engine.hud.z

        // Properties
        this.debug        = debug;
        this.element      = document.getElementById('engine');
        this.loadingClass = 'loading';

    }

    // Init
    // Invokes the engine and allows us to create the conditions through which it will start to run.
    init() {
        if(this.debug) console.log('{% t engine.messages.started %}');
        console.log('{{ site.data.map | json }}');
    }

    // Stop
    // Closes the engine, stops and functionality and brings the application to a halt
    stop() {
        if(this.debug) console.log('{% t engine.messages.stopped %}');
    }

    // Loading
    // Simple loading script used to define when a 
    loading() {}

    // Inputs 
    // Used to capture user inputs

  }