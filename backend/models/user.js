const Sequelize = require('sequelize');

const sequeize = require('../util/database');

const Book = sequeize.define('book', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true,
    },
    name : {
        type : Sequelize.STRING,
    },
    email : {
        type : Sequelize.STRING,
        unique : true,
    },
    phone : {
        type : Sequelize.STRING,
    }
})

module.exports = Book;