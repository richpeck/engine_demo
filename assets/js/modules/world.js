---
---

// World
// Main processor for the map / worldview of the app -- computes map data and provides interface to user (basically manages all of the logic for the various entities, including the player)
export class World {

    // Constructor
    // Used to populate the world and allow us to interact with it
    constructor(engine) {

      // Vars
      this.element = document.getElementById('world') || false;

      // Walls
      // Temporary definition of walls (collection of x,y points -- heights are static)
      this.walls = [
        { x: 0,                  y: 0 },
        { x: this.element.width, y: 0 },
        { x: 0,                  y: this.element.height },
        { x: this.element.width, y: this.element.height }
      ];

    }

    // Init 
    // Creates the world, allowing us to populate it with as many items as required
    init() {

      console.log( this.walls );

      // Message
      if(this.debug) console.log('{% t engine.messages.world.starting %}');

      // Element
      // If element does not exists, populate it in the DOM
      if(!this.element) {

        // Debug
        if(this.debug) console.log('{% t engine.messages.world.no_element %}');
        
        // Create Element
        this.element = document.createElement("canvas");
        this.element.setAttribute("id", "world");

        // Dimensions
        // Required to ensure we can resize the canvas later
        this.element.setAttribute("height", "800");
        this.element.setAttribute("width", "1020");

        // Styling of Canvas (may need to change this)
        var ctx = this.element.getContext("2d");

        // Attach to Engine
        this.engine_element.appendChild(this.element);

        // Colours
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, this.element.width, this.element.height);

        // Bind Resize
        // This is in case the viewport is changed for some reason
        window.addEventListener('resize', this.resize, false);

        // Debug
        if(this.debug) console.log('{% t engine.messages.world.element_created %}');

      }

      // Message
      if(this.debug) console.log('{% t engine.messages.world.started %}');

    }

    // Update
    // This updates the canvas element in HTML with the updates world information
    update() {

      // Vars
      var element = this.element; 
      var canvas  = element.getContext('2d');

      // Canvas
      canvas.fillStyle = "blue";
      canvas.fillRect(0, 0, this.element.width, this.element.height);

     }

    // Resize 
    // Used to resize the canvas on the event of viewport changes 
    resize(){

      // Set the height and width of the canvas
      var el = document.getElementById('world');
      var canvas = el.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

    }


  }