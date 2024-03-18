const router = require("express").Router();
const passport = require("passport");

/**
 * Route handler for successful login authentication
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully authenticated",
      user: req.user,
    });
  } else {
    res.status(403).json({
      error: true,
      message: "Not Authorized",
    });
  }
});

/**
 * Route handler for failed login authentication
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "User failed to authenticate.",
  });
});

/**
 * Route handler for Google OAuth callback
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

/**
 * Route handler for initiating Google OAuth authentication
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
router.get("/google", passport.authenticate("google", ["profile", "email"]));

/**
 * Route handler for user logout
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

module.exports = router;