const mongoose = require('mongoose');

function connectDB(){
    mongoose.set('strictQuery', false);
    mongoose.connect("mongodb+srv://deep:deep@cluster0.qgpgjgz.mongodb.net/DayToDay");
    
    const connection = mongoose.connection;

    connection.once('open', ()=>{
        console.log("DB Connected!");
    });
}

module.exports = connectDB;