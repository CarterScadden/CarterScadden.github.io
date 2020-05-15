export default class Engine {
    constructor(time_step, update, render) {
        // cycle / when game logic / display should run
        this.cycle = (time_stamp) => {
            // reguest animation frame, see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
            this.animation_frame_request = window.requestAnimationFrame(this.handleCycle);
            this.accumulated_time += time_stamp - this.time;
            this.time = time_stamp;
            // safty, make sure the code doesnt run too fast
            if (this.accumulated_time >= this.time_step * 3) {
                this.accumulated_time = this.time_step;
            }
            // update unitl you can render
            while (this.accumulated_time >= this.time_step) {
                this.accumulated_time -= this.time_step;
                this.update(time_stamp);
                this.updated = true;
            }
            if (this.updated) {
                this.updated = false;
                this.render(time_stamp);
            }
        };
        this.handleCycle = (timeStep) => {
            this.cycle(timeStep);
        };
        this.start = () => {
            this.accumulated_time = this.time_step;
            this.time = window.performance.now();
            this.animation_frame_request = window.requestAnimationFrame(this.handleCycle);
        };
        this.stop = () => {
            window.cancelAnimationFrame(this.animation_frame_request);
        };
        this.accumulated_time = 0;
        this.time_step = time_step;
        this.animation_frame_request = 0; //undefined;
        this.time = 0; // undefined;
        this.updated = false;
        this.update = update;
        this.render = render;
        this.startTime = 0;
    }
    ;
}
;
