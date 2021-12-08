const { Router } = require("express");
const locationController = require("../controllers/location.js");
const resultController = require("../controllers/result.js");
const userController = require("../controllers/user.js");
const router = Router();

//location endpoints
router.get("/api/locations/:id", locationController.getLocationById);
router.post("/api/location", locationController.create);
router.put("/api/locations/:id", locationController.update);
router.delete("/api/locations/:id", locationController.deleteLocation);
router.get("/api/locations", locationController.findAll);

//result endpoints
router.post("/api/result", resultController.createResult);
router.put("/api/results/:id", resultController.updateResult);
router.get("/api/results", resultController.findAllResults);
router.delete("/api/results/:id", resultController.deleteResult);
router.get("/api/results/:id", resultController.getResultById);

// user endpoints
router.get("/api/users/:id", userController.getUserById);
router.post("/api/user", userController.create);
router.put("/api/users/:id", userController.update);
router.delete("/api/users/:id", userController.deleteUser);
router.get("/api/users", userController.findAll);

module.exports = router;
