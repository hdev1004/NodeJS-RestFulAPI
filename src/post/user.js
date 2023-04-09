const connection = require("../db");

const addUser = (req, res) => {
    let body = req.body;

    connection.query(`INSERT INTO users(name, age) values("${body.name}", ${body.age})`, (error, rows, fields) => {
        if (error) {
            result = {
                message: error.errno,
                data: error.message
            }
            return res.send(result);
        } else {
            result = {
                message: "200 OK",
                data: rows
            };    
            return res.send(result);
        }
    });
}

module.exports = {
    addUser
}