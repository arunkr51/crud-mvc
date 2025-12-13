require("mongoose")
    .connect("mongodb://localhost:27017/crud")
    .then(() => {
        console.log("database is connected")
    })
    .catch(error => {
        console.log(error)
    })