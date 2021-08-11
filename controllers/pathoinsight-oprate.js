const Mock = require("mockjs");
const createListRes = (template, next = true) =>
  Mock.mock({
    code: 200,
    msg: "ok",
    "data|10": [template],
    next,
    size: 10,
    total: 600,
  });

module.exports = {
  // 登录
  "POST /login": async (ctx, next) => {
    ctx.response.body = {
      code: 200,
      msg: "ok",
      data: Mock.mock({
        "id|10000000-99999999": 1,
        name: "@cname",
        token: "@string(200)",
        "avatar|1": "@image(50x50)",
      }),
    };
  },
  // 登出
  "GET /logout": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 获取机构列表
  "GET /company": async (ctx, next) => {
    ctx.response.body = createListRes({
      id: "@increment()",
      company_name: "@ctitle",
      address: "@city(true)",
      "type|1": [0, 1, null],
      "set_meal|1": [0, 1],
      "phone|13000000000-19999999999": 1,
      "user_count|0-999": 1,
      created_time: "@date(yyyy/MM/dd HH:mm:ss)",
      "status|1": [0, 1, 2, 3, 4, 5],
    });
  },
};
