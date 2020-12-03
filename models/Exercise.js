const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        required: "Enter an Exercise Type"
    },
    name: {
        type: String,
        required: "Enter Exercise Name"
    },
    duration: {
        type: Number,
        //TODO: Add in some $gte 0 validator. 
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    distance: {
        type: Number,
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;