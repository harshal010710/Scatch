let {DataTypes, sequelize} = require("../config/sequelize.configuration")

let productModel = sequelize.define("productModel", {
	Image : DataTypes.TEXT,
	name : DataTypes.TEXT,
	discount : {
		type : DataTypes.INTEGER,
		defaultValue : 0
	},
	bgcolor : DataTypes.TEXT,
	panelcolor : DataTypes.TEXT,
	textcolor : DataTypes.TEXT
})

module.exports = {productModel}