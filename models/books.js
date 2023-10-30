const mongoose = require('mongoose');
const db = require('../config/db');

const bookSchema = new mongoose.Schema({
    book_id: { type: Number, required: true, unique: true, },
    title: { type: String, required: true, unique: true, },
    author: { type: String, required: true },
    summary: { type: String, required: true }
},
    {
        timestamps: true,
        strict: false
    }
);


module.exports = db.model("books", bookSchema);

