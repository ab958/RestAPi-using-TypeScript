"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello world");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
// ************ To Send A Json Response ************ //
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
//     ***********************
app.get("/", (req, res) => {
    res.send("Express with typescript");
});
app.use('/user', userRoute);
app.use('/post', postRoute);
app.listen(2000, () => {
    console.log("server is up");
});
