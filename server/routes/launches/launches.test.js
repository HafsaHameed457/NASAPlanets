import { app } from "../../src/express.js";
describe("Test GET /launches", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .get("/launch")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test POST /launches", () => {
  test("It should respond with 201 created", async () => {
    const response = await request(app)
      .post("/launch")
      .send({
        missionName: "KeplerSpace",
        rocket: "Explorer Hafsa",
        launchDate: "December 20 2030",
        destination: "Kepler-42 bh",
      })
      .expect("Content-Type", /json/)
      .expect(201);

    expect(response.body).toMatchObject({
      missionName: "KeplerSpace",
      rocket: "Explorer Hafsa",
      launchDate: "December 20 2030",
      destination: "Kepler-42 bh",
    });
  });
  test("It should catch missing required properties", () => {});
  test("It should catch invald dates", () => {});
});
