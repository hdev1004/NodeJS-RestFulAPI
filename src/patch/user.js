const connection = require("../db");

const updateUser = (req, res) => {
    let param = req.params;
    let body = req.body;
    let attr = '';

    console.log(body);
    if(body.name) {
        attr += `name="${body.name}",`;
    }

    if(body.age) {
        attr += `age=${body.age},`;
    }
    attr = attr.slice(0, attr.length - 1);
    let query = `UPDATE users SET ${attr} WHERE id=${param.id}`;
    
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