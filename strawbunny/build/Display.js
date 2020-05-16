export default class Display {
    constructor(canvas, strawberryImage) {
        // Draw the map to the buffer
        this.drawMap = (image, imageColumns, map, mapColumns, tileSize) => {
            for (let i = map.length - 1; i !== 0; --i) {
                this.buffer.drawImage(image, ((map[i] % imageColumns) * tileSize), (Math.floor(map[i] / imageColumns) * tileSize), tileSize, tileSize, ((i % mapColumns) * tileSize), (Math.floor(i / mapColumns) * tileSize), tileSize, tileSize);
            }
        };
        // draw the specific object
        this.drawObject = (image, source_x, source_y, destination_x, destination_y, width, height) => {
            this.buffer.drawImage(image, source_x, source_y, width, height, Math.round(destination_x), Math.round(destination_y), width, height);
        };
        this.drawGameOver = (count) => {
            this.context.fillStyle = 'rgba(0,0,0, 0.6)';
            this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
            this.context.font = "128px time-new-roman";
            this.context.textAlign = 'center';
            this.context.fillStyle = 'red';
            this.context.fillText('Game Over', this.context.canvas.width / 2, this.context.canvas.height / 4);
            this.context.font = '48px time-new-roman';
            this.context.fillStyle = 'white';
            this.context.fillText('press space to restart', this.context.canvas.width / 2, this.context.canvas.height / 1.25);
            this.context.textAlign = 'left';
            this.context.drawImage(this.strawberryImage, this.context.canvas.width / 2.8, this.context.canvas.height / 3, 256, 256);
            this.context.font = '128px arial';
            const countAsString = String(count);
            this.context.fillStyle = 'yellow';
            this.context.fillText(countAsString, this.context.canvas.width / 1.95, this.context.canvas.height / 1.55);
        };
        this.drawInfo = (count, image, startTime) => {
            this.drawObject(image, 16, 48, 0, 0, 16, 16);
            this.buffer.drawImage(this.strawberryImage, 0, 0, 16, 16);
            this.buffer.font = '9px arial';
            const countAsString = String(count);
            this.buffer.fillStyle = 'yellow';
            this.buffer.fillText(countAsString, 10, 14);
            this.buffer.fillStyle = 'yellow';
            const t = Date.now().valueOf() - startTime;
            this.buffer.fillText(`${Math.floor(t / 60000)}:${((t % 60000) / 1000).toFixed(2)}`, 155, 12);
        };
        this.resize = (width, height, ratio) => {
            // if (height / width > ratio) {
            //   this.context.canvas.height = width * ratio;
            //   this.context.canvas.width = width;
            // } else {
            //   this.context.canvas.height = height;
            //   this.context.canvas.width  = height / ratio;
            // }
            // this.context.imageSmoothingEnabled = false;
            if (height / width > ratio) {
                this.context.canvas.height = width * ratio;
                this.context.canvas.width = width;
            }
            else {
                this.context.canvas.height = height;
                this.context.canvas.width = height / ratio;
            }
            this.context.imageSmoothingEnabled = false;
        };
        this.render = () => {
            const { buffer, context } = this;
            context.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, context.canvas.width, context.canvas.height);
        };
        this.buffer = (document.createElement('canvas')).getContext('2d');
        this.context = canvas.getContext('2d');
        this.strawberryImage = strawberryImage;
    }
}
;
