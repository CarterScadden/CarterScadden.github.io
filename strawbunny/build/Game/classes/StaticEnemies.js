import AnimObj from "./AnimObj.js";
export default class StaticEntity extends AnimObj {
    constructor(x, y) {
        super({ x, y, width: 7, height: 14 }, { delay: 15, frame_set: [12, 13], mode: 'loop' });
        this.updatePosition = () => {
            this.position_x += 0.1;
            this.position_y += 0.2;
            this.x = this.base_x + Math.cos(this.position_x) * 2;
            this.y = this.base_y + Math.sin(this.position_y);
        };
        this.frame_index = Math.floor(Math.random() * 2);
        /* base_x and base_y are the point around which the strawberry revolves. position_x
        and y are used to track the vector facing away from the base point to give the strawberry
        the floating effect. */
        this.base_x = x;
        this.base_y = y;
        this.position_x = Math.random() * Math.PI * 2;
        this.position_y = this.position_x * 2;
        // framesets = [12, 13];
    }
}
