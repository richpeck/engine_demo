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
    constructor(debug, keys) {

        // Objects
        this.world  = new World;    // engine.world
        this.player = new Player;   // engine.player
        this.hud    = new HUD;      // engine.hud

        // Properties
        this.debug        = debug;
        this.element      = document.getElementById('engine');
        this.loadingClass = 'loading';

        // Keys
        this.keyUp    = keys["up"];
        this.keyDown  = keys["down"];
        this.keyLeft  = keys["left"];
        this.keyRight = keys["right"];       

    }

    // Init
    // Invokes the engine and allows us to create the conditions through which it will start to run.
    init() {

        // Message
        if(this.debug) console.log('{% t engine.messages.started %}');
        
        // Inputs 
        // Track inputs from the user and map to the keys defined in the constructor
        // https://stackoverflow.com/a/60072661/1143732
        this.element.addEventListener("keydown", function(e){
            const key = e.key;

            switch(key) {
                case this.keyUp:
                    if(this.debug) console.log('{% t engine.messages.keys.up %}');
                    break;
                case this.keyDown:
                    if(this.debug) console.log('{% t engine.messages.keys.down %}');
                    break;
                case this.keyLeft:
                    if(this.debug) console.log('{% t engine.messages.keys.left %}');
                    break;
                case this.keyRight:
                    if(this.debug) console.log('{% t engine.messages.keys.right %}');
                    break;
            }

        });

    }

    // Stop
    // Closes the engine, stops and functionality and brings the application to a halt
    stop() {

        // Message
        if(this.debug) console.log('{% t engine.messages.stopped %}');
    }

    // Loading
    // Simple loading script used to define when a 
    loading() {}

    // Inputs 
    // Used to capture user inputs (keyboard)

  }