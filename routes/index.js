const { Router } = require("express");
const locationController = require("../controllers/location.js");

const router = Router();

//location endpoints
router.get("/api/locations/:id", locationController.getLocationById);
router.post("/api/location", locationController.create);
router.put("/api/locations/:id", locationController.update);
router.delete("/api/locations/:id", locationController.deleteLocation);
router.get("/api/locations", locationController.findAll);

module.exports = router;
