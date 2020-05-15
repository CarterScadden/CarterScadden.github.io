var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class AssetsManager {
    constructor() {
        this.requestJSON = (url) => __awaiter(this, void 0, void 0, function* () {
            const res = yield new Promise(function (resolve, reject) {
                const req = new XMLHttpRequest();
                req.open('GET', url);
                req.onload = function () {
                    if (this.status >= 200 && this.status < 300) {
                        resolve(req.response);
                    }
                    else {
                        reject({ status: this.status, statusText: req.statusText });
                    }
                };
                req.onerror = function () { reject({ status: this.status, statusText: req.statusText }); };
                req.send();
            });
            return JSON.parse(res);
        });
        this.requestImage = (url) => {
            const image = document.createElement('img');
            image.src = url;
            // const image = new Image();
            // let wait = true;
            // image.addEventListener('load', () => { wait = false;}, { once: true });
            // image.src = url;
            // const w = () => wait;
            // waitout(w);
            return image;
        };
        this.tileSets = {
            main: document.createElement('img'),
            enemies: document.createElement('img'),
        };
    }
    ;
}
;
