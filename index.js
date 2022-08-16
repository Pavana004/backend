const express = require("express");
const cors = require("cors");
const app = express();
const port =  process.env.PORT||5000;
const mongoose = require("mongoose");
const router = require("./router");





//middleware

app.use(express.json());
app.use(cors());


//connecting with database

mongoose.connect('mongodb+srv://Pavan:fXL4E1GnhABEwjVb@cluster0.khhogzb.mongodb.net/test',{useNewUrlParser:true,useUnifiedTopology:true},()=>{
       console.log("database start")
});





//router
app.use("/api",router);





//port

app.listen(port,console.log("multiverse sever port start"))