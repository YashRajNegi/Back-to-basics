import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    role: {
      type: String,
      default: "User",
    },
  },
  {
    timestamps: true,
  }
);

// ✅ ASYNC pre-save hook (NO next)
userSchema.pre("save", async function () {
  // agar password change nahi hua, kuch mat karo
  if (!this.isModified("password")) return;

  // password hash
  this.password = await bcrypt.hash(this.password, 10);
});

// PASSWORD COMPARE
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// JWT TOKEN GENERATE
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export default mongoose.model("User", userSchema);
