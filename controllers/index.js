const Mock = require("mockjs");
const createListRes = (template, next = true) =>
  Mock.mock({
    "data|10": [template],
    next,
    per_page: 16,
    total: 600,
  });

const gameList = require("../assets/js/game_list.js");

module.exports = {
  "GET /": async (ctx, next) => {
    ctx.response.body = "这是芜桐的node_mock服务器，提供mock数据服务";
  },
  // 登录
  "POST /login": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      "id|10000000-99999999": 1,
      name: "@cname",
      "avatar|1": "@image(50x50)",
    });
  },
  // 登出
  "GET /logout": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 游戏
  "GET /games": async (ctx, next) => {
    ctx.response.body = gameList;
  },
};
