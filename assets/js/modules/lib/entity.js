---
---

// Entity
// Class for any entity loaded into the system
export class Entity {

    // Constructor
    // Used to populate the world and allow us to interact with it
    constructor() {}

    // RPECK 22/11/2023 - Register Component
    // Registers the component in the world, allowing us to bind it to an entity
    registerComponent = (component) => {

      // RPECK 29/12/2023 - Invoke the register static method on the passed class
      component.register(this);

    }

  }