const express = require("express")
const path = require("path")
const hbs = require("hbs")

const Router = require("./routes/Router")
require("./db-connect")

const app = express()

/* -------------------- Middleware -------------------- */

// Body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Static files (optional but safe)
app.use(express.static(path.join(__dirname, "public")))

/* -------------------- View Engine -------------------- */

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))

hbs.registerPartials(path.join(__dirname, "views", "partials"))

/* -------------------- Routes -------------------- */

app.use("/", Router)

/* -------------------- Server -------------------- */

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`)
})
