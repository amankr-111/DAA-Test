import express from "express";
import { getAllUser } from "../controller/userController.js";
const router = express.Router();

// router.post("/user",getAllUser);
router.get("/user",getAllUser);
// router.get("user/:id",getUserById);
// router.put("user/:id",updateUser);
// router.delete("user/:id",deleteUser);


export default router;