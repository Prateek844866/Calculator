const express = require('express')
const hbs = require("hbs")
const path = require("path")
const bodyParser = require("body-parser")

require("./db_connect")
const Calculator = require("./models/Calculator")
const app = express()
app.use(express.json())
const encoder = bodyParser.urlencoded()


app.set("view engine","hbs")     
app.use(express.static(path.join(__dirname,"./views/public"))) 
hbs.registerPartials(path.join(__dirname,"./views/partials"))

app.post('/calculate',encoder,async (req, res) => {
    const { name , calculation} = req.body;
    let result;
  
    result=eval(calculation);

    const calculate = new Calculator({
        name,
        calculation,
        result
      });
    

    try{
        await calculate.save()
        const data = await Calculator.find()
        res.render('calculator', { result , data });
    }
    catch(error){
        console.log(error);
        res.status(500).render("calculator",{error:true,message:"Internal Server Error"})
    }
  });


  

app.get("/",async(req,res)=>{
    try{
        const data = await Calculator.find()
        res.render("calculator",{data:data})
    }
    catch(error){
        res.render("calculator")
    }
})

app.get("/delete/:_id",async(req,res)=>{
    try{
        await Calculator.deleteOne({_id:req.params._id})
        res.redirect("/")
    }
    catch(error){
        res.redirect("/")
    }
})


app.listen(4000,()=>{
    console.log("Server is Running at Port 3000..");
}) 

