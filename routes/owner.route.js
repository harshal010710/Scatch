let express = require("express")
let route = express.Router()

route.get("/owner", (req, res)=>{
	res.send({owner : " activated"});
})

module.exports = route; 