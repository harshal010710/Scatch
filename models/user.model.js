// const { TEXT, BOOLEAN, ARRAY, NUMBER } = require("sequelize")
const {DataTypes, sequelize} = require("../lib/index")

const userDataModel = sequelize.define("userDataModel", {
	fullname: DataTypes.TEXT,
	email: DataTypes.TEXT,
	password: DataTypes.TEXT,
	cart: {
		type: [],
		default: []
	},
	isAdmin: DataTypes.BOOLEAN,
	orders: {
		type : [],
		default: []
	},
	contact: DataTypes.NUMBER,
	picture: DataTypes.TEXT
})

module.exports = {userDataModel}