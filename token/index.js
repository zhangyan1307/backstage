
const { User } = require("../db/index.js");
const auth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send({
      code: 500,
      message: "请添加请求头",
    });
  }
  const tokenData = await require("jsonwebtoken").verify(
    req.headers.authorization,
    "zhangyan"
  );
  const user = await User.findById(tokenData.id);
  if (!user) {
    return res.send({
      code: 500,
      message: "无效token",
    });
  }
  next();
};
module.exports = { auth };
