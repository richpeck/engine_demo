/*
    RPECK 03/11/2022
    HUD object -- used primarily to showcase various points to the user (ammo, armour, player position, map, etc)
*/

// Start
// This is the main ingress point and should be used to provide functionality for the app.
export class HUD {

    // Constructor
    // Used to provide insight into how the player is working etc
    constructor() {

        // Properties
        this.element     = document.getElementById('hud');
        this.bottom_area = this.element.querySelector('bottom_area');

    }

  }