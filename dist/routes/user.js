"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const user = require("../model/user");
const router = express_1.default.Router();
// const data = require("../data")
const data_1 = __importDefault(require("../data"));
// const mongoose = require("mongoose")
// const User = require("../model/user")
const { products } = data_1.default;
router.get("/", (req, res) => {
    // res.send("allUser GET")
    // console.log(user1)
    res.send(products);
    console.log(products);
});
router.get("/:id", (req, res) => {
    const us = products.find((x) => x._id === req.params.id);
    if (!us) {
        return new Error("Kiya hua");
    }
    console.log(us);
    res.send(us);
});
router.delete("/:id", (req, res) => {
    const us = products.filter((e) => e._id !== req.params.id);
    console.log(us);
    res.send(us);
});
// router.delete("/:id",(req,res)=>{
//     const user:any =user1.filter(e => e.id === req.params.id) 
//     res.send("allUser DELETE")
// })
router.post("/", (req, res) => {
    res.send("allUser POST");
});
module.exports = router;
