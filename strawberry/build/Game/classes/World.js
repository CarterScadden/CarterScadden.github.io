import Collider from "./Collider.js";
import TileSet from "./TileSet.js";
import { Player } from "./Player.js";
import Strawberry from "./Strawberry.js";
import Grass from "./Grass.js";
import Mushroom from "./Mushroom.js";
class World {
    constructor(friction = 0.85, gravity = 2) {
        this.nextZone = () => {
            switch (this.zoneID) {
                case "00":
                    this.zoneID = "01";
                    this.player.x = 55;
                    this.player.y = 100;
                    this.player.directionX = -1;
                    this.player.velocityX = 0;
                    this.player.velocityY = 0;
                    break;
                case "01":
                    this.zoneID = "02";
                    this.player.x = 150;
                    this.player.y = 26;
                    this.player.jumping = false;
                    this.player.directionX = -1;
                    this.player.velocityX = 0;
                    this.player.velocityY = 0;
                    break;
                case "02":
                    this.zoneID = "03";
                    this.player.x = 120;
                    this.player.y = 100;
                    this.player.jumping = false;
                    this.player.directionX = -1;
                    this.player.velocityX = 0;
                    this.player.velocityY = 0;
                    break;
                case "03":
                    this.zoneID = "04";
                    this.player.x = 60;
                    this.player.y = 50;
                    this.player.jumping = false;
                    this.player.directionX = -1;
                    this.player.velocityX = 0;
                    this.player.velocityY = 0;
                    break;
                case "04":
                    this.zoneID = "00";
                    this.player.x = 32;
                    this.player.y = 76;
                    this.player.jumping = false;
                    this.player.directionX = -1;
                    this.player.velocityX = 0;
                    this.player.velocityY = 0;
                    break;
            }
        };
        this.collideObj = (obj) => {
            let bottom, left, right, top, value;
            top = Math.floor(obj.getTop() / this.tileSet.tileSize);
            left = Math.floor(obj.getLeft() / this.tileSet.tileSize);
            value = this.collisionMap[top * this.columns + left];
            this.collider.collide(value, obj, left * this.tileSet.tileSize, top * this.tileSet.tileSize, this.tileSet.tileSize);
            top = Math.floor(obj.getTop() / this.tileSet.tileSize);
            right = Math.floor(obj.getRight() / this.tileSet.tileSize);
            value = this.collisionMap[top * this.columns + right];
            this.collider.collide(value, obj, right * this.tileSet.tileSize, top * this.tileSet.tileSize, this.tileSet.tileSize);
            bottom = Math.floor(obj.getBottom() / this.tileSet.tileSize);
            left = Math.floor(obj.getLeft() / this.tileSet.tileSize);
            value = this.collisionMap[bottom * this.columns + left];
            this.collider.collide(value, obj, left * this.tileSet.tileSize, bottom * this.tileSet.tileSize, this.tileSet.tileSize);
            bottom = Math.floor(obj.getBottom() / this.tileSet.tileSize);
            right = Math.floor(obj.getRight() / this.tileSet.tileSize);
            value = this.collisionMap[bottom * this.columns + right];
            this.collider.collide(value, obj, right * this.tileSet.tileSize, bottom * this.tileSet.tileSize, this.tileSet.tileSize);
        };
        this.setup = ({ collision_map, graphical_map, columns, rows, zone_id, mushrooms, strawberries, grass, }) => {
            this.mushrooms = [];
            this.strawberries = [];
            this.doors = [];
            this.grass = [];
            this.collisionMap = collision_map;
            this.graphicalMap = graphical_map;
            this.columns = columns;
            this.rows = rows;
            this.zoneID = zone_id;
            this.mushrooms = mushrooms.reduce((arr, [x, y]) => arr.concat(new Mushroom(x * this.tileSet.tileSize + 5, y * this.tileSet.tileSize)), []);
            this.strawberries = strawberries.reduce((arr, [x, y]) => arr.concat(new Strawberry(x * this.tileSet.tileSize + 5, y * this.tileSet.tileSize - 2)), []);
            this.grass = grass.reduce((arr, [x, y]) => arr.concat(new Grass(x * this.tileSet.tileSize, y * this.tileSet.tileSize + 12)), []);
        };
        this.update = () => {
            this.player.updatePosition(this.gravity, this.friction);
            // if player it below level
            if (this.player.yOld > 125) {
                this.gameover = true;
                return;
            }
            this.collideObj(this.player);
            this.strawberries = this.strawberries.reduce((arr, strawberry) => {
                if (strawberry.collideObj(this.player)) {
                    // increase the amount of strawberries the player has and remove this strawberry from the arr;
                    this.strawberryCount++;
                    return arr;
                }
                // strawberry did not hit player
                strawberry.updatePosition();
                strawberry.animate();
                return arr.concat(strawberry);
            }, []);
            this.mushrooms = this.mushrooms.reduce((arr, mushroom) => {
                if (mushroom.collideObj(this.player)) {
                    this.gameover = true;
                    return arr;
                }
                // mushroom did not hit player
                mushroom.updatePosition();
                mushroom.animate();
                return arr.concat(mushroom);
            }, []);
            // animate grass
            this.grass.forEach(({ animate }) => animate());
            // animate the player
            this.player.updateAnimation();
        };
        this.collider = new Collider();
        this.friction = friction;
        this.gravity = gravity;
        this.columns = 12;
        this.rows = 9;
        this.tileSet = new TileSet(8, 16);
        this.player = new Player(50, 76); // 32 76
        this.zoneID = '00'; // 00
        this.strawberries = []; // the array of strawberries in this zone;
        this.strawberryCount = 0; // the number of strawberries you have.
        this.mushrooms = [];
        this.doors = [];
        this.door = undefined;
        this.height = this.tileSet.tileSize * this.rows;
        this.width = this.tileSet.tileSize * this.columns;
        this.grass = [];
        this.collisionMap = [];
        this.graphicalMap = [];
        this.gameover = false;
    }
    ;
    reset() {
        this.zoneID = "00";
        this.player.x = 32;
        this.player.y = 76;
        this.player.jumping = false;
        this.player.directionX = -1;
        this.player.velocityX = 0;
        this.player.velocityY = 0;
        this.strawberryCount = 0;
    }
}
export default World;
