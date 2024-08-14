
// backend/user/index.js
const express = require('express');
const userRouter = require("./user");
const accountRouter = require("./account");

const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;
// /api/v1/users/signup
// /api/v1/users/signin
// /api/v1/users/changePassword

// /api/v1/account/transferMoney
// /api/v1/account/balance

