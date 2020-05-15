import AssetsManager from "./AssetsManager.js";
import Controller from "./Controller.js";
import Display from "./Display.js";
import Engine from "./Engine.js";
import Game from "./Game/Game.js";
window.addEventListener("load", function (event) {
    "use strict";
    const canvas = document.querySelector('canvas');
    if (canvas) {
        const ZONE_PREFIX = 'static/zone';
        const ZONE_SUFFIX = '.json';
        const assetsManager = new AssetsManager();
        const strawberryImage = assetsManager.requestImage('strawberry.png');
        const controller = new Controller();
        // we give it a empty HTMLImageElement as we assign the image later.
        const display = new Display(canvas, strawberryImage);
        // const game = new Game();
        const game = Game;
        const engine = new Engine(1000 / 30, render, update);
        display.buffer.canvas.height = game.world.height;
        display.buffer.canvas.width = game.world.width;
        display.buffer.imageSmoothingEnabled = false;
        assetsManager.requestJSON(ZONE_PREFIX + game.world.zoneID + ZONE_SUFFIX).then((zone) => {
            // set up the world
            game.world.setup(zone);
            // load textures
            assetsManager.tileSets.main = assetsManager.requestImage('textures.png');
            assetsManager.tileSets.enemies = assetsManager.requestImage('enemies.png');
            resize();
            engine.startGame();
            engine.startTime = Date.now().valueOf();
            window.addEventListener('keydown', ({ type, keyCode }) => {
                if (keyCode === 32 && game.world.gameover) {
                    game.world.gameover = false;
                    game.world.reset();
                    const req = assetsManager.requestJSON(ZONE_PREFIX + game.world.zoneID + ZONE_SUFFIX);
                    req.then((zone) => {
                        game.world.setup(zone);
                        engine.startGame();
                        engine.startTime = Date.now().valueOf();
                    });
                }
                ;
                controller.handleKeyDownOrUp(type, keyCode);
            });
            window.addEventListener("keyup", ({ type, keyCode }) => controller.handleKeyDownOrUp(type, keyCode));
            window.addEventListener("resize", resize);
        });
        function render() {
            // draw the level
            display.drawMap(assetsManager.tileSets.main, game.world.tileSet.columns, game.world.graphicalMap, game.world.columns, game.world.tileSet.tileSize);
            let frame;
            // Render strawberries
            game.world.strawberries.forEach(({ x, y, width, frameValue }) => {
                frame = game.world.tileSet.frames[frameValue];
                display.drawObject(assetsManager.tileSets.main, frame.x, frame.y, x + Math.floor(width * 0.5 - frame.width * 0.5) + frame.offsetX, y + frame.offsetY, frame.width, frame.height);
            });
            game.world.mushrooms.forEach(({ x, y, width, frameValue }) => {
                frame = game.world.tileSet.frames[frameValue];
                display.drawObject(assetsManager.tileSets.enemies, frame.x, frame.y, x + Math.floor(width * 0.5 - frame.width * 0.5) + frame.offsetX, y + frame.offsetY, frame.width, frame.height);
            });
            // render player
            frame = game.world.tileSet.frames[game.world.player.frameValue];
            display.drawObject(assetsManager.tileSets.main, frame.x, frame.y, game.world.player.x + Math.floor(game.world.player.width * 0.5 - frame.width * 0.5) + frame.offsetX, game.world.player.y + frame.offsetY, frame.width, frame.height);
            // render grass
            game.world.grass.forEach(({ x, y, frameValue }) => {
                frame = game.world.tileSet.frames[frameValue];
                display.drawObject(assetsManager.tileSets.main, frame.x, frame.y, x + frame.offsetX, y + frame.offsetY, frame.width, frame.height);
            });
            // draws the display information
            display.drawInfo(game.world.strawberryCount, assetsManager.tileSets.main, engine.startTime);
            display.render();
        }
        ;
        function update() {
            if (controller.left.active)
                game.world.player.moveLeft();
            if (controller.right.active)
                game.world.player.moveRight();
            if (controller.up.active) {
                game.world.player.jump();
                controller.up.active = false;
            }
            game.update();
            if (game.world.gameover) {
                display.drawGameOver(game.world.strawberryCount);
                engine.stop();
            }
            else {
                const length = game.world.strawberries ? game.world.strawberries.length : -1;
                // if there are no more strawberries left
                if (length === 0) {
                    // pause the game while we load the next zone
                    engine.stop();
                    // set world zone to the next zone
                    game.world.nextZone();
                    if (game.world.zoneID) {
                        // Load world data from static folder, and when loaded setup the world with the data and "start" / resume the game.
                        const req = assetsManager.requestJSON(ZONE_PREFIX + game.world.zoneID + ZONE_SUFFIX);
                        req.then((zone) => {
                            game.world.setup(zone);
                            engine.startGame();
                        });
                    }
                }
            }
        }
        ;
        function resize() {
            display.resize(document.documentElement.clientWidth, document.documentElement.clientHeight, game.world.height / game.world.width);
            display.render();
        }
        ;
    }
    ;
});
