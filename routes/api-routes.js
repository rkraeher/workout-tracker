const router = require("express").Router();
const Workout = require("../models/Workout")

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(workoutData => {
      res.json(workoutData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
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

router.post("/api/workouts", (req, res) => {
  Workout.create(req.body.Workout)
    .then(workoutData => {
      res.json(workoutData)
    })
    .catch(err => {
      res.json(err)
    })
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