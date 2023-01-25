const express = require("express");
const {
  createProfessionals,
  getProfessionals,
  getProfessional,
  updateProfessionals,
  deleteProfessionals,
} = require("../controllers/professionalsController");
const validation = require("../middlewares/validationMiddleware");
const isPsychairtrist = require("../middlewares/isPsychairtrist");
const {
  professionalsValidation,
} = require("../validation/professionalsValidation");
const userRequireAuth = require("../middlewares/userRequireAuth");

// express router
const router = express();

router.post(
  "/",
  userRequireAuth,
  //   isPsychairtrist,
  validation(professionalsValidation),
  createProfessionals
);
router.get("/", userRequireAuth, getProfessionals);
router.get("/:id", userRequireAuth, getProfessional);
router.put(
  "/:id",
  userRequireAuth,
  validation(professionalsValidation),
  updateProfessionals
);
router.delete("/:id", userRequireAuth, isPsychairtrist, deleteProfessionals);

module.exports = router;
