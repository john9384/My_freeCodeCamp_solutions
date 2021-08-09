const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  username: { type: String, unique: true },
  log: [{ type: Schema.Types.ObjectId, ref: "exercise" }],
});
const exersiceSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: String },
});
const User = mongoose.model("user", userSchema);
const Exercise = mongoose.model("exercise", exersiceSchema);

module.exports = { User, Exercise };
