const mongoose = require('mongoose');
const db = require('../config/db');
const UserModel = require('./user.model');

const { Schema } = mongoose;


const TodoSchema = new Schema({
    userId: {

        type: String,
        ref: UserModel.modelName
    },

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const TodoModel = db.model('todos', TodoSchema);
module.exports = TodoModel;