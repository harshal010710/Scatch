let express = require("express")
let app = express()
let {userData} = require("./models/user.model")
let {productData} = require("./models/product.model")
let {sequelize} = require("./lib/index")

let cookieParser = require("cookie-parser")
let path = require("path")

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
	res.status(200).send("Welcome to scatch")
})

app.listen(3000, ()=>{
	console.log("app is running on port 3000")
})