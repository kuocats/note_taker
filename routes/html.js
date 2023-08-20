const express = require('express');
const router = express.Router();

const path = require('path');
var __direname = path.resolve();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/../routes/public/index.html'));
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/notes.html'));
});

module.exports = router;