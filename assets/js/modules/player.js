// Player
// Class to invoke the player relative to the world in the engine
export class Player {

    // Constructor
    // Used to create the player in the world (EG var player = Player.new(10,10);)
    constructor(debug = false, x = 0, y = 0, velocity_value = 10, angle_velocity_value = 5) {

        // Properties
        this.x              = x; // player.x
        this.y              = y; // player.y
        this.angle          = 0; // player.angle
        this.velocity       = 0; // player.velocity (forward/backward speed. IE 30)
        this.angle_velocity = 0; // player.angle_velocity (angle traversal speed. IE -0.1)

        // Extra
        this.world_element = null;

    }

    // Init
    // Required to get the player object 
    init(world_element = null) {

        // Starting Message
        if(this.debug) console.log('{% t engine.messages.player.starting %}');

        // Checking World
        if(this.debug) console.log('{% t engine.messages.player.checking_world %}');

        // If World is not present
        if(!world_element) { return false; } else { this.world_element = world_element; }

        // Draw initial
        this.#draw();

        // Started Message
        if(this.debug) console.log('{% t engine.messages.player.started %}');

    }

    // Update
    // Update the player's position in the world
    update() {}

    // Draw
    // Method used to draw the player in the world view
    #draw() {
        
        // Vars
        var ctx    = this.world_element.getContext("2d");
        var x      = this.world_element.clientWidth / 2;
        var y      = this.world_element.clientHeight / 2;
        var radius = 5;

        // Customization
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "red";
        ctx.fill();

    }

  }