const mongoose = require("mongoose");

const skinServiceSchema = new mongoose.Schema({
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

mongoose.model("SkinService", skinServiceSchema);