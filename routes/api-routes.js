const router = require("express").Router();
const Workout = require("../models/workout")

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(workoutData => {
      res.json(workoutData)
    })
    .catch(err => {
      res.json(err)
    })
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(workoutData => {
      res.json(workoutData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.put("/api/workouts/:id", ({ _id }, res) => {
  Workout.findOneAndUpdate({}, { $push: { excerises: _id } })
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});




module.exports = router;