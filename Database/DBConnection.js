const mongoose=require("mongoose");
const Collections=require("./schema");

mongoose.connect(process.env.dbUrl,()=>{console.log("DataBase Connected");})


