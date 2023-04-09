// index.js
const express = require('express');
const app = express();

const userGET = require('./get/user');
const userPOST = require('./post/user');
const userDELETE= require('./delete/user');
const userPUT = require('./put/user');
const userPATCH = require('./patch/user');

//body를 받기 위함
app.use(express.json());

//GET 
app.get('/', userGET.defaultRoute);
app.get('/users', userGET.getAllUsers);
app.get('/users/:id', userGET.getUser);

//POST 
app.post('/users', userPOST.addUser);

//DELETE
app.delete('/users/:id', userDELETE.deleteUser);

//PUT
app.put('/users/:id', userPUT.updateUser);

//PATCH
app.patch('/users/:id', userPATCH.updateUser);


app.listen(3000, function () {
    console.log('server listening on port 3000');
})