const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    history: String
});
const Calculator = mongoose.model("calculator", Schema);
module.exports = Calculator;