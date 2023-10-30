let mongoose = require('mongoose');
const conn_string = process.env.DB_STRING

mongoose = mongoose.createConnection(
    conn_string,
    {
        dbName: "book_store",
        useUnifiedTopology: true,
        auth: {
            username: "admin",
            password: "mongodb"
        }
    },
    (err, db) => {
        console.log(err || "DB - Connected Successfully..!")
    }
);

module.exports = mongoose;