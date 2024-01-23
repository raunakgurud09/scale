import { DB } from "../lib/db";
import { sendMail } from "../lib/sendMail";
import { Request, Response } from "express";

import { Queue } from "bullmq";

const emailQueue = new Queue("email-queue");

const User = new DB();

export const handleGetAllUsers = (req: Request, res: Response) => {
  try {
    const users = User.getUsers();
    return res.status(200).json({
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "body required email and password" });
    }

    // create a new user in db
    const user = User.createUser(email, password);

    await emailQueue.add(`${Date.now()}`, {
      from: "demo@gmail.com",
      to: user.email,
      sub: "New email verification mail sent",
    });

    // await sendMail();

    return res.status(201).json({
      user,
      message: "new user created",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server error",
    });
  }
};
