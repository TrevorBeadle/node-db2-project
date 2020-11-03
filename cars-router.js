const express = require("express");
const router = express.Router();
const db = require("./data/dbConfig");

router.get("/", (req, res) => {
  db.get()
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

router.get("/:id", validateCarID, (req, res) => {
  res.status(200).json(req.car);
});

router.post("/", (req, res) => {
  db.insert(req.body)
    .then(car => {
      res.status(201).json(car);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

function validateCarID(req, res, next) {
  const { id } = req.params;
  db.getByID(id)
    .then(car => {
      if (car) {
        req.car = car;
        next();
      } else {
        next({ code: 404, message: "there are no cars with that ID" });
      }
    })
    .catch(err => {
      next({ code: 500, message: err.message });
    });
}

router.use((err, req, res, next) => {
  res.status(err.code).json({ message: err.message });
});

module.exports = router;
