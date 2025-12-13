const mongoose = require("mongoose")         //a package to connect node app with mongoDB

//creating schema( it is optional )
const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is mandatory"]
    },
    email: {
        type: String,
        required: [true, "Email address field is mandatory"]
    },
    phone: {
        type: String,
        required: [true, "Phone number field is mandatory"]
    },
    designation: {
        type: String,
        required: [true, "Designation field is mandatory"]
    },
    salary: {
        type: Number,
        required: [true, "Salary field is mandatory"]
    },
    city: {
        type: String
    },
    state: {
        type: String
    }

})

//model: replica of database collection
//creating model(use singular word)
const Employee=new mongoose.model("Employee", EmployeeSchema)

module.exports=Employee



