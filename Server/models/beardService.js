const mongoose = require("mongoose");

const beardServiceSchema = new mongoose.Schema({
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

mongoose.model("BeardService", beardServiceSchema);
