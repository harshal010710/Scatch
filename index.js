let express = require("express")
let app = express()

app.get("/", (req, res)=>{
	res.status(200).send("Welcome to scatch")
})

app.listen(3000, ()=>{
	console.log("app is running on port 3000")
})