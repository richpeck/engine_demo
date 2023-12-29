// RPECK 21/11/2023 - Config
// Extracts all of the configuration settings to the config
export class Config {

    // Constants
    // Used in the engine for various things
    static get VELOCITY()       { return 10; }
    static get ANGLE_VELOCITY() { return 5; }
    static get HEIGHT()         { return 10; }
    static get KEY_BINDINGS()   { return { up: "w", down: "s", left: "a", right: "d" }; }

    // RPECK 21/11/2023 - Constructor
    // Used to define the various options, which are then all called by the different items
    constructor() {

        // RPECK 21/11/2023 - Allocate various values
        this.debug          = false;
        this.velocity       = this.VELOCITY;
        this.angle_velocity = this.ANGLE_VELOCITY;
        this.keys           = this.KEY_BINDINGS;

        // RPECK 29/12/2023 - Whether to show the settings icon or not
        this.show_settings  = true;

    }

    // RPECK 29/12/2023 - Output a form to change the various public options for the system
    getForm = () => {


    }

}