import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'

const app = express()

import { v4 as uuidv4 } from 'uuid';

// const express = require ('express');
// const bodyParser = require ('bodyParser')

// started application here with app 


// alloted it a localhost server
const PORT = 5000
// 
app.use (bodyParser.json())

app.use('/users', usersRoutes)

app.get('/', (req,res) => {
    console.log('We are all set');
    res.send('Here we are now');

})

// app.get('/', (req, res));

app.listen (PORT, () => {
    console.log(`Server is running on : ${PORT} `)
})