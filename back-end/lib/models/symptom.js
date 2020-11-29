const mongoose = require('mongoose');

const symptomSchema = mongoose.Schema({
    _id: Number,
    name: String
});

/** @type {import('mongoose').Schema} */
module.exports.schema = symptomSchema;

/** @type {import('mongoose').Model} */
module.exports.model = mongoose.model('Symptom', symptomSchema);
