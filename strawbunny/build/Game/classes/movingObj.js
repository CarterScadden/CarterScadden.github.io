import Obj from "./Obj.js";
export default class Movingobj extends Obj {
    constructor(x, y, width, height, velocityMax = 15) {
        super(x, y, width, height);
        this.getOldBottom = () => { return this.yOld + this.height; };
        this.getOldCenterX = () => { return this.xOld + this.width * 0.5; };
        this.getOldCenterY = () => { return this.yOld + this.height * 0.5; };
        this.getOldLeft = () => { return this.xOld; };
        this.getOldRight = () => { return this.xOld + this.width; };
        this.getOldTop = () => { return this.yOld; };
        this.setOldBottom = (y) => { this.yOld = y - this.height; };
        this.setOldCenterX = (x) => { this.xOld = x - this.width * 0.5; };
        this.setOldCenterY = (y) => { this.yOld = y - this.height * 0.5; };
        this.setOldLeft = (x) => { this.xOld = x; };
        this.setOldRight = (x) => { this.xOld = x - this.width; };
        this.setOldTop = (y) => { this.yOld = y; };
        // Game.obj = new Obj(x, y, width, height);
        // Game.obj.setObj(x, y, width, height);
        this.jumping = false;
        this.velocityMax = velocityMax; // added velocityMax so velocity can't go past 16
        this.velocityX = 0;
        this.velocitydY = 0;
        this.xOld = x;
        this.yOld = y;
    }
    ;
}
;
