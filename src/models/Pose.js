const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Pose = mongoose.model(
  "Pose",
  new schema({
    name: String,
  })
);

module.exports = Pose;
