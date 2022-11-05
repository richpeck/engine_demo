// Player
// Class to invoke the player relative to the world in the engine
export class Player {

    // Constructor
    // Used to create the player in the world (EG var player = Player.new(10,10);)
    constructor(x = 0, y = 0) {

        // Properties
        this.x              = x; // player.x
        this.y              = y; // player.y
        this.angle          = 0; // player.angle
        this.velocity       = 0;  // player.velocity
        this.angle_velocity = 0; // player.angle_velocity


    }

  }