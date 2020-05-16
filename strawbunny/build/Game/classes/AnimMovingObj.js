import Movingobj from "./movingObj.js";
export default class AnimMovingObj extends Movingobj {
    constructor({ frameSet, delay, mode = 'loop' }, { x, y, width, height, velocityMax }) {
        super(x, y, width, height, velocityMax);
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
        this.count = 0;
        this.delay = (delay >= 1) ? delay : 1;
        this.frameIndex = 0;
        this.frameSet = frameSet;
        this.frameValue = frameSet[0];
        this.mode = mode;
    }
}
