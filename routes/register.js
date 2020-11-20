var express = require("express");
var router = express.Router();
const { User } = require("../db/index.js");
/* GET home page. */
router.post("/", async (req, res) => {
  const search = await User.find({
    username: req.body.username,
  });
  if (search.length == 1) {
    return res.send({
      code: 433,
      message: "用户已经被注册",
    });
  }
  const user = await User.create({
    username: req.body.username, //用户名
    password: req.body.password, //密码
  });
  res.send({
    code: 200,
    message: user,
    text: "注册成功",
  });
});

module.exports = router;
