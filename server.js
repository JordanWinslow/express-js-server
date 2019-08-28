const express = require("express")
// including body-parser manually because historically it has been removed from node.js multiple times in the past.
const bodyParser = require("body-parser")

const PORT = 3000

/* -------------------------------------*\
|  express.js allows us to set up a      |
|  series of "middleware" to run through |
|  with the "next()" method, then finish |
|  with a standard server response.      |
\*  ------------------------------------*/


const app = express()

// middleware executes top to bottom, so global routing rules, parsing, etc. should be applied first 

app.use()

// ---------------- ROUTING ----------------- //
app.use("/add-product", (request, response, next) => {
    response.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</form>')
    next()
})

app.use("/product", (request, response, next) => {

    response.redirect("/")
})

// runs http.createServer and listens in one line so we no longer require("http") or assign a server to a variable before listening. 
app.listen(PORT)