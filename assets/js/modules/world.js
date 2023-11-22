---
---

// World
// Main processor for the map / worldview of the app -- computes map data and provides interface to user (basically manages all of the logic for the various entities, including the player)
export class World {

    // Constructor
    // Used to populate the world and allow us to interact with it
    constructor(engine) {

      // Element
      this.engine = engine; // required to populate the rest of the class

      // RPECK 22/11/2023 - Handlers
      // We want to keep everything prim, so this should update as per when events are triggered
      engine.addEventListener('loopStart',  this.init);
      engine.addEventListener('loopUpdate', this.update);

    }

    // RPECK 22/11/2023 - Set up
    // Sets up the element in the world
    init = () => {

      // RPECK 22/11/2023 - If the element is not present, declare 
      if(!this.element) {
        
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
        this.engine.appendChild(this.element);

        // Colours
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, this.element.width, this.element.height);

        // Bind Resize
        // This is in case the viewport is changed for some reason
        window.addEventListener('resize', this.resize, false);

      }

    }

    // Update
    // This updates the canvas element in HTML with the updates world information
    update = () => {

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