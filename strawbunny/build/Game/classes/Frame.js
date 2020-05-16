export default class Frame {
    constructor(x, y, width, height, offsetX, offsetY) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.offsetX = offsetX ? offsetX : 0;
        this.offsetY = offsetY ? offsetY : 0;
    }
}
;
