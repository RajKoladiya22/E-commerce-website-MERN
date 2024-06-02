const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://Raj:uq5rMhO1FfkLkOU3@cluster0.fvudrsz.mongodb.net/MERN-PROJECT');
mongoose.connect('mongodb://localhost:27017/MERN-PROJECT');

const db = mongoose.connection;

db.on("connected", (err)=>{
    if(err){
        console.log(`db is not connect ${err}`);
        return false
    }
    console.log(`db is connect`);
});

module.exports = db ;