// Express constanst
const express = require('express');
const app = express();

app.use(express.json());

// MongoDB constants
const mongoose = require('mongoose');
const Message = require('./Models/messageModel');

// Routing

app.get('/getall', async (req, res) => {
    try {
        const messages = await Message.find({});
        res.status(200).json(messages);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.post('/Send', async(req, res) => {
    console.log(req.body);
    try {
        const message = await Message.create(req.body)
        res.status(200).json(message);

    } catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

mongoose.connect('mongodb://MongoDB_container:27017/DockerLabb1_Database')
    .then(() => console.log('Connected to the Mongo database!'));

app.listen(3000, ()=> {
    console.log('Listening on port 3000')
});