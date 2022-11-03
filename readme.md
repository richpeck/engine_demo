#  Demo code to make a simple 3D engine with JS
Works by taking a standard webpage and implementing a number of elements which are used to update the UI etc

# Structure 
Engine (main app)
├── Canvas (viewport)
├── World  (top level worldview - basically includes mapping info)
├── HUD    (heads up display shown at the bottom of viewport)
├── Player (player object)
├── other stuff

Each object is invoked within the context of the Engine --> IE "$engine = Engine.new; $player = $engine.player.new"
The point is to initialize the engine and within that instance, create a new instance of a player, world etc