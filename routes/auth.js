'use strict'
const express = require('express');
const { getDB } = require('../utils/mongo');
const router = express.Router();
var hash = require('pbkdf2-password')();
router.post('/signup', async(req, res) => {
    const { email, password } = req.body;
    var newUser = {
        email: email,
    }
    await hash({password}, async (error, password, salt, hash ) => {
        if (error) throw error;
        newUser.salt = salt;
        newUser.hash = hash;
        // TODO: Store in database
        // 201 CREATED
        const db = await getDB();
        const collection = db.collection('documents');
        collection.insertOne(newUser);
        res.send(newUser);
    })
})

module.exports = router;