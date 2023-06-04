const mongoose = require("mongoose")
async function getConnection() {
    try {
        await mongoose.connect("mongodb+srv://prateekanojia2002:1234567890@cluster0.bpkarbt.mongodb.net/Calculator")
        console.log("Database is Connected")
    }
    catch (error) {
        console.log(error)
    }
}
getConnection()

