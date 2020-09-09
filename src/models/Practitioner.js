const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Practitioner = mongoose.model(
    "Practitioner",
    new mongoose.Schema({
      username: String,
      authored_sessions: [{type: schema.Types.ObjectId, ref: 'Session'}],
      shared_sessions: [{type: schema.Types.ObjectId, ref: 'Session'}]
    })
  );