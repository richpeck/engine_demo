// HUD
// Stores & displays various pieces of data for the app (ammo, health etc)
export class HUD {

    // Constructor
    // Used to provide insight into how the player is working etc
    constructor() {

        // Properties
        this.element     = document.getElementById('hud');
        this.bottom_area = this.element.querySelector('bottom_area');

    }

    // Init
    // Required to get the player object 
    init() {

        console.log('test');

    }

  }