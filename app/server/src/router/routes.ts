import { Router } from "express";
import {
  createNewUser,
  handleGetAllUsers,
} from "../controller/user.controller";

const router = Router();

router.get("/health", (req, res) => {
  res.status(200).json({ message: "health route working" });
});

router.route("/user").get(handleGetAllUsers).post(createNewUser);

export { router as Router };
