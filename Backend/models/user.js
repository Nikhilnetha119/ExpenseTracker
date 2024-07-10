const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    premium_user: {
        type: Sequelize.BOOLEAN,
        defaultValue: false 
    },
    totalExpense: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

sequelize.sync({ alter: true }).then(() => {
    console.log("Database synchronized!");
}).catch((error) => {
    console.error("Error synchronizing database:", error);
});

module.exports = User;
