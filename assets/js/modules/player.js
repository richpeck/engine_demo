/*
    RPECK 03/11/2022
    Player object -- used to provide player interactivity (basically moving and rotating the player relative to the world)
*/

// Start
// This is the main ingress point and should be used to provide functionality for the app.
export class Player {

    // Constructor
    // Used to create the player in the world (EG var player = Player.new(10,10);)
    constructor(x = 0, y = 0) {

        // Properties
        this.x = x; // player.x
        this.y = y; // player.y

    }

  }