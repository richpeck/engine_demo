//////////////////////////////
//////////////////////////////

// RPECK 21/11/2023 - Import the Engine JS so we can bind to the Custom Elements API etc
// This is the new ingress point, allowing us to extend the functionality without relying on timing etc

//////////////////////////////
//////////////////////////////

// Libs 
import { Engine } from './modules/engine.js'; // loads the engine

// Assign Engine to custom HTML element
customElements.define('main-engine', Engine);

//////////////////////////////
//////////////////////////////