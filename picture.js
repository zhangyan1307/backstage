var express = require("express");
var router = express.Router();
/* GET home page. */
router.get("/public/images/*", async (req, res) => {
    res.sendFile( __dirname + "/" + req.url );
});

module.exports = router;
