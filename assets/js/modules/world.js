---
---

// World
// Main processor for the map / worldview of the app -- computes map data and provides interface to user
export class World {

    // Constructor
    // Used to populate the world and allow us to interact with it
    constructor(debug = false, engine_element = null) {

      // Vars
      this.debug          = debug;
      this.element        = document.getElementById('canvas') || false;
      this.engine_element = engine_element || document.getElementById('engine');

    }

    // Init 
    // Creates the world, allowing us to populate it with as many items as required
    init() {

      // Message
      if(this.debug) console.log('{% t engine.messages.world.starting %}');

      // Element
      // If element does not exists, populate it in the DOM
      if(!this.element) {

        // Debug
        if(this.debug) console.log('{% t engine.messages.world.no_element %}');
        
        // Create Element
        this.element = document.createElement("canvas");
        this.element.id = "world";

        // Styling of Canvas (may need to change this)
        var ctx = this.element.getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, this.element.width, this.element.height);

        // Attach to Engine
        this.engine_element.appendChild(this.element);

        // Debug
        if(this.debug) console.log('{% t engine.messages.world.element_created %}');

      }

      // Message
      if(this.debug) console.log('{% t engine.messages.world.started %}');

    }

    // Update
    // This updates the canvas element in HTML with the updates world information
    update() {

      console.log("update");

    }

  }