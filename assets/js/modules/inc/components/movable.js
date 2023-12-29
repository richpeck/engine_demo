// RPECK 29/12/2023 - Libs
import { Component }  from './../../lib/component.js';

// RPECK 29/12/2023 - Movement
// Class to provide the ability to track the movement of an object using velocity
export class Movable extends Component {

    // Constructor
    // Used to create the entity's position in the world
    constructor() {

        // RPECK 21/11/2023 - Superclassed from Entity
        super();

        // Properties
        // Extras defined in Entity
        this.x              = 0; // entity.x
        this.y              = 0; // entity.y
        this.angle          = 0; // entity.angle

        // RPECK 22/11/2023 - Bind the update method to the loopUpdate event
        //engine.addEventListener('loopUpdate', this.update);

    }

    // Update
    // Update the player's position in the world
    update = () => {

        // Only run if 'active_keys' is present
        if(typeof(active_keys) !== 'undefined') {

            // RPECK 22/11/2023 - Vars
            // Define various local vars for easy access
            const velocity = this.engine.config.velocity;

            // Iterate through set
            active_keys.forEach(function(value) {
                
                switch(value) {
                    case 'up':
                        this.y += -(velocity);
                        break;
                    case 'down':
                        this.y += velocity;
                        break;
                    case 'left':
                        this.x += -(velocity);
                        break;
                    case 'right':
                        this.x += velocity;
                        break;
                }

                // Min/Max
                // This is required to ensure we are able to limit the maximum x,y values (so we don't go out of bounds)
                var min_x  = Math.min(this.x, 1020 - this.radius);
                var min_y  = Math.min(this.y, 800 - this.radius);

                // X, Y
                // Updates the co-ordinates to ensure we aren't too low (IE negatives)
                this.x = Math.max(this.radius, min_x);
                this.y = Math.max(this.radius, min_y);

            });
        }

        // Update dot on screen
        this.#draw();
        
    }

    // Draw
    // Method used to draw the player in the world view
    #draw() {
        
        // Vars
        var ctx    = this.world_element.getContext("2d");
        var x      = this.x;
        var y      = this.y;

        // Customization
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "red";
        ctx.fill();

    }

  }