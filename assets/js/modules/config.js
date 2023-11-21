// RPECK 21/11/2023 - Config
// Extracts all of the configuration settings to the config
export class Config {

    // Constants
    // Used in the engine for various things
    static get VELOCITY()       { return 10; }
    static get ANGLE_VELOCITY() { return 5; }
    static get HEIGHT()         { return 10; }

    // RPECK 21/11/2023 - Constructor
    // Used to define the various options, which are then all called by the different items
    constructor() {

        // RPECK 21/11/2023 - Allocate various values
        this.debug          = false;
        this.velocity       = this.VELOCITY;
        this.angle_velocity = this.ANGLE_VELOCITY;
        this.keys           = { up: "w", down: "s", left: "a", right: "d" };

    }


}