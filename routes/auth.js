'use strict'
const express = require('express');
const router = express.Router();
var hash = require('pbkdf2-password')();

const createUser = async ({ email, password }) => {
    var newUser = {
        email: email,
    }
    await hash({password}, (error, password, salt, hash) => {
        if (error) throw error;
        newUser.salt = salt;
        newUser.hash = hash;
    })
}

router.post('/signup', async(req, res) => {
    const response = await createUser(req.body);
    res.send(response);
})

module.exports = router;