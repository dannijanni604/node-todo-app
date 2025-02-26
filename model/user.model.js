const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;


const userSchema = new Schema({

    // username: {
    //     type: String,
    //     required: true
    // },

    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    passwowrd: {
        type: String,
        required: true
    }
})



const UserModel = db.model('user', userSchema);

module.exports = UserModel;