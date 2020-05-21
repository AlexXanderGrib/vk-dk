import API from ".";
import env = require("./.env.json");

const api = API(env.token);

test("Simple API query", async () => {
  const [founder] = await api.users.get({ user_ids: ["durov"] });

  expect(founder.first_name).toEqual("Павел");
});

test("API query with specific language", async () => {
  const [founder] = await api.users.get({ user_ids: ["durov"], lang: 3 });

  expect(founder.first_name).toEqual("Pavel");
  expect(founder.last_name).toEqual("Durov");
});

/**
 * TODO: more test here
 */
