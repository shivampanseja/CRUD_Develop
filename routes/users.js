import express from 'express';
import { v4 as uuidv4 } from 'uuid';
// import { Router } from 'express';
// const router = require('express').Router(); 
// import router = from 'express.Router';
const router = express.Router()


// user will be storing data and we can read and write from it.

// Get = Read
let users = [{
        firstname: 'Shivam',
        lastname: 'Panseja',
        email: 'shivampanseja@gmail.com'
    },
    {
        firstname: 'Sahil',
        lastname: 'Kumar',
        email: 'sahilkumar@gmail.com'
    }];

router.get('/', (req, res) => {
    res.send(users)
})


///create



router.post('/', (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4()})
    res.send(`${user.firstname} has been added`)

})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)
});

console.log('hello world')

router.delete('/:id', (req, res)=> {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id)
    res.send(`${id} deleted`)
    console.log('ojrdjf')
})

export default router