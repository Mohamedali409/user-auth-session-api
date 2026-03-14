import asyncHandler from "../utility/asyncHandler.js";
import * as userService from "../services/user.Service.js";

const getUsers = asyncHandler(async (req, res, next) => {
  const users = await userService.getAllUser();

  res.status(200).json({
    success: true,
    message: "All user",
    users: users,
  });
});

export { getUsers };
