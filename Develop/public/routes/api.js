const express = require('express');
const router = express.Router();
const fs = require('fs');
let notes = require('../db/db.json');
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

router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;

    fs.readFile("./db/db.json", "utf8", (error,data) => 
    error ? console.error(error) : (notes = JSON.parse(data))
    );

    const deleteNote = notes.filter(note => note.id === req.params.id)

    if (deletedNote) {
        let notesFilter = notes.filter(note => note.id != req.params.id)
        let noteString = JSON.stringify(filteredNotes, null, 3);
        fs.writeFile(`./db/db.json`, noteString, (err) =>
        err
        ? console.error(err)
        :console.log('Note is deleted!'));

        res.status(200).json(filteredNotes);
    } else {
        res.status(500).json('Error deleting note');
    }
});

module.exports = router; 