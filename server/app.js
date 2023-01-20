const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const animalList = require('./data')
const app = express();

app.use(cors('localhost'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('json spaces', 2)
/* Implement your routes here */

app.get('/', (req, res)=>{
    res.json({animalList})
})
app.listen( ()=>{
    console.log('Example app listening on port ')
})
module.exports = app;
