export default class Obj {
    constructor(x, y, width, height) {
        // Collision detection
        this.collideObj = (obj) => {
            if (this.getRight() < obj.getLeft() ||
                this.getBottom() < obj.getTop() ||
                this.getLeft() > obj.getRight() ||
                this.getTop() > obj.getBottom())
                return false;
            return true;
        };
        /* Does rectangular collision detection with the center of the obj. */
        this.collideObjCenter = (obj) => {
            let center_x = obj.getCenterX();
            let center_y = obj.getCenterY();
            if (center_x < this.getLeft() ||
                center_x > this.getRight() ||
                center_y < this.getTop() ||
                center_y > this.getBottom())
                return false;
            return true;
        };
        this.getBottom = () => { return this.y + this.height; };
        this.getCenterX = () => { return this.x + this.width * 0.5; };
        this.getCenterY = () => { return this.y + this.height * 0.5; };
        this.getLeft = () => { return this.x; };
        this.getRight = () => { return this.x + this.width; };
        this.getTop = () => { return this.y; };
        this.setBottom = (y) => { this.y = y - this.height; };
        this.setCenterX = (x) => { this.x = x - this.width * 0.5; };
        this.setCenterY = (y) => { this.y = y - this.height * 0.5; };
        this.setLeft = (x) => { this.x = x; };
        this.setRight = (x) => { this.x = x - this.width; };
        this.setTop = (y) => { this.y = y; };
        this.setObj = (x, y, width, height) => {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        };
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
;
