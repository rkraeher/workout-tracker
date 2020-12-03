const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
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
                },
            }
        ]
    });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

