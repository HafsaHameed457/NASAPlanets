import { request } from "supertest";
import app from "../../src/express";
describe("Test GET /launches", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app).get("/launch");
    expect(response).toBe(200);
  });
});

describe("Test POST /launches", () => {
  test("It should respond with 200 success", () => {});
  test("It should catch missing required properties", () => {});
  test("It should catch invald dates", () => {});
});
