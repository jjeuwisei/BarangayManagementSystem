const express = require("express");

const router = express.Router();

const {GetAllResidents, GetResidentById} = require("../controllers/ResidentController");

router.get("/", GetAllResidents);
router.get("/:id", GetResidentById);

module.exports = router;
