const { text } = require("express")
let {DataTypes, sequelize} = require("../config/sequelize.configuration")

let ownerModel = sequelize.define("ownerModel",{
	fullname : DataTypes.TEXT,
	email : DataTypes.TEXT,
	password : DataTypes.TEXT,
	products : {
		type : [],
		defaultValue : []
	},
	pictures : DataTypes.TEXT,
	gstin : DataTypes.NUMBER
});

module.exports = {ownerModel}