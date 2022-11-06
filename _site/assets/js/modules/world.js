// World
// Main processor for the map / worldview of the app -- computes map data and provides interface to user
export class World {

    // Constructor
    // Used to populate the world and allow us to interact with it
    constructor(debug = false) {

      // Vars
      this.debug   = debug;
      this.element = document.getElementById('canvas') || false;

    }

    // Init 
    // Creates the world, allowing us to populate it with as many items as required
    init() {

      // Message
      if(this.debug) console.log('World Starting');

      // Element
      // If element does not exists, populate it in the DOM
      if(!this.element) {
        console.log("No Element!");
      }

      // Message
      if(this.debug) console.log('World Started');

    }

    // Update
    // This updates the canvas element in HTML with the updates world information
    update() {

      console.log("update");

    }

  }