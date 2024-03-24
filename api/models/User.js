const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  msg: { type: String, required: true },
  mobNo: { type: Number, required: true },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
