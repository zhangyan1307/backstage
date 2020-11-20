var express = require("express");
var router = express.Router();
const { User } = require("../db/index.js");
const { auth } = require("../token/index.js");
/* GET home page. */
router.get("/", auth, async (req, res) => {
  const users = await User.find();
  res.send({
    code: 200,
    message: "获取成功",
    data: users,
  });
});

module.exports = router;
