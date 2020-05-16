import Frame from "./Frame.js";
export default class TileSet {
    constructor(columns, tileSize) {
        this.columns = columns;
        this.tileSize = tileSize;
        this.frames = [
            // idle-left
            new Frame(115, 96, 13, 16, 0, -4),
            // jump-left
            new Frame(50, 96, 13, 16, 0, -4),
            // walk-left
            new Frame(102, 96, 13, 16, 0, -4),
            new Frame(89, 96, 13, 16, 0, -4),
            new Frame(76, 96, 13, 16, 0, -4),
            new Frame(63, 96, 13, 16, 0, -4),
            // idle-right
            new Frame(0, 112, 13, 16, 0, -4),
            // jump-right
            new Frame(65, 112, 13, 16, 0, -4),
            // walk-right
            new Frame(13, 112, 13, 16, 0, -4),
            new Frame(26, 112, 13, 16, 0, -4),
            new Frame(39, 112, 13, 16, 0, -4),
            new Frame(52, 112, 13, 16, 0, -4),
            // strawberry
            new Frame(81, 112, 14, 16),
            new Frame(96, 112, 16, 16),
            // grass
            new Frame(112, 115, 16, 4),
            new Frame(112, 124, 16, 4),
            new Frame(112, 119, 16, 4),
            // mushroom
            new Frame(32, 0, 16, 16),
            new Frame(48, 0, 16, 16),
        ];
    }
}
