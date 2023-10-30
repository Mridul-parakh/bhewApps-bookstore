const path = require('path');
require('dotenv').config({ path: path.join(__dirname, "credentials.env") });
const cors = require('cors');
const logger = require('morgan');
const express = require('express');

const app = express();
const books = require('./routes/books');

app.use(cors());
app.use(logger('dev'));
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.get('/', (req, res) => {
    return res.status(200).send(
        `<br><h1>Welcome to Book Store Management</h1>`
    )
})
app.use('/api', books);

const port = process.env.PORT || 8000;
app.listen(port,
    () => console.log(`Server connected at Port ${port} Successfully..!`)
)
