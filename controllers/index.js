const Mock = require("mockjs");
const createListRes = (template, hasMorePage = true) =>
  Mock.mock({
    "data|15": [template],
    has_more_page: hasMorePage,
    per_page: 15,
    total: 600,
  });

module.exports = {
  "GET /": async (ctx, next) => {
    ctx.response.body = "这是芜桐的node_mock服务器，提供mock数据服务";
  },
  // 茄子英语后台 START
  // // 登录
  // "POST /login": async (ctx, next) => {
  //   ctx.response.body = {
  //     user: Mock.mock({
  //       "id|10000-90000": 1,
  //       name: "@cname",
  //     }),
  //   };
  // },
  // // 登出
  // "GET /logout": async (ctx, next) => {
  //   ctx.response.body = {};
  // },
  // // 统计图数据
  // "GET /adm/data": async (ctx, next) => {
  //   ctx.response.body = Mock.mock({
  //     "data|20": [
  //       {
  //         "id|+1": 1,
  //         type: 1,
  //         "total|200-1000": 1,
  //         date: "@date",
  //       },
  //     ],
  //   }).data;
  // },
  // // 用户列表
  // "GET /user": async (ctx, next) => {
  //   ctx.response.body = Mock.mock({
  //     total: 600,
  //     per_page: 15,
  //     "data|15": [
  //       {
  //         "id|+1": 1,
  //         name: "@cname",
  //         avatar: "https://www.sumoli.com/img/logo_01.91a175d3.png",
  //         start_at: "@date",
  //         end_at: "@date",
  //         "time_count|1-999": 1,
  //         "watch_video_count|1-999": 1,
  //         "like_count|1-999": 1,
  //         "word_collect_count|1-999": 1,
  //         "status|1": [0, 1],
  //       },
  //     ],
  //   });
  // },
  // // 修改用户信息
  // "PUT /user/:id": async (ctx, next) => {
  //   ctx.response.body = {};
  // },
  // // 作者列表
  // "GET /user/author": async (ctx, next) => {
  //   ctx.response.body = Mock.mock({
  //     total: 600,
  //     per_page: 15,
  //     "data|15": [
  //       {
  //         "id|+1": 1,
  //         name: "@cname",
  //         profile: "@cparagraph",
  //       },
  //     ],
  //   });
  // },
  // // 添加作者
  // "POST /user/author": async (ctx, next) => {
  //   ctx.response.body = {
  //     id: 1,
  //   };
  // },
  // // 修改用户信息
  // "PUT /user/author/:id": async (ctx, next) => {
  //   ctx.response.body = {};
  // },
  // // 评论列表
  // "GET /comments": async (ctx, next) => {
  //   ctx.response.body = Mock.mock({
  //     total: 600,
  //     per_page: 15,
  //     "data|15": [
  //       {
  //         "id|+1": 1,
  //         "user_id|+1": 10000,
  //         user_name: "@cname ",
  //         content: "@cparagraph",
  //         create_at: "@date",
  //       },
  //     ],
  //   });
  // },
  // // 删除评论
  // "DELETE /comments/:id": async (ctx, next) => {
  //   ctx.response.body = {};
  // },
  // // 邀请列表
  // "GET /invite": async (ctx, next) => {
  //   ctx.response.body = Mock.mock({
  //     total: 600,
  //     per_page: 15,
  //     "data|15": [
  //       {
  //         "id|+1": 1,
  //         create_at: "@date",
  //         "user_1_id|+1": 10000,
  //         user_1_name: "@cname ",
  //         user_1_avatar: "https://www.sumoli.com/img/logo_01.91a175d3.png",
  //         "user_2_id|+1": 10000,
  //         user_2_name: "@cname ",
  //         user_2_avatar: "https://www.sumoli.com/img/logo_01.91a175d3.png",
  //       },
  //     ],
  //   });
  // },
  // // 视频列表
  // "GET /video": async (ctx, next) => {
  //   ctx.response.body = createListRes({
  //     "id|+1": 1,
  //     create_at: "@date",
  //     cover:
  //       "https://cdn.jsdelivr.net/gh/wt-sml/wutong_cdn/imgs/other/other_01.jpg",
  //     title: "@csentence(10,15)",
  //     "user_id|+1": 10000,
  //     user_name: "@cname ",
  //     remark: "@csentence(10,20)",
  //     src:
  //       "https://cdn.jsdelivr.net/gh/wt-sml/wutong_cdn/video/bg_room_video.mp4",
  //   });
  // },
  // // 删除视频
  // "DELETE /video/:id": async (ctx, next) => {
  //   ctx.response.body = {};
  // },
  // // 获取视频信息
  // "GET /video/:id": async (ctx, next) => {
  //   ctx.response.body = Mock.mock({
  //     "id|10000-99999": 1,
  //     "user_id|10000-99999": 1,
  //     src:
  //       "https://cdn.jsdelivr.net/gh/wt-sml/wutong_cdn/video/bg_room_video.mp4",
  //     title: "@csentence(10,15)",
  //     sub_title: "@csentence(700,1200)",
  //     remark: "@csentence(50,100)",
  //   });
  // },
  // // 添加视频
  // "POST /video": async (ctx, next) => {
  //   ctx.response.body = {};
  // },
  // // 添加视频
  // "PUT /video/:id": async (ctx, next) => {
  //   ctx.response.body = {};
  // },
  // 茄子英语后台 END

  // 茄子英语小程序
  // 登录
  "POST /login": async (ctx, next) => {
    const { body } = ctx.request;
    ctx.response.body = {
      user: Mock.mock({
        "id|10000-90000": 1,
        name: body.nickName,
        avatar: body.avatarUrl,
        "like_count|0-999": 1,
        "friends_count|0-999": 1,
      }),
    };
  },
  // 视频列表
  "GET /video": async (ctx, next) => {
    const { query } = ctx.request;
    const vidList = [
      "x0035pjtcv2",
      "u00353ouh7q",
      "o00351qqnqs",
      "p00357pvnm6",
      "w0035iwyxlc",
      "y00351ckoif",
      "t00353ns34i",
      "c0035sq0fct",
      "m32181yfqeu",
      "m32181yfqeu",
      "o0035logckq",
      "q0035rmewf0",
      "v0035ejcu9p",
      "p3218krfrpr",
      "s0035u4a6yk",
      "d3218ycf2r9",
      "m3218muogq2",
      "g3218mexawt",
      "i0035miei9s",
      "f0035lsrwwk",
      "o3218btcrnw",
      "c3218qxxccu",
      "j3217yl6mfn",
      "y3218c54rgh",
      "s3218483c5g",
      "b321844n8ld",
      "t3218dpfjtp",
      "w32184gus9o",
      "s3218sztwfm",
      "l0035utu842",
    ];
    const page = parseInt(query.page) || 1;
    ctx.response.body = createListRes(
      {
        "id|+1": (page - 1) * 15 + 1,
        "vid|1": vidList,
        "share_count|0-999": 1,
        "like_count|0-999": 1,
        "comments_count|0-999": 1,
        "like|1": [0, 1],
        "collect_id|10000-99999": 1,
        title: "@csentence(10,15)",
      },
      page > 2 ? false : true
    );
  },
  // 收藏视频
  "POST /video/:id/collect": async (ctx, next) => {
    ctx.response.body = {
      id: 1,
    };
  },
  // 取消收藏视频
  "DELETE /video/:video_id/collect/:collect_id": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 评论列表
  "GET /video/:id/comments": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      "data|20": [
        {
          "id|+1": 1,
          "user_id|10000-99999": 1,
          user_name: "@cname",
          user_avatar: "@image('50x50')",
          create_at: "@datetime('2020-MM-dd HH:mm:ss')",
          "like_count|0-999": 1,
          "like|1": [0, 1],
          "collect_id|10000-99999": 1,
          content: "@cparagraph(1, 3)",
          replay_list: Mock.mock({
            "data|2": [
              {
                "id|+1": 1,
                "user_id|10000-99999": 1,
                user_name: "@cname",
                user_avatar: "@image('50x50')",
                create_at: "@datetime('2020-12-dd HH:mm:ss')",
                content: "@cparagraph(1, 3)",
                "replay_user_id|10000-99999": 1,
                replay_user_name: "@cname",
                replay_user_avatar: "@image('50x50')",
              },
            ],
          }).data,
        },
      ],
    });
  },
  // 收藏评论
  "POST /comments/:id/collect": async (ctx, next) => {
    ctx.response.body = {
      id: 1,
    };
  },
  // 取消收藏评论
  "DELETE /comments/:comment_id/collect/:collect_id": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 发表评论
  "POST /comments": async (ctx, next) => {
    ctx.response.body = {
      id: 1,
    };
  },
  // 获取视频字幕
  "GET /video/:id/sub": async (ctx, next) => {
    ctx.response.body = {
      data: [
        {
          time_s: 0,
          en: "This is the 0 second subtitle of the test",
          ch: "这是测试第0秒的字幕",
        },
        {
          time_s: 2,
          en: "This is the second subtitle of the test",
          ch: "这是测试第2秒的字幕",
        },
        {
          time_s: 4,
          en: "This is the subtitle in the fourth second of the test",
          ch: "这是测试第4秒的字幕",
        },
        {
          time_s: 6,
          en: "This is the subtitle at 6 seconds of the test",
          ch: "这是测试第6秒的字幕",
        },
        {
          time_s: 8,
          en: "This is the 8 second subtitle of the test",
          ch: "这是测试第8秒的字幕",
        },
        {
          time_s: 10,
          en: "This is the 10 second subtitle of the test",
          ch: "这是测试第10秒的字幕",
        },
        {
          time_s: 15,
          en:
            "This is a test of the 10-second subtitle. This is a test of the 15-second subtitle. The subtitle is longer than normal subtitles",
          ch:
            "这是测试第15秒的字幕,这个字幕比一般的字幕都要长一些，测试一下长字幕多几行之后的效果",
        },
      ],
    };
  },
  // 我赞过的视频列表
  "GET /video/like": async (ctx, next) => {
    const { query } = ctx.request;
    const vidList = [
      "x0035pjtcv2",
      "u00353ouh7q",
      "o00351qqnqs",
      "p00357pvnm6",
      "w0035iwyxlc",
      "y00351ckoif",
      "t00353ns34i",
      "c0035sq0fct",
      "m32181yfqeu",
      "m32181yfqeu",
      "o0035logckq",
      "q0035rmewf0",
      "v0035ejcu9p",
      "p3218krfrpr",
      "s0035u4a6yk",
      "d3218ycf2r9",
      "m3218muogq2",
      "g3218mexawt",
      "i0035miei9s",
      "f0035lsrwwk",
      "o3218btcrnw",
      "c3218qxxccu",
      "j3217yl6mfn",
      "y3218c54rgh",
      "s3218483c5g",
      "b321844n8ld",
      "t3218dpfjtp",
      "w32184gus9o",
      "s3218sztwfm",
      "l0035utu842",
    ];
    const page = parseInt(query.page) || 1;
    ctx.response.body = createListRes(
      {
        "id|+1": (page - 1) * 15 + 1,
        "vid|1": vidList,
        "share_count|0-999": 1,
        "like_count|0-999": 1,
        "comments_count|0-999": 1,
        like: 1,
        "collect_id|10000-99999": 1,
        title: "@csentence(10,15)",
      },
      page > 2 ? false : true
    );
  },
  // 接受好友邀请
  "POST /user/invite/:id": async (ctx, next) => {
    ctx.response.body = {
      id: 1,
    };
  },
  // 获取好友列表
  "GET /user/friends": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      "data|5": [
        {
          "id|10000-99999": 1,
          name: "@cname",
          avatar: "@image('50x50')",
          "mastered_count|0-9999": 1,
        },
      ],
    });
  },
  // 获取单词收藏信息
  "GET /word/:word/collect": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      "id|1": [1, null],
    });
  },
  // 收藏单词
  "POST /word/:word/collect": async (ctx, next) => {
    ctx.response.body = {
      id: 1,
    };
  },
  // 取消收藏单词
  "DELETE /word/:word/collect": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 获取单词翻译信息
  "GET /word/:word/trans": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      _id: ctx.params.word,
      symbols: {
        ph_am: "helθker",
        ph_en: "'helθkeə",
        ph_am_mp3:
          "http://res.iciba.com/resource/amp3/1/0/85/12/8512ae7d57b1396273f76fe6ed341a23.mp3",
        ph_en_mp3:
          "http://res.iciba.com/resource/amp3/oxford/0/bc/29/bc29d509d7e41cbfab2fea7b15f60c67.mp3",
        "parts|3": [
          {
            "part|1": ["n.", "v.", "vt.", "adj."],
            means: ["@cword(2, 6)", "@cword(2, 6)", "@cword(2, 6)"],
          },
        ],
      },
    });
  },
  // 获取用户生词本信息
  "GET /voc/user/:id": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      user_id: ctx.params.id,
      "latest_word_id|1-99999": 1,
      "latest_un_word_id|1-99999": 1,
      "unknown_count|1-9999": 1,
      "mastered_count|1-9999": 1,
    });
  },
  // 修改用户生词本信息
  "PUT /voc/user/:id": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 获取用户生词本单词列表
  "GET /user/:id/voc": async (ctx, next) => {
    const { query } = ctx.request;
    const page = parseInt(query.page) || 1;
    ctx.response.body = createListRes(
      {
        "id|+1": (page - 1) * 15 + 1,
        word: "@word",
      },
      page > 2 ? false : true
    );
  },
  // 获取一组需要学习的单词
  "GET /voc/user/:id/study/start": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      "data|10": [
        {
          "id|+1": 1,
          word: "@word",
          internet: {
            acceptation: "@csentence(10, 15)",
            key: "@word",
            "pos|1": ["n.", "v.", "vt.", "adj."],
            pron: [
              "http://res.iciba.com/resource/amp3/0/0/30/42/3042b39cba46e3d7b638b6dbcef46eb9.mp3",
              "http://res-tts.iciba.com/3/0/4/3042b39cba46e3d7b638b6dbcef46eb9.mp3",
            ],
            ps: ["fi:əkrəʊməsaɪ'təʊmə", "ˌfioʊˌkroʊmoʊsaɪ'toʊmə"],
            "sent|5": [
              {
                orig: "@sentence(20, 30)",
                trans: "@csentence(20, 30)",
              },
            ],
          },
        },
      ],
    });
  },
  // 修改单词掌握状态
  "PUT /voc/word": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 茄子英语小程序 END
};
