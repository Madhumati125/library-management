"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const app = (0, express_1.default)();
mongoose_1.default.connect(config_1.config.mongo.url);
const db = mongoose_1.default.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => {
    console.log('database connected successfully.');
    startServer();
});
const startServer = () => {
    app.listen(config_1.config.server.port, () => {
        console.log(`server is running on port : ${process.env.server_port}`);
    });
};
