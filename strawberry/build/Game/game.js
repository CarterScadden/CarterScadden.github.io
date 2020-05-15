import World from "./classes/World.js";
import Obj from "./classes/Obj.js";
const Game = {
    world: new World(),
    obj: new Obj(0, 0, 0, 0),
    update() {
        Game.world.update();
    },
};
export default Game;
