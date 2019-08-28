const express = require("express")
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

app.use(bodyParser.urlencoded({extended: false}))

// ---------------- ROUTING ----------------- //
app.use("/add-product", (request, response, next) => {
    response.send('<form action="/product" method="POST"><input type="text" name="productName"><button type="submit">Add Product</form>')
})
// use .post instead of .use to limit the logic to get requests only
app.post("/product", (request, response, next) => {
    console.log(request.body)
    response.redirect("/")
})

app.use("/", (request, response, next) => {
    response.send('<h1>Demo Store Homepage!</h1><p><a href="/add-product">Click Here</a> to see express.js routing in action! (note the output will appear in console this time)</p>')
})

// runs http.createServer and listens in one line so we no longer require("http") or assign a server to a variable before listening. 
app.listen(PORT)