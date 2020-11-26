const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const appointmentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
});

mongoose.model("Appointment", appointmentSchema);
