const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/demo", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
//用户模型
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
    set(val){
        return require("bcrypt").hashSync(val,10)
    }
  },
});
const User = mongoose.model("User", UserSchema);

module.exports = { User };
