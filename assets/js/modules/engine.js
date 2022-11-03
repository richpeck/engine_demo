/*
    RPECK 03/11/2022
    Engine object -- used primarily to regulate the flow of the app, load in instances etc
*/

// Libs 
//import { World } from './world.js'; // loads the World (IE backend functionality to calculate position of player etc)
//import { Player } from './player.js'; // loads the Player
//import { HUD } from './hud.js'; // loads the HUD

// Start
// This is the main ingress point and should be used to provide functionality for the app.
export class Engine {

    // Constructor
    // Used to populate initial state of the object (IE Engine.world etc)
    constructor() {

        // Vars
        this.element      = document.getElementById('engine');
        this.loadingClass = 'loading';

    }

    // Init
    // Invokes the engine and allows us to create the conditions through which it will start to run.
    init() {
        console.log('Engine Started');
        this.element.style.display = "none";
    }

    // Stop
    // Closes the engine, stops and functionality and brings the application to a halt
    stop() {
        console.log('Engine Stopped');
    }

    // Loading
    // Simple loading script used to define when a 
    loading() {

    }

  }