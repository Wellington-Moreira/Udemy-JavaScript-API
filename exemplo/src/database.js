const {Sequelize} = require("sequelize");

class Database{
    constructor(){
        this.init();
    }

    init (){
        this.db = new Sequelize({
            database: "example-udemy",
            host: "localhost",
            username: "root",
            dialect: "mysql",
            password: "13527004"
        })
    }
}

module.exports = new Database();