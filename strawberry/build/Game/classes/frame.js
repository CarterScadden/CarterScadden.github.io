export default class Frame {
    constructor(x, y, width, height, offset_x, offset_y) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.offset_x = offset_x ? offset_x : 0;
        this.offset_y = offset_y ? offset_y : 0;
    }
}
;
