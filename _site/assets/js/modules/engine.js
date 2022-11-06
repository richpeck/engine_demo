// Libs 
import { World } from './world.js';     // loads the World (IE backend functionality to calculate position of player etc)
import { Player } from './player.js';   // loads the Player
import { HUD } from './hud.js';         // loads the HUD

// Engine
// Main application ingress point for the app -- handles user interactivity and dependent objects
export class Engine {

    // Constructor
    // Used to populate initial state of the object (IE Engine.world etc)
    constructor(debug = false, keys = { up: "w", down: "s", left: "a", right: "d" }, velocity_value = 10, angle_velocity_value = 5) {

        // Properties
        this.debug                = debug;
        this.lastRender           = 0;
        this.element              = document.getElementById('engine');
        this.velocity_value       = velocity_value;
        this.angle_velocity_value = angle_velocity_value;

        // Objects
        this.world  = new World(this.debug, this.element);                                                // engine.world
        this.player = new Player(this.debug, null, null, this.velocity_value, this.angle_velocity_value); // engine.player
        this.hud    = new HUD(this.debug);                                                                // engine.hud

        // Keys
        // Used to map keys to various input triggers within the space (handled by engine)
        // https://stackoverflow.com/a/44213036/1143732
        this.keys = { up: keys["up"], down: keys["down"], left: keys["left"], right:  keys["right"] };
        Object.freeze(keys); // ensure nobody can change it

        // Inputs
        // This is used to capture current active keys (IE "up" and "left" - allowing us to define the velocity in the loop)
        this.active_keys = new Set; // this is ES6 only and allows us to manipulate the values (change to array etc) easier

    }

    // Init
    // Invokes the engine and allows us to create the conditions through which it will start to run.
    init() {

        // Message
        if(this.debug) console.log('Engine Started');

        // Input
        // Activates inputs, allowing us to trigger actions depending on what the user does
        this.input();

        // World
        // Builds and populates the world (IE draws canvas etc)
        this.world.init();

        // Player 
        // Invokes player object and populates them in the world
        this.player.init();

        console.log( this.world.element );

        // HUD 
        // Invokes the HUD and populates with initial data
        this.hud.init();
        
        // Loop
        // Runs the loop using the Engine as the basis for doing so (IE gives us access to this object)
        this.loop();

    }

    // Stop
    // Closes the engine, stops and functionality and brings the application to a halt
    stop() {

        // Message
        if(this.debug) console.log('Engine Stopped');
    }

    // Loop
    // This is the main loop to perform logic for the engine
    loop() {

        // Message
        if(this.debug) console.log('Loop Active');

        // Vars
        var self = this;

        // Function
        // This was created because you, basically, need to reference the loop constantly
        function frame(timestamp){

            // Last render
            // This gives us a benchmark against which to manage the 
            if(self.last_render == 0) self.last_render = timestamp;

            // Player
            // Update player attributes so they are able to traverse the world
            self.player.update();

            // Redraw
            // Updates the canvas with new co-ordinates
            self.world.update();

            // Repeat
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
            up:     'Up Pressed',
            down:   'Down Pressed',
            left:   'Left Pressed',
            right:  'Right Pressed'
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