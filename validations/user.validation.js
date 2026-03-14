import Joi from "joi"; // لازم J capital في import

export const registerValidator = (req, res, next) => {
  const userValidation = Joi.object({
    name: Joi.string()
      .min(3)
      .max(15)
      .required()
      .messages({ "string.empty": "Username is required" }),

    email: Joi.string()
      .email()
      .required()
      .messages({
        "string.empty": "Email is required",
        "string.email": "Invalid email",
      }),

    password: Joi.string()
      .min(6)
      .required()
      .messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 6 characters",
      }),

    confirmPassword: Joi.string()
      .required()
      .valid(Joi.ref("password"))
      .messages({ "any.only": "Confirm Password must match Password" }),
  });

  const { error } = userValidation.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  next();
};
