// RPECK 29/12/2023 - Libs
import { Entity } from './entity.js';

// RPECK 29/12/2023 - Components
// Cycle through the components folder to get a list of the different components we can add to the system
import { Collidable } from './../inc/components/collidable.js';
import { Controllable } from './../inc/components/controllable.js';
import { Movable } from './../inc/components/movable.js';
import { Renderable } from './../inc/components/renderable.js';

// World
// Main processor for the map / worldview of the app -- computes map data and provides interface to user (basically manages all of the logic for the various entities, including the player)
export class World {

    // Constructor
    // Used to populate the world and allow us to interact with it
    constructor(engine) {

      // Element
      this.engine = engine; // required to populate the rest of the class

      // RPECK 29/12/2023 - Properties
      this.height     = 800;
      this.width      = 1020;
      this.entities   = [];

      // RPECK 22/11/2023 - Create Entities
      // These give us the ability to add all of the entities into the system (Players, Walls etc)
      // --
      // All entities share the same logic - the difference lies in how they handle it (IE whether they are collidable etc)
      var player = new Entity;

      // RPECK 29/12/2023 - Add components to player
      // This takes the classes imported above and allows us to add the various elements to the entity
      player.registerComponent(Movable);
      player.registerComponent(Controllable);
      player.registerComponent(Collidable);
      player.registerComponent(Renderable);

      // RPECK 29/12/2023 - Add the player entity to the entities array
      this.entities.push(player);

      // RPECK 22/11/2023 - Handlers
      // We want to keep everything trim, so this should update as per when events are triggered
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
        this.element.setAttribute("height", this.width);
        this.element.setAttribute("width",  this.height);

        // Styling of Canvas (may need to change this)
        var ctx = this.element.getContext("2d");

        // Attach to Engine
        this.engine.appendChild(this.element);

        // Colours
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, this.element.width, this.element.height);

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

  }