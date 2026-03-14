import User from "../models/user.model.js";

export const getUserByEmail = (email) => {
  return User.findOne({ email });
};

export const createUser = (data) => {
  return User.create(data);
};

export const getAllUser = () => {
  return User.find().select("-password");
};
