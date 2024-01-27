import supertest from "supertest";
import { app } from "../app";

const userInput = {
  email: "test@gmail.com",
  password: "test123",
};

describe("User", () => {
  describe("POST /user", () => {
    describe("when giving  valid email and password", () => {
      it("create user with 201", async () => {
        const { statusCode, body } = await supertest(app)
          .post("/api/user")
          .send(userInput);

        expect(statusCode).toBe(201);
        expect(body.user.email).toEqual(userInput.email);
      });
    });
  });

  describe("GET /user", () => {
    it("return 200", async () => {
      const { statusCode } = await supertest(app).get("/api/user");

      expect(statusCode).toBe(200);
    });
  });
});
