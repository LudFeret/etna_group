const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: { type: String, required: true},
    role: { type: Boolean, required: true},
    email: { type: String, unique: true, required: true },
    address: { type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);