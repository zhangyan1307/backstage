var express = require("express");
var router = express.Router();
const { User } = require("../db/index.js");
const jwt=require("jsonwebtoken")
const secret="zhangyan"
/* GET users listing. */
router.post("/", async (req, res) => {
  const search = await User.find({
    username: req.body.username,
  });
  if (search.length == 0) {
    return res.send({
      code: 404,
      message: "用户不存在111111",
    });
  }
  const correct = await require("bcrypt").compareSync(
    req.body.password,
    search[0].password
  );
  if (!correct) {
    return res.send({
      code: 500,
      message: "用户密码错误",
    });
  }
  const token=jwt.sign({
    id:String(search[0]._id)
  },secret)
  res.send({
    code: 200,
    message: "登入成功",
    token
  });
});

module.exports = router;
