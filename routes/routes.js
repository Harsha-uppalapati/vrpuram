const { Router } = require("express");
const router = Router();
const { check, creatUser } = require("../controllers/controller");

router.route("/check").get(check);
router.route("/createuser").post(creatUser);

module.exports = router;
