const connection = require("../db");

const updateUser = (req, res) => {
    let param = req.params;
    let body = req.body;
    let query = `UPDATE users SET name="${body.name}", age=${body.age} WHERE id=${param.id}`;

    connection.query(query, (error, rows, fields) => {
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
    updateUser
}