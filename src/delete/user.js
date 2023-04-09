const connection = require("../db");

const deleteUser = (req, res) => {
    let param = req.params;

    connection.query(`DELETE FROM users WHERE id=${param.id}`, (error, rows, fields) => {
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
    deleteUser
}