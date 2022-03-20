const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const covidstatSchema = new Schema({
    Country: {
        type: String,
        required: true
    },
    CoronavirusCases: {
        type: Number,
        required: true
    },
    Deaths: {
        type: Number,
        required: true
    },
    Recovered: {
        type: Number,
        required: true
    }
})

const covidstat = mongoose.model('covidstat', covidstatSchema);
module.exports = covidstat;