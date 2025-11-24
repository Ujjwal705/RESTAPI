import express from "express";
import {
  handleGetAllUsers,
  handlegetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(handleGetAllUsers);
router.route("/").post(handleCreateNewUser);

// Using route to handle GET, PATCH, DELETE for a specific user
router
  .route("/:id")
  .get(handlegetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

export default router;
