"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const user = require("../model/user");
const router = express_1.default.Router();
// const User = require("../model/user")
router.get("/", (req, res) => {
    res.send("post GET");
});
router.put("/", (req, res) => {
    res.send("post PUT");
});
router.delete("/", (req, res) => {
    res.send("post DELETE");
});
router.post("/", (req, res) => {
    res.send("post POST");
});
module.exports = router;
