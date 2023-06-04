const mongoose = require("mongoose")

const CalculatorSchema = mongoose.Schema({
    name:{
        type:String,
        require:[true,"Calculation Name is Required"]
    },
    calculation:{
        type:String,
        require:[true,"Calculation is Required"]
    },
    result:{
        type:String,
        require:[true,"Result is Required"]
    }
})
const Calculator = new mongoose.model("Calculator",CalculatorSchema)
module.exports = Calculator