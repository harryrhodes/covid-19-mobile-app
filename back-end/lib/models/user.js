const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: Number,
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    accountType: String,
    role: {},
    patientDetails: {},
    symptoms: [],
    createdDate: Date
}, { collection: 'users', minimize: false });

/** @type {import('mongoose').Schema} */
module.exports.schema = userSchema;

/** @type {import('mongoose').Model} */
module.exports.model = mongoose.model('User', userSchema);
