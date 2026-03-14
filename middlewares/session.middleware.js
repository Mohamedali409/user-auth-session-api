export const sessionLogger = (req, res, next) => {
  if (!req.session || !req.session.user) {
    console.log("No valid session found");
    return next();
  }

  console.log("Logged in user session:", req.session.user);
  next();
};
