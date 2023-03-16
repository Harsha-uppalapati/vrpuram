const { Router } = require("express");
const router = Router();
const { check, creatUser, calculate } = require("../controllers/controller");
router.route("/check").get(check);
router.route("/createuser").post(creatUser);
router.route("/calculate").get(calculate);
module.exports = router;
