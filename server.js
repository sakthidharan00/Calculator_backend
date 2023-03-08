const express = require("express");
const app = express();

const dotEnv = require("dotenv");
dotEnv.config();

const cors=require("cors");
app.use(cors());
app.use(express.json());


//databse connections
require("./Database/DBConnection");
const calculator = require("./Database/schema");


app.post("/calculator/data",(req,res) => {

 const calData = new calculator({
        history: req.body.data

    }
    )
    calData.save((err, doc) => {
        res.send(doc);
        
    })

    



})

app.get("/calculator/data/",(req,res)=>{
   
    calculator.findOne((err,doc)=>{res.json(doc)});
    console.log("data requested form frontend");
})

app.put("/calculator/data/",(req,res)=>{
    calculator.findByIdAndUpdate(_id="6402d4a3a77e4562e1b9b007",{history:req.body.data},{new:true},(err,doc)=>{
        
        res.json(doc);
        console.log("data updated in database");

    })

})




app.listen(8000, () => {
    console.log("Server is Connected");
})