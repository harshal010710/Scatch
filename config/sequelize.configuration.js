let sq = require("sequelize")

let sequelize = new sq.Sequelize("userModel",null, null, {
	dialect : "sqlite",
	storage : "./db.sqlite"
});

module.exports = { DataTypes : sq.DataTypes, sequelize}