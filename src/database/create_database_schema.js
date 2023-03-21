//create the collections in database
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://UsamaAbbasi:H9UOzcZKeqFT2bq5@cluster0.u2pxqul.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));
// User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Image schema
const imageSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  filename: { type: String, required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Prediction schema
const predictionSchema = new mongoose.Schema({
  image: { type: mongoose.Schema.Types.ObjectId, ref: "Image", required: true },
  disease: { type: String, required: true },
  confidence: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
const Image = mongoose.model("Image", imageSchema);
const Prediction = mongoose.model("Prediction", predictionSchema);
