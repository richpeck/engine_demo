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
    constructor(debug = false, keys = { up: "w", down: "s", left: "a", right: "d" }) {

        // Objects
        this.world  = new World;    // engine.world
        this.player = new Player;   // engine.player
        this.hud    = new HUD;      // engine.hud

        // Properties
        this.debug        = debug;
        this.lastRender   = 0;
        this.element      = document.getElementById('engine');
        this.loadingClass = 'loading';

        // Keys
        // Used to map keys to various input triggers within the space (handled by engine)
        // https://stackoverflow.com/a/44213036/1143732
        this.keys = { up: keys["up"], down: keys["down"], left: keys["left"], right:  keys["right"] };
        Object.freeze(keys); // ensure nobody can change it

        this.keyDown  = keys["down"];
        this.keyLeft  = keys["left"];
        this.keyRight = keys["right"];

        // Inputs
        // This is used to capture current active keys (IE "up" and "left" - allowing us to define the velocity in the loop)
        this.active_keys = new Set; // this is ES6 only and allows us to manipulate the values (change to array etc) easier

    }

    // Init
    // Invokes the engine and allows us to create the conditions through which it will start to run.
    init() {

        // Message
        if(this.debug) console.log('{% t engine.messages.started %}');

        // Input
        // Activates inputs, allowing us to trigger actions depending on what the user does
        this.input();
        
        // Loop
        // Runs the loop using the Engine as the basis for doing so (IE gives us access to this object)
        //this.loop();

    }

    // Stop
    // Closes the engine, stops and functionality and brings the application to a halt
    stop() {

        // Message
        if(this.debug) console.log('{% t engine.messages.stopped %}');
    }

    // Loop
    // This is the main loop to perform logic for the engine
    loop() {

        // Message
        if(this.debug) console.log('{% t engine.messages.loop.active %}');

        // Vars
        var self = this;

        // Function
        // This was created because you, basically, need to reference the loop constantly
        function frame(){
            console.log( self.active_keys );
            window.requestAnimationFrame(frame);
        }

        // Inputs
        window.requestAnimationFrame(frame);

    }

    // Inputs 
    // Used to capture user inputs (keyboard)
    input() {

        // Vars
        var self     = this;
        var messages = {
            up:     '{% t engine.messages.keys.up %}',
            down:   '{% t engine.messages.keys.down %}',
            left:   '{% t engine.messages.keys.left %}',
            right:  '{% t engine.messages.keys.right %}'
        }

        // Inputs 
        // Track inputs from the user and map to the keys defined in the constructor
        // https://stackoverflow.com/a/60072661/1143732
        function update_inputs(e) {
            
            // Vars 
            var keys    = Object.keys(self.keys);
            var values  = Object.values(self.keys);
            var action  = e.type;

            // Logic
            // First tests to see if the 'pressed' key is in our key list and then triggers the appropriate functionality 
            if(values.includes(e.key)) {;

                // Vars
                var index     = values.indexOf(e.key);
                var direction = keys[index];

                // Debug
                if(self.debug) console.log( messages[direction] );
                
                // Logic
                switch(action) {
                    case 'keydown':
                        self.active_keys.add(direction); 
                        break;
                    case 'keyup':
                        self.active_keys.delete(direction); 
                        break;
                }

            }

        }

        // Handlers
        // Extracted into function so don't need to replicate functionality
        window.addEventListener("keydown", update_inputs);
        window.addEventListener("keyup", update_inputs);     

    }

}