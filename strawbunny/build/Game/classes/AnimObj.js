export default class AnimObj {
    constructor({ x, y, width, height }, { frameSet, delay, mode = 'loop' }) {
        this.animate = () => {
            switch (this.mode) {
                case 'loop':
                    this.loop();
                    break;
                case 'pause': break;
            }
        };
        this.loop = () => {
            this.count++;
            while (this.count > this.delay) {
                this.count -= this.delay;
                this.frameIndex = this.frameIndex < this.frameSet.length - 1
                    ? this.frameIndex + 1
                    : 0;
                this.frameValue = this.frameSet[this.frameIndex];
            }
            // this.frameValue = 20;
        };
        this.changeFrameSet = (frameSet, mode, delay = 10, frameIndex = 0) => {
            if (this.frameSet !== frameSet) {
                this.count = 0;
                this.delay = delay;
                this.frameSet = frameSet;
                this.frameIndex = frameIndex;
                this.frameValue = frameSet[frameIndex];
                this.mode = mode;
            }
        };
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.count = 0;
        this.delay = (delay >= 1) ? delay : 1;
        this.frameIndex = 0;
        this.frameSet = frameSet;
        this.frameValue = frameSet[0];
        this.mode = mode;
    }
    // Collision detection
    collideObj(obj) {
        if (this.getRight() < obj.getLeft() ||
            this.getBottom() < obj.getTop() ||
            this.getLeft() > obj.getRight() ||
            this.getTop() > obj.getBottom())
            return false;
        return true;
    }
    ;
    /* Does rectangular collision detection with the center of the obj. */
    collideObjCenter(obj) {
        let center_x = obj.getCenterX();
        let center_y = obj.getCenterY();
        if (center_x < this.getLeft() || center_x > this.getRight() ||
            center_y < this.getTop() || center_y > this.getBottom())
            return false;
        return true;
    }
    ;
    getBottom() { return this.y + this.height; }
    ;
    getCenterX() { return this.x + this.width * 0.5; }
    ;
    getCenterY() { return this.y + this.height * 0.5; }
    ;
    getLeft() { return this.x; }
    ;
    getRight() { return this.x + this.width; }
    ;
    getTop() { return this.y; }
    ;
    setBottom(y) { this.y = y - this.height; }
    ;
    setCenterX(x) { this.x = x - this.width * 0.5; }
    ;
    setCenterY(y) { this.y = y - this.height * 0.5; }
    ;
    setLeft(x) { this.x = x; }
    ;
    setRight(x) { this.x = x - this.width; }
    ;
    setTop(y) { this.y = y; }
    ;
    setObj(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
