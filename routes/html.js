const express = require('express');
const router = express.Router();

const path = require('path');

router.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, '../public/index.html'));
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(_direname, '../public/notes.html'));
});

module.exports = router;