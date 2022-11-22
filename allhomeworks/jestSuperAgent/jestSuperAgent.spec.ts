import superagent from "superagent";
describe("my first story", function () {
  test("my first test case", async () => {
    const response = await superagent.get("https://reqres.in/api/users?page=2");
    expect(response.status).toBe(200);
  });
});
describe("my second story", function () {
  test("my second test case", async () => {
    const response = await superagent.get("https://reqres.in/api/users/2");
    console.log(response.body);
    expect(response.status).toBe(200);
  });
});
describe("my third story", function () {
  test("my third test case", async () => {
    const response = await superagent.get(
      "https://reqres.in/api/users?delay=3"
    );
    console.log(response.headers);
    expect(response.status).toBe(200);
  });
});
describe("my fourth story", function () {
  test("my fourth test case", async () => {
    const response = await superagent.get("https://reqres.in/api/unknown");
    console.log(response.text);
    expect(response.status).toBe(200);
  });
});
describe("my fifth story", () => {
  test("my fifth test case", async () => {
    try {
      await superagent.get("https://reqres.in/api/users/12");
    } catch (error: any) {
      expect(error.status).toBe(404);
    }
  });
});

describe("my sixth story", () => {
  test("my sixth test case", async () => {
    try {
      await superagent.get("https://reqres.in/api/users/77");
    } catch (error: any) {
      expect(error.status).toBe(404);
    }
  });
});
describe("my seventh story", () => {
  test("my seventh test case", async () => {
    let response: any;
    try {
      response = await superagent
        .post("https://reqres.in/api/users")
        .set("Content-Type", "application/json")
        .send({
          name: "morpheus",
          job: "leader",
        });
    } catch (error: any) {
      throw new Error(`The system gave an error ${error}`);
    }
    console.log("response => ", response.body);

    expect(response.body.job).toEqual("leader");
    expect(response.body.name).toEqual("morpheus");
  });
});
describe("my eighth story", function () {
  test("my eighth test case", async () => {
    const response = await superagent.put("https://reqres.in/api/users/2");
    expect(response.status).toBe(200);
  });
});
describe("my ninth story", function () {
  test("my ninth test case", async () => {
    const response = await superagent.patch("https://reqres.in/api/users/2");
    expect(response.status).toBe(200);
  });
});
describe("my tenth story", function () {
  test("my tenth test case", async () => {
    const response = await superagent.delete("https://reqres.in/api/users/2");
    expect(response.status).toBe(204);
  });
});

const expectedObj: { name: string; job: string } = {
  name: "morpheus",
  job: "leader",
};
describe("my eleventh story", () => {
  it("my eleventh test case", async () => {
    const res = await superagent
      .put("https://reqres.in/api/users/3")
      .set("Content-Type", "application/json")
      .send({ name: "morpheus", job: "leader" });
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toEqual(expectedObj.name);
    expect(res.body.job).toEqual(expectedObj.job);
  });
});
