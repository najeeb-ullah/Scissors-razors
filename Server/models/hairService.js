const mongoose = require("mongoose");

const hairServiceSchema = new mongoose.Schema({
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

mongoose.model("HairService", hairServiceSchema);