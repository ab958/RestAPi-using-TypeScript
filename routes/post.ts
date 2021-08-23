import express from "express";
// const user = require("../model/user");
const router = express.Router();

// const User = require("../model/user")

router.get("/",(req,res)=>{
    res.send("post GET")
})

router.put("/",(req,res)=>{
    res.send("post PUT")
})

router.delete("/",(req,res)=>{
    res.send("post DELETE")
})

router.post("/",(req,res)=>{
    res.send("post POST")
})


module.exports = router;