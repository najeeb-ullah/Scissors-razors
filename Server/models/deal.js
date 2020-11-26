const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

mongoose.model("Deal", dealSchema);