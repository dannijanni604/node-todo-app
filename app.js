const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.routers');


const app = express();

const cors = require('cors');
app.use(cors());
app.use(body_parser.json());
app.use('/', userRouter)

module.exports = app;