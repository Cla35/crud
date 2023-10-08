import express from 'express';

const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.send("Ola deu certo");
});

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is ruuning on port ${port}`);
});