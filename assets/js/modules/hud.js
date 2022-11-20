// HUD
// Stores & displays various pieces of data for the app (ammo, health etc)
export class HUD {

    // Constructor
    // Used to provide insight into how the player is working etc
    constructor() {

        // Properties
        this.element     = document.getElementById('hud');
        this.bottom_area = this.element.querySelector('bottom_area');

        // Player
        // These are used to define the various values that the HUD will have
        this.player = {
            x: this.element.querySelector(".player > .x"),
            y: this.element.querySelector(".player > .y")
        }

        // HUD

    }

    // Init
    // Required to get the player object 
    init() {}

    // Update
    // Update the various items in the HUD
    update(player, world) {

        // Player
        // Updates the player's position on the screen
        this.player['x'].innerText = "X: " + player.x;
        this.player['y'].innerText = "Y: " + player.y;

    }

  }