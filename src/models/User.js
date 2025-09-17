import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["freelancer", "employer", "admin"], // keeps data clean
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    skills: {
      type: [String],
      default: [],
    },
    nftProfileLink: {
      type: String, // e.g., ipfs://...
      required: true,
    },
    walletAddress: {
      type: String, // optional now, important for DID
      sparse: true,
    },
    verified: {
      type: Boolean,
      default: false, // admin/manual verification
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
