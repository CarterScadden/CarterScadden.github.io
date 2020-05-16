import Obj from "./Obj.js";
export default class Door extends Obj {
    constructor({ x, y, width, height, destination_x, destination_y, destination_zone, }) {
        super(x, y, width, height);
        this.destination_x = destination_x;
        this.destination_y = destination_y;
        this.destination_zone = destination_zone;
    }
}
