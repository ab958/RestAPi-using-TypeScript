import express from "express";
// const user = require("../model/user");
const router = express.Router();
// const data = require("../data")
import data from "../data"
// const mongoose = require("mongoose")

// const User = require("../model/user")
const {products} = data;
router.get("/",(req,res)=>{
    // res.send("allUser GET")
    // console.log(user1)
    res.send(products)
    console.log(products)
})

router.get("/:id",(req,res)=>{
    const us = products.find((x:any)=>x._id === req.params.id)
    if(!us){
        return new Error("Kiya hua")
    }
    console.log(us)
    res.send(us)

})
router.delete("/:id",(req,res)=>{
    const us = products.filter((e:any)=>e._id !==req.params.id)
    console.log(us)
    res.send(us)
})
interface wahab{
    _id :string,
    name:string,
    category :string,
    image :string,
    price : number,
    countInStock : number,
    brand :string,
    rating :number,
    numReviews :number,
    description : string
}
let arr:wahab[]
router.post("/",(req,res)=>{
    const us = products.filter((e:any)=>e._id !==req.params.id)
    console.log(us)
    res.send(us)
    // products.push({
    //     id : req.body.id,
    // })
})
// router.delete("/:id",(req,res)=>{
//     const user:any =user1.filter(e => e.id === req.params.id) 
//     res.send("allUser DELETE")
// })

// router.post("/",(req,res)=>{
//     res.send("allUser POST")
// })


module.exports = router;