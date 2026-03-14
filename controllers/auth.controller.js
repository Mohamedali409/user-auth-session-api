import asyncHandler from "../utility/asyncHandler.js";
import * as userService from "../services/user.Service.js";

const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  const data = { name, email, password, confirmPassword };

  const newUser = await userService.createNewUser(data);

  req.session.user = {
    id: newUser._id,
    email: newUser.email,
  };

  res.status(201).json({
    success: true,
    message: "user created success",
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    },
    session: req.session,
  });
});

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await userService.loginUser(email, password);

  req.session.user = {
    id: user._id,
    email: user.email,
  };

  res.status(200).json({
    success: true,
    message: "Login success",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

const logout = asyncHandler(async (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
  });

  res.clearCookie("connect.sid");

  res.status(200).json({
    success: true,
    message: "logout success",
  });
});

const getCurrentUser = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.session.user,
  });
});

export { register, login, logout, getCurrentUser };
