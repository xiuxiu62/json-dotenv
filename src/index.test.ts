import dotenv from ".";

describe("Successfully load a file", () => {
  dotenv({ path: `${__dirname}/../examples/example_1.json` });

  test("with a string", () => expect(process.env.TEST_1).toBe("test"));
  test("with a number", () => expect(process.env.TEST_2).toBe("42"));
  test("with an array", () => expect(process.env.TEST_3).toBe("test,test"));
});
