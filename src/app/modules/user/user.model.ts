import { Schema, model } from "mongoose";
import IUser from "./user.interface";

//   =================creating Schema using interface==================
const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: String,
  },
  gendar: {
    type: String,
    enum: ["male", "female"],
  },
  email: {
    type: String,
  },
  contactNO: {
    type: String,
  },
  emargencyContactNO: {
    type: String,
  },
  presentAddress: {
    type: String,
  },
  pormanotAddress: {
    type: String,
  },
});

//   ==================Create a Model====================
const User = model<IUser>("User", userSchema);

export default User;
