import API from ".";
import env = require("./.env.json");

const userAPI = new API(env.token);
const groupAPI = new API(env.groupToken);

test("Simple API query", async () => {
  const [founder] = await userAPI.users.get({ user_ids: ["durov"] });

  expect(founder.first_name).toEqual("Павел");
});

test("API query with specific language", async () => {
  const [founder] = await userAPI.users.get({ user_ids: ["durov"], lang: 3 });

  expect(founder.first_name).toEqual("Pavel");
  expect(founder.last_name).toEqual("Durov");
});

test("API query with array", async () => {
  const [me] = await userAPI.users.get({ fields: ["sex", "verified", "site"] });

  expect(typeof me.sex).toBe("number");
  expect(typeof me.verified).toBe("number");
  expect(typeof me.site).toBe("string");
});

test("API query with an JSON object", async () => {
  const result = await groupAPI.messages.send({
    domain: "alexxgrib",
    message: "&#13;",
    keyboard: {
      one_time: false,
      buttons: [
        [
          {
            color: "negative",
            action: {
              type: "text",
              label: "Ахуительно большая красная кнопка",
              payload: "{}"
            }
          }
        ]
      ]
    },
    random_id: Date.now()
  });

  expect(typeof result).toBe("number");
});

/**
 * TODO: more test here
 */
