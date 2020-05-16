export default class Controller {
    constructor() {
        this.handleKeyDownOrUp = (type, key) => {
            const down = type === 'keydown' ? true : false;
            switch (key) {
                case 65:
                    this.left.onInput(down);
                    break;
                case 87:
                    this.up.onInput(down);
                    break;
                case 68:
                    this.right.onInput(down);
                    break;
            }
        };
        this.left = new ButtonInput();
        this.right = new ButtonInput();
        this.up = new ButtonInput();
    }
}
class ButtonInput {
    constructor() {
        this.onInput = (down) => {
            if (this.down !== down)
                this.active = down;
            this.down = down;
        };
        this.active = this.down = false;
    }
    ;
}
;
