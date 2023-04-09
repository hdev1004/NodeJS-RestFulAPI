const connection = require("../db");

const defaultRoute = (req, res) => {
    return res.send('index page');
}

const getUser = (req, res) => {
    let result = {};
    let param = req.params;

    connection.query(`SELECT * from users WHERE id=${param.id}`, (error, rows, fields) => {
        if (error) {
            result = {
                code: error.errno,
                message: error.message
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

const getAllUsers = (req, res) => {
    let result = {};

    connection.query('SELECT * from users', (error, rows, fields) => {
        if (error) {
            result = {
                code: error.errno,
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
    defaultRoute,
    getUser,
    getAllUsers
}