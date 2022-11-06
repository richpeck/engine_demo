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

    }

    // Init
    // Required to get the player object 
    init() {

        // Started Message
        if(this.debug) console.log('{% t engine.messages.player.starting %}');


        // Starting Message
        if(this.debug) console.log('{% t engine.messages.player.started %}');

    }

    // Update
    // Update the player's position in the world
    update() {


    }

  }