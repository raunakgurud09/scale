import { Router } from "express";
import {
  createNewUser,
  handleGetAllUsers,
} from "../controller/user.controller";
import { sleep } from "@scale/shared";

const router = Router();

router.get("/health", async (req, res) => {
  await sleep();
  res.status(200).json({ message: "health route working" });
});

router.route("/user").get(handleGetAllUsers).post(createNewUser);

export { router as Router };
