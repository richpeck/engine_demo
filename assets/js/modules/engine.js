---
---

// Libs 
import { World }  from './world.js';    // loads the World (IE backend functionality to calculate position of player etc)
import { HUD }    from './hud.js';      // loads the HUD
import { Config } from './config.js';   // load config options (extracted 21/11/2023)

// Engine
// Main application ingress point for the app -- handles user interactivity and dependent objects
export class Engine extends HTMLElement {

    // Observed Attributes
    // Provides the ability to track various attributes inside the system
    // --
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
    static observedAttributes = [];

    // Constructor
    // Used to populate initial state of the object (IE Engine.world etc)
    constructor() {
        
        // RPECK 21/11/2023 - Super
        // Necessary to interface with the Custom Elements API
        super();

        // RPECK 21/11/2023 - Config
        // General set of options which can be used to provide values to the system
        this.config = new Config;

        // Various Items
        // This is used to capture current active keys (IE "up" and "left" - allowing us to define the velocity in the loop)
        this.active_keys = new Set; // this is ES6 only and allows us to manipulate the values (change to array etc) easier

        // RPECK 21/11/2023 - Create shadow root
        // This allows us to bind different objects etc
        //this.shadowRoot = this.attachShadow({mode: 'open'});

    }

    // Connected callback
    // Invokes the engine and allows us to create the conditions through which it will start to run.
    connectedCallback() {

        // RPECK 21/11/2023 - World
        // Invokes the world object into this.world
        //this.world = new World;

        // RPECK 21/11/2023 - HUD
        // Invokes the HUD element into the engine
        //this.hud = new HUD;

        // Loop
        // Runs the loop using the Engine as the basis for doing so (IE gives us access to this object)
        //this.#loop();

        // Handlers
        // Extracted into function so don't need to replicate functionality
        window.addEventListener("keydown",  this.#update_inputs);
        window.addEventListener("keyup",    this.#update_inputs);

    }

    // Loop
    // This is the main loop to perform logic for the engine
    #loop = () => {

        // Message
        if(this.debug) console.log('{% t engine.messages.loop.active %}');

        // Vars
        var self = this;

        // Function
        // This was created because you, basically, need to reference the loop constantly
        function frame(timestamp){

            // Last render
            // This gives us a benchmark against which to manage the 
            if(self.last_render == 0) self.last_render = timestamp;

            // Redraw
            // Updates the canvas with new co-ordinates
            self.world.update(self.player);

            // Player
            // Update player attributes so they are able to traverse the world
            self.player.update(self.active_keys);

            // HUD
            self.hud.update(self.player, self.world);

            // Repeat
            window.requestAnimationFrame(frame);
        }

        // Inputs
        window.requestAnimationFrame(frame);

    }

    // Inputs 
    // Used to capture user inputs (keyboard)
    // --
    // https://stackoverflow.com/a/75662336/1143732
    #update_inputs = (e) => {
            
        // Vars 
        var keys    = Object.keys(   this.config.keys );
        var values  = Object.values( this.config.keys );
        var action  = e.type;

        // Logic
        // First tests to see if the 'pressed' key is in our key list and then triggers the appropriate functionality 
        if(values.includes(e.key)) {;

            // Vars
            var index     = values.indexOf(e.key);
            var direction = keys[index];

            // Logic
            switch(action) {
                case 'keydown':
                    this.active_keys.add(direction); 
                    break;
                case 'keyup':
                    this.active_keys.delete(direction); 
                    break;
            }

        }

    }

}