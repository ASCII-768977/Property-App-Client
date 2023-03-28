import express from "express";

import {
  createProperty,
  getAllProperties,
  getPropertyDetail,
  updateProperty,
  deleteProperty,
} from "../controllers/property.controller.js";

const router = express.Router();

// It should be noted that it is more convenient to bind multiple request types to the same route using the .route() method, for example:
// router
//   .route("/")
//   .get(getAllProperties)
//   .post(createProperty)
//   .put(updateProperty)
//   .delete(deleteProperty);


router.route("/").get(getAllProperties);
router.route("/").post(createProperty);
router.route("/:id").get(getPropertyDetail);
router.route("/:id").patch(updateProperty);
router.route("/:id").delete(deleteProperty);

// router.get("/", getAllProperties);
// router.post("/", createProperty);
// router.get("/:id", getPropertyDetail);
// router.patch("/:id", updateProperty);
// router.delete("/:id", deleteProperty);

export default router;
