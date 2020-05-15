import Animator from "./Animator.js";
export default class Grass extends Animator {
    constructor(x, y) {
        super([14, 15, 16, 15], 25, 'loop');
        this.x = x;
        this.y = y;
        //framesets = {'wave': [14, 15, 16, 15]}
    }
}
