const express = require('express');
const router = express.Router();
const fs = require('fs');
// let notes = require('../db/db.json');
const { v4: uuidv4 } = require ('uuid');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    
    const {title, text} = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        notes.push(newNote);

        let noteString = JSON.stringify(notes, null, 3);

        fs.writeFile(`./db/db.json`, noteString, (err) =>
        err
            ? console.error(err)
            : console.log(`New Note Added!`)
        );

        const response = {
            status: 'success',
            body: newNote,
        };

        console.log(reponse);

        res.status(201).json(response);
    } else {
        res.status(500).json('Not able to add note!')
    }
});

module.exports = router; 