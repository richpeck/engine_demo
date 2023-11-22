/*
    RPECK 21/11/2023 - Entity
    This is the primary object that we can use to interface with inside the system - player, wall and other objects can be superclassed from this
*/

// RPECK 21/11/2023 - Libs
import { Entity } from './entity.js';

// Player
// Class to invoke the player relative to the world in the engine
export class Player extends Entity {

    // Constructor
    // Used to create the player in the world (EG var player = Player.new(10,10);)
    constructor(engine, x = 0, y = 0, velocity_value = 10, angle_velocity_value = 5, radius = 5) {

        // RPECK 21/11/2023 - Superclassed from Entity
        super();

        // Properties
        this.x              = radius;               // player.x
        this.y              = radius;               // player.y
        this.radius         = radius;               // player.radius
        this.angle          = 0;                    // player.angle
        this.velocity       = velocity_value;       // player.velocity (forward/backward speed. IE 30)
        this.angle_velocity = angle_velocity_value; // player.angle_velocity (angle traversal speed. IE -0.1)

    }

    // Update
    // Update the player's position in the world
    update(active_keys) {

        // Vars
        var self = this;

        // Only run if 'active_keys' is present
        if(typeof(active_keys) !== 'undefined') {

            // Iterate through set
            active_keys.forEach(function(value) {
                
                switch(value) {
                    case 'up':
                        self.y += -(self.velocity);
                        break;
                    case 'down':
                        self.y += self.velocity;
                        break;
                    case 'left':
                        self.x += -(self.velocity);
                        break;
                    case 'right':
                        self.x += self.velocity;
                        break;
                }

                // Min/Max
                // This is required to ensure we are able to limit the maximum x,y values (so we don't go out of bounds)
                var min_x  = Math.min(self.x, self.world_element.width - self.radius);
                var min_y  = Math.min(self.y, self.world_element.height - self.radius);

                // X, Y
                // Updates the co-ordinates to ensure we aren't too low (IE negatives)
                self.x = Math.max(self.radius, min_x);
                self.y = Math.max(self.radius, min_y);

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