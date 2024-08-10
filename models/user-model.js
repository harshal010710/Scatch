const { TEXT, BOOLEAN, ARRAY, NUMBER } = require("sequelize")
const {DataTypes, sequelize} = require("../lib/index")

const userDataModel = sequelize.define("userDataModel", {
	fullname: TEXT,
	email: TEXT,
	password: TEXT,
	cart: {
		type: [],
		default: []
	},
	isAdmin: BOOLEAN,
	orders: {
		type : [],
		default: []
	},
	contact: NUMBER,
	picture: TEXT
})

module.exports = {userDataModel}