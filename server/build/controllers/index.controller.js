"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ctrlIndex {
    Index(req, res) {
        res.send('Index Page');
    }
    Home(req, res) {
        res.send('Aboute Page');
    }
}
exports.default = new ctrlIndex();
