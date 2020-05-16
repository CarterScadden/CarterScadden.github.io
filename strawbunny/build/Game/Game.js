import World from "./classes/World.js";
import Obj from "./classes/Obj.js";
// class Game  {
//   world: World;
//   obj: Obj;
//   constructor() {
//     this.world =  new World();
//     this.obj = new Obj(0, 0, 0, 0);
//   };
//   update() {
//     this.world.update();
//   };
// };
const Game = {
    world: new World(),
    obj: new Obj(0, 0, 0, 0),
    update: function () {
        this.world.update();
    }
};
export default Game;
