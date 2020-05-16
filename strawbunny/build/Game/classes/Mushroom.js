import AnimObj from "./AnimObj.js";
export default class Mushroom extends AnimObj {
    constructor(x, y) {
        super({ x, y, width: 7, height: 7 }, { delay: 15, frameSet: [17, 18], mode: 'loop' });
        this.updatePosition = () => {
            // this.positionX += 0.1;
            // this.positionY += 0.2;
            // this.x = this.baseX + Math.cos(this.positionX) * 2;
            // this.y = this.baseY + Math.sin(this.positionY);
        };
        this.frameIndex = Math.floor(Math.random() * 2);
        /* baseX and baseY are the point around which the strawberry revolves. positionX
        and y are used to track the vector facing away from the base point to give the strawberry
        the floating effect. */
        this.baseX = x;
        this.baseY = y;
        this.positionX = Math.random() * Math.PI * 2;
        this.positionY = this.positionX * 2;
        // framesets = [12, 13];
    }
}
