export default class Collider {
    constructor() {
        this.collide = (value, obj, tile_x, tile_y, tile_size) => {
            const { collidePlatformTop, collidePlatformRight, collidePlatformLeft, collidePlatformBottom, } = this;
            switch (value) {
                case 1:
                    collidePlatformTop(obj, tile_y);
                    break;
                case 2:
                    collidePlatformRight(obj, tile_x + tile_size);
                    break;
                case 3:
                    collidePlatformTop(obj, tile_y)
                        ? null
                        : collidePlatformRight(obj, tile_x + tile_size);
                    break;
                case 4:
                    collidePlatformBottom(obj, tile_y + tile_size);
                    break;
                case 5:
                    collidePlatformTop(obj, tile_y)
                        ? null
                        : collidePlatformBottom(obj, tile_y + tile_size);
                    break;
                case 6:
                    collidePlatformRight(obj, tile_x + tile_size)
                        ? null
                        : collidePlatformBottom(obj, tile_y + tile_size);
                    break;
                case 7:
                    collidePlatformTop(obj, tile_y)
                        ? null
                        : collidePlatformBottom(obj, tile_y + tile_size)
                            ? null
                            : collidePlatformRight(obj, tile_x + tile_size);
                    break;
                case 8:
                    collidePlatformLeft(obj, tile_x);
                    break;
                case 9:
                    collidePlatformTop(obj, tile_y)
                        ? null
                        : collidePlatformLeft(obj, tile_x);
                    break;
                case 10:
                    collidePlatformLeft(obj, tile_x)
                        ? null
                        : collidePlatformRight(obj, tile_x + tile_size);
                    break;
                case 11:
                    collidePlatformTop(obj, tile_y)
                        ? null
                        : collidePlatformLeft(obj, tile_x)
                            ? null
                            : collidePlatformRight(obj, tile_x + tile_size);
                    break;
                case 12:
                    collidePlatformBottom(obj, tile_y + tile_size)
                        ? null
                        : collidePlatformLeft(obj, tile_x);
                    break;
                case 13:
                    collidePlatformTop(obj, tile_y)
                        ? null
                        : collidePlatformBottom(obj, tile_y + tile_size)
                            ? null
                            : collidePlatformLeft(obj, tile_x);
                    break;
                case 14:
                    collidePlatformBottom(obj, tile_y + tile_size)
                        ? null
                        : collidePlatformLeft(obj, tile_x)
                            ? null
                            : collidePlatformRight(obj, tile_x + tile_size);
                    break;
                case 15:
                    collidePlatformTop(obj, tile_y)
                        ? null
                        : collidePlatformBottom(obj, tile_y + tile_size)
                            ? null
                            : collidePlatformLeft(obj, tile_x)
                                ? null
                                : collidePlatformRight(obj, tile_x + tile_size);
                    break;
            }
        };
        this.collidePlatformTop = (obj, tileTop) => {
            if (obj.getBottom() > tileTop && obj.getOldBottom() <= tileTop) {
                obj.setBottom(tileTop - 0.01);
                obj.velocity_y = 0;
                obj.jumping = false;
                return true;
            }
            return false;
        };
        this.collidePlatformRight = (obj, tileRight) => {
            if (obj.getLeft() < tileRight && obj.getOldLeft() >= tileRight) {
                obj.setLeft(tileRight);
                obj.velocity_x = 0;
                return true;
            }
            return false;
        };
        this.collidePlatformLeft = (obj, tileLeft) => {
            if (obj.getRight() > tileLeft && obj.getOldRight() <= tileLeft) {
                obj.setRight(tileLeft - 0.01);
                obj.velocity_x = 0;
                return true;
            }
            return false;
        };
        this.collidePlatformBottom = (obj, tileBottom) => {
            if (obj.getTop() < tileBottom && obj.getOldTop() >= tileBottom) {
                obj.setTop(tileBottom);
                obj.velocity_y = 0;
                return true;
            }
            return false;
        };
    }
}
;
