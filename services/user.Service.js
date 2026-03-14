import * as userRepository from "../repositories/user.Repositories.js";

export const createNewUser = async (data) => {
  const user = await userRepository.getUserByEmail(data.email);

  if (user) {
    throw new Error("this email used before");
  }

  const newUser = await userRepository.createUser(data);

  return newUser;
};

export const loginUser = async (email, password) => {
  const user = await userRepository.getUserByEmail(email);

  if (!user) {
    throw new Error("Invalid Email or Password");
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new Error("Invalid Email or Password");
  }

  return user;
};

export const getAllUser = async () => {
  const users = await userRepository.getAllUser();
  return users;
};
