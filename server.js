const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static('public'));

const APIrouter = require("./routes/api.js");
const HTMLrouter = require("./routes/html.js");

app.use(HTMLrouter);
app.use("/api", APIrouter);


app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);