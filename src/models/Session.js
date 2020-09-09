const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Session = mongoose.model(
  "Session",
  new mongoose.Schema({
    session_name: String,
    poses: [{type: schema.Types.ObjectId, ref: 'Pose'}],
    createdBy: {type: schema.Types.ObjectId, ref: 'Practitioner'},
    sharedWith: [{type: schema.Types.ObjectId, ref: 'Practitioner'} ],
  })
);

module.exports = Session;
