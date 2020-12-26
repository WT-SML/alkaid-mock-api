const Mock = require("mockjs");
const createListRes = (template) =>
  Mock.mock({
    "data|15": [template],
    has_more_page: true,
    per_page: 15,
    total: 600,
  });

module.exports = {
  "GET /": async (ctx, next) => {
    ctx.response.body = "这是芜桐的node_mock服务器，提供mock数据服务";
  },
  // 登录
  "POST /login": async (ctx, next) => {
    ctx.response.body = {
      user: Mock.mock({
        "id|10000-90000": 1,
        name: "@cname",
      }),
    };
  },
  // 登出
  "GET /logout": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 统计图数据
  "GET /adm/data": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      "data|20": [
        {
          "id|+1": 1,
          type: 1,
          "total|200-1000": 1,
          date: "@date",
        },
      ],
    }).data;
  },
  // 用户列表
  "GET /user": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      total: 600,
      per_page: 15,
      "data|15": [
        {
          "id|+1": 1,
          name: "@cname",
          avatar: "https://www.sumoli.com/img/logo_01.91a175d3.png",
          start_at: "@date",
          end_at: "@date",
          "time_count|1-999": 1,
          "watch_video_count|1-999": 1,
          "like_count|1-999": 1,
          "word_collect_count|1-999": 1,
          "status|1": [0, 1],
        },
      ],
    });
  },
  // 修改用户信息
  "PUT /user/:id": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 作者列表
  "GET /user/author": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      total: 600,
      per_page: 15,
      "data|15": [
        {
          "id|+1": 1,
          name: "@cname",
          profile: "@cparagraph",
        },
      ],
    });
  },
  // 添加作者
  "POST /user/author": async (ctx, next) => {
    ctx.response.body = {
      id: 1,
    };
  },
  // 修改用户信息
  "PUT /user/author/:id": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 评论列表
  "GET /comments": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      total: 600,
      per_page: 15,
      "data|15": [
        {
          "id|+1": 1,
          "user_id|+1": 10000,
          user_name: "@cname ",
          content: "@cparagraph",
          create_at: "@date",
        },
      ],
    });
  },
  // 删除评论
  "DELETE /comments/:id": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 邀请列表
  "GET /invite": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      total: 600,
      per_page: 15,
      "data|15": [
        {
          "id|+1": 1,
          create_at: "@date",
          "user_1_id|+1": 10000,
          user_1_name: "@cname ",
          user_1_avatar: "https://www.sumoli.com/img/logo_01.91a175d3.png",
          "user_2_id|+1": 10000,
          user_2_name: "@cname ",
          user_2_avatar: "https://www.sumoli.com/img/logo_01.91a175d3.png",
        },
      ],
    });
  },
  // 视频列表
  "GET /video": async (ctx, next) => {
    ctx.response.body = createListRes({
      "id|+1": 1,
      create_at: "@date",
      cover:
        "https://cdn.jsdelivr.net/gh/wt-sml/wutong_cdn/imgs/other/other_01.jpg",
      title: "@csentence(10,15)",
      "user_id|+1": 10000,
      user_name: "@cname ",
      remark: "@csentence(10,20)",
      src:
        "https://cdn.jsdelivr.net/gh/wt-sml/wutong_cdn/video/bg_room_video.mp4",
    });
  },
  // 删除视频
  "DELETE /video/:id": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 获取视频信息
  "GET /video/:id": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      "id|10000-99999": 1,
      "user_id|10000-99999": 1,
      src:
        "https://cdn.jsdelivr.net/gh/wt-sml/wutong_cdn/video/bg_room_video.mp4",
      title: "@csentence(10,15)",
      sub_title: "@csentence(700,1200)",
      remark: "@csentence(50,100)",
    });
  },
  // 添加视频
  "POST /video": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 添加视频
  "PUT /video/:id": async (ctx, next) => {
    ctx.response.body = {};
  },
};
