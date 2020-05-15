export default class Animator {
    constructor(frameSet, delay, mode = 'loop') {
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
                this.frame_index = this.frame_index < this.frameSet.length - 1
                    ? this.frame_index + 1
                    : 0;
                this.frameValue = this.frameSet[this.frame_index];
            }
        };
        this.changeFrameSet = (frameSet, mode, delay = 10, frame_index = 0) => {
            if (this.frameSet !== frameSet) {
                this.count = 0;
                this.delay = delay;
                this.frameSet = frameSet;
                this.frame_index = frame_index;
                this.frameValue = frameSet[frame_index];
                this.mode = mode;
            }
        };
        this.count = 0;
        this.delay = (delay >= 1) ? delay : 1;
        this.frame_index = 0;
        this.frameSet = frameSet;
        this.frameValue = frameSet[0];
        this.mode = mode;
    }
}
;
