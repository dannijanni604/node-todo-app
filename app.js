const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.routers');
const todoRoute = require('./routers/todo.routers')


const app = express();

const cors = require('cors');
app.use(cors());
app.use(body_parser.json());
app.use('/api/', userRouter)
app.use('/api/', todoRoute)


module.exports = app;