const express = require("express");
const morgan = require("morgan");
const server = express();
const carsRouter = require("./cars-router");

server.use(morgan("dev"));
server.use(express.json());
server.use("/api/cars", carsRouter);

server.get("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

server.listen(5000, () => {
  console.log("server listening on port 5000");
});
