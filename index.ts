console.log("Hello world")
import express from "express";
const app = express();

const userRoute = require("./routes/user")
const postRoute = require("./routes/post")

// ************ To Send A Json Response ************ //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//     ***********************

app.get("/",(req,res)=>{
    res.send("Express with typescript")
})
app.use('/user',userRoute)
app.use('/post',postRoute)

app.listen(2000,()=>{
    console.log("server is up")
})