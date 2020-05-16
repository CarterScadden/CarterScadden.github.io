export default class Collider {
    constructor() {
        this.collide = (value, obj, tileX, tileY, tile_size) => {
            const { collidePlatformTop, collidePlatformRight, collidePlatformLeft, collidePlatformBottom, } = this;
            switch (value) {
                case 1:
                    collidePlatformTop(obj, tileY);
                    break;
                case 2:
                    collidePlatformRight(obj, tileX + tile_size);
                    break;
                case 3:
                    collidePlatformTop(obj, tileY)
                        ? null
                        : collidePlatformRight(obj, tileX + tile_size);
                    break;
                case 4:
                    collidePlatformBottom(obj, tileY + tile_size);
                    break;
                case 5:
                    collidePlatformTop(obj, tileY)
                        ? null
                        : collidePlatformBottom(obj, tileY + tile_size);
                    break;
                case 6:
                    collidePlatformRight(obj, tileX + tile_size)
                        ? null
                        : collidePlatformBottom(obj, tileY + tile_size);
                    break;
                case 7:
                    collidePlatformTop(obj, tileY)
                        ? null
                        : collidePlatformBottom(obj, tileY + tile_size)
                            ? null
                            : collidePlatformRight(obj, tileX + tile_size);
                    break;
                case 8:
                    collidePlatformLeft(obj, tileX);
                    break;
                case 9:
                    collidePlatformTop(obj, tileY)
                        ? null
                        : collidePlatformLeft(obj, tileX);
                    break;
                case 10:
                    collidePlatformLeft(obj, tileX)
                        ? null
                        : collidePlatformRight(obj, tileX + tile_size);
                    break;
                case 11:
                    collidePlatformTop(obj, tileY)
                        ? null
                        : collidePlatformLeft(obj, tileX)
                            ? null
                            : collidePlatformRight(obj, tileX + tile_size);
                    break;
                case 12:
                    collidePlatformBottom(obj, tileY + tile_size)
                        ? null
                        : collidePlatformLeft(obj, tileX);
                    break;
                case 13:
                    collidePlatformTop(obj, tileY)
                        ? null
                        : collidePlatformBottom(obj, tileY + tile_size)
                            ? null
                            : collidePlatformLeft(obj, tileX);
                    break;
                case 14:
                    collidePlatformBottom(obj, tileY + tile_size)
                        ? null
                        : collidePlatformLeft(obj, tileX)
                            ? null
                            : collidePlatformRight(obj, tileX + tile_size);
                    break;
                case 15:
                    collidePlatformTop(obj, tileY)
                        ? null
                        : collidePlatformBottom(obj, tileY + tile_size)
                            ? null
                            : collidePlatformLeft(obj, tileX)
                                ? null
                                : collidePlatformRight(obj, tileX + tile_size);
                    break;
            }
        };
        this.collidePlatformTop = (obj, tileTop) => {
            if (obj.getBottom() > tileTop && obj.getOldBottom() <= tileTop) {
                obj.setBottom(tileTop - 0.01);
                obj.velocityY = 0;
                obj.jumping = false;
                return true;
            }
            return false;
        };
        this.collidePlatformRight = (obj, tileRight) => {
            if (obj.getLeft() < tileRight && obj.getOldLeft() >= tileRight) {
                obj.setLeft(tileRight);
                obj.velocityX = 0;
                return true;
            }
            return false;
        };
        this.collidePlatformLeft = (obj, tileLeft) => {
            if (obj.getRight() > tileLeft && obj.getOldRight() <= tileLeft) {
                obj.setRight(tileLeft - 0.01);
                obj.velocityX = 0;
                return true;
            }
            return false;
        };
        this.collidePlatformBottom = (obj, tileBottom) => {
            if (obj.getTop() < tileBottom && obj.getOldTop() >= tileBottom) {
                obj.setTop(tileBottom);
                obj.velocityY = 0;
                return true;
            }
            return false;
        };
    }
}
;
