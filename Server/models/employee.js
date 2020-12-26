const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  contact: {
    type: Number,
    required: true,
  },
  cnic: {
    type: Number,
    required: true,
  },
});

mongoose.model("Employee", employeeSchema);
