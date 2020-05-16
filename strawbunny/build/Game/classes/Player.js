import AnimMovingObj from "./AnimMovingObj.js";
export class Player extends AnimMovingObj {
    constructor(x, y) {
        super({
            //idle
            frameSet: [0],
            delay: 10,
            mode: 'loop'
        }, { x, y, width: 7, height: 12 });
        this.jump = () => {
            if (!this.jumping) {
                this.jumping = true;
                this.velocityY -= 13;
            }
        };
        this.moveLeft = () => {
            this.directionX = -1;
            this.velocityX -= 0.55;
        };
        this.moveRight = () => {
            this.directionX = 1;
            this.velocityX += 0.55;
        };
        this.updateAnimation = () => {
            const { frameSets, changeFrameSet, velocityX, velocityY, directionX, } = this;
            if (velocityY < 0) {
                if (directionX < 0)
                    changeFrameSet(frameSets['jump-left'], 'pause');
                else
                    changeFrameSet(frameSets['jump-right'], 'pause');
            }
            else if (directionX < 0) {
                if (this.velocityX < -0.1)
                    changeFrameSet(frameSets['move-left'], 'loop', 5);
                else
                    changeFrameSet(frameSets['idle-left'], 'pause');
            }
            else if (directionX > 0) {
                if (velocityX > 0.1)
                    changeFrameSet(frameSets['move-right'], 'loop', 5);
                else
                    changeFrameSet(frameSets['idle-right'], 'pause');
            }
            this.animate();
        };
        this.updatePosition = (gravity, friction) => {
            this.xOld = this.x;
            this.yOld = this.y;
            this.velocityY += gravity;
            this.velocityX *= friction;
            /* Made it so that velocity cannot exceed velocityMax */
            if (Math.abs(this.velocityX) > this.velocityMax)
                this.velocityX = this.velocityMax * Math.sign(this.velocityX);
            if (Math.abs(this.velocityY) > this.velocityMax)
                this.velocityY = this.velocityMax * Math.sign(this.velocityY);
            // make sure they cant leave the screen x wise, there is a y check for player position below the screen that ends the game
            // I dont care if someone goes over
            let xToBe = this.x + this.velocityX;
            while (xToBe > 182) {
                xToBe--;
            }
            ;
            while (xToBe < 3) {
                xToBe++;
            }
            ;
            this.x = xToBe;
            this.y += this.velocityY;
        };
        this.jumping = true;
        this.directionX = -1;
        this.velocityX = 0;
        this.velocityY = 0;
        this.frameSets = {
            'idle-left': [0],
            'jump-left': [1],
            'move-left': [2, 3, 4, 5],
            'idle-right': [6],
            'jump-right': [7],
            'move-right': [8, 9, 10, 11]
        };
        /*
    
        */
    }
}
;
