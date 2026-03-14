import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: { type: String, required: [true, "Email is required"], unique: true },
  password: { type: String, required: [true, "Password is required"] },
  confirmPassword: {
    type: String,
    required: [true, "confirm Password is required"],
    select: false,
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  if (this.password !== this.confirmPassword) {
    throw new Error("Password not match with confirm password");
  }

  this.password = await bcrypt.hash(this.password, 10);
  this.confirmPassword = undefined;
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
