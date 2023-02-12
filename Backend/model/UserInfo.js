const mongoose = require('mongoose');

const userInfo=new mongoose.Schema({
    
    uemail: { type: String, required: true},
    uname: { type: String, required: true },
    uphone: { type: String, required: true },
    upass: { type: String, required: true },

},{ timestamps: true })

module.exports = mongoose.model('UserInfo', userInfo);