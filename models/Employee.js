const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is mandatory"]
    },
    email: {
        type: String,
        required: [true, "Email address field is mandatory"],
        unique: true
    },
    city: {
        type: String
    },
    state: {
        type: String
    }
})

const Employee = mongoose.model("Employee", EmployeeSchema)
module.exports = Employee
