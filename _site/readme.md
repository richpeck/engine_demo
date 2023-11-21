#  Demo code to make a simple 3D engine with JS
Works by taking a standard webpage and implementing a number of elements which are used to update the UI etc

# Structure 
```
Engine (main app)
--
├── World  (top level worldview - basically includes mapping info)
├── HUD    (heads up display shown at the bottom of viewport)
├── Entity (objects we can bind behaviours to - such as 'is_collidable', 'is_visible' etc)
|──── Player (user object)
|──── Wall (wall object)
|──── Enemy (enemy object)
|──── Object (general object such as barrels)
```

Each object is invoked within the context of the Engine --> IE "$engine = Engine.new; $player = $engine.player.new".

The point is to initialize the engine and within that instance, create a new instance of a player, world etc.

# Engine

The main ingress point into the app is the `Engine` class.

This is invoked in the HTML page and is designed to handle user inputs.

The engine creates the overall world and manages the game loop. From this, we can manage a number of child classes, including `World`, `HUD` and `Entity`. 

The `Entity` class is used to provide us with the means to add behaviours to entitie inside the system dynamically. One of the `Entity` items will be the player, with other entities (such as walls) acting as objects that can be interacted with.
