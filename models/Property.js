const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  description: { type: String },
  image: { type: String, default: "https://tse1.mm.bing.net/th/id/OIP.o5DIafb0laDMwpppYc_b1QHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
});

module.exports = mongoose.model("Property", propertySchema);
