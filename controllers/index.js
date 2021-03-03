const Mock = require("mockjs");
const createListRes = (template, hasMorePage = true) =>
  Mock.mock({
    "data|16": [template],
    has_more_page: hasMorePage,
    per_page: 16,
    total: 600,
  });

const avatarList = [
  "https://p1-xg.byteimg.com/img/mosaic-legacy/6eed00027350748f283d~tplv-xg-center-qs:240:240:q75.webp",
  "https://p3-xg.byteimg.com/img/mosaic-legacy/ffc300006a17d66d7811~tplv-xg-center-qs:88:88:q75.webp",
  "https://p6-xg.byteimg.com/img/pgc-image/2143ecd79ba54486848165b03c21e99b~tplv-xg-center-qs:88:88:q75.webp",
  "https://p3-xg.byteimg.com/img/mosaic-legacy/4af000058e536a33006e~tplv-xg-center-qs:88:88:q75.webp",
  "https://p1-xg.byteimg.com/img/user-avatar/78af5403972508126f142e145c3a4508~tplv-xg-center-qs:88:88:q75.webp",
  "https://p9-xg.byteimg.com/img/user-avatar/13dfbeceac6253acaa65b6e12e68b6f7~tplv-xg-center-qs:88:88:q75.webp",
  "https://p3-xg.byteimg.com/img/mosaic-legacy/b722000319388a65fde5~tplv-xg-center-qs:88:88:q75.webp",
  "https://p3-xg.byteimg.com/img/mosaic-legacy/ff3e0000fa0d27d3a85a~tplv-xg-center-qs:88:88:q75.webp",
  "https://p3-xg.byteimg.com/img/pgc-image/e5a45fbebbeb416093d705487e214cce~tplv-xg-center-qs:88:88:q75.webp",
  "https://p6-xg.byteimg.com/img/pgc-image/e9fda14107724760b47776883a567882~tplv-xg-center-qs:88:88:q75.webp",
  "https://p3-xg.byteimg.com/img/pgc-image/5ef05eaeafad4500a380c098223c3d61~tplv-xg-center-qs:88:88:q75.webp",
  "https://p6-xg.byteimg.com/img/pgc-image/ea932eb5ff1d48fd985af60baf38a54f~tplv-xg-center-qs:88:88:q75.webp",
  "https://p3-xg.byteimg.com/img/user-avatar/b465aefc2f00ffefa7d1f643875a4b59~tplv-xg-center-qs:88:88:q75.webp",
  "https://p9-xg.byteimg.com/img/pgc-image/8af0a2880887469da5c2ee583b7ddc5c~tplv-xg-center-qs:88:88:q75.webp",
  "https://p3-xg.byteimg.com/img/pgc-image/afac7ae5a11f402ba086511a595c2f6a~tplv-xg-center-qs:88:88:q75.webp",
  "https://p9-xg.byteimg.com/img/pgc-image/f42360e7e146437a9255bbcb1770befc~tplv-xg-center-qs:88:88:q75.webp",
  "https://p6-xg.byteimg.com/img/mosaic-legacy/6ee900022f6451ca01eb~tplv-xg-center-qs:88:88:q75.webp",
  "https://p1-xg.byteimg.com/img/pgc-image/b26b1bb10e29496c9a78335aa452f9b0~tplv-xg-center-qs:88:88:q75.webp",
  "https://p6-xg.byteimg.com/img/mosaic-legacy/18a20010237e06bc9622~tplv-xg-center-qs:88:88:q75.webp",
  "https://p1-xg.byteimg.com/img/pgc-image/8fd2999cb97542e18be44b59d545c0d4~tplv-xg-center-qs:88:88:q75.webp",
];

const coverList = [
  "https://p1-xg.byteimg.com/img/tos-cn-i-0004/e017174e2ce64553bc0b3303076c3690~tplv-xg-center-qs:840:470:q75.webp",
  "https://p6-xg.byteimg.com/img/mosaic-legacy/1a84500108b9da2e355e6~tplv-xg-center-qs:840:470:q75.webp",
  "https://p3-xg.byteimg.com/img/tos-cn-i-0004/5191df69bafe4c209da729514b5abf01~tplv-xg-center-qs:840:470:q75.webp",
  "https://p1-xg.byteimg.com/img/pgc-image/154062609901020f94fe3f4~tplv-xg-center-qs:840:470:q75.webp",
  "https://p6-xg.byteimg.com/img/tos-cn-i-0004/54102ed9e0634e28bbf605aacd2b3066~tplv-xg-center-qs:840:470:q75.webp",
  "https://p1-xg.byteimg.com/img/pgc-image/15360197509631ec874b640~tplv-xg-center-qs:840:470:q75.webp",
  "https://p6-xg.byteimg.com/img/tos-cn-i-0004/58bd431e33f947caa2140b74922f020b~tplv-xg-center-qs:840:470:q75.webp",
  "https://p6-xg.byteimg.com/img/tos-cn-i-0000/4eb2931bfd1944cc8de968a907b0a3bf~tplv-xg-center-qs:840:470:q75.webp",
  "https://p6-xg.byteimg.com/img/tos-cn-i-0004/8ac6863f03f44c79aea2d590516c1c42~tplv-xg-center-qs:840:470:q75.webp",
  "https://p3-xg.byteimg.com/img/tos-cn-i-0004/b2dd76e8e8a346288f0a073345209815~tplv-xg-center-qs:840:470:q75.webp",
  "https://p3-xg.byteimg.com/img/tos-cn-i-0004/b0ba936c39ea49d68f009bce507b4aea~tplv-xg-center-qs:840:470:q75.webp",
  "https://p3-xg.byteimg.com/img/tos-cn-i-0004/0ea9fcd986944c50bce94b6b09dcf94e~tplv-xg-center-qs:840:470:q75.webp",
  "https://p3-xg.byteimg.com/img/mosaic-legacy/dfc30003291eee52fb1a~tplv-xg-center-qs:840:470:q75.webp",
  "https://p3-xg.byteimg.com/img/tos-cn-i-0004/122dd388e0cd449e9c29492565902ba9~tplv-xg-center-qs:840:470:q75.webp",
  "https://p9-xg.byteimg.com/img/tos-cn-i-0004/b6ff1bf054414222b170ec0c027699e7~tplv-xg-center-qs:840:470:q75.webp",
  "https://p9-xg.byteimg.com/img/tos-cn-i-0004/1b7454aff3724bee8c7f047659ec8fb3~tplv-xg-center-qs:840:470:q75.webp",
  "https://p9-xg.byteimg.com/img/tos-cn-i-0004/d3a6ca8963df4d559459b7c7505fc9c7~tplv-xg-center-qs:840:470:q75.webp",
  "https://p6-xg.byteimg.com/img/pgc-image/2a1d24014eb844f895bd9751aac0d5b2~tplv-xg-center-qs:840:470:q75.webp",
  "https://p3-xg.byteimg.com/img/tos-cn-i-0004/169d8618490548ec9eacf98297f7761e~tplv-xg-center-qs:840:470:q75.webp",
  "https://p3-xg.byteimg.com/img/tos-cn-i-0004/f480776300564c8cb382e41fd5ba1d4e~tplv-xg-center-qs:840:470:q75.webp",
  "https://p3-xg.byteimg.com/img/tos-cn-i-0000/f3cec2a24c104673b3e8cf770051a0ae~tplv-xg-center-qs:840:470:q75.webp",
  "https://p9-xg.byteimg.com/img/tos-cn-i-0004/66b40797652e40388fbd5300d0a88bb7~tplv-xg-center-qs:840:470:q75.webp",
  "https://p1-xg.byteimg.com/img/tos-cn-i-0000/1524fcbdc57d4eb4a3026d4561082960~tplv-xg-center-qs:840:470:q75.webp",
  "https://p1-xg.byteimg.com/img/tos-cn-i-0004/122b060e74f646eaa61db804d5311108~tplv-xg-center-qs:840:470:q75.webp",
  "https://p9-xg.byteimg.com/img/tos-cn-i-0004/dd2d0a29490e4ea3bd14c502a91e1d93~tplv-xg-center-qs:840:470:q75.webp",
  "https://p1-xg.byteimg.com/img/tos-cn-i-0004/76f797d0ca754bc784eb9abec7560d64~tplv-xg-center-qs:840:470:q75.webp",
  "https://p3-xg.byteimg.com/img/tos-cn-i-0004/bceefe36123a4d7bab179f09f68ddc3a~tplv-xg-center-qs:840:470:q75.webp",
  "https://p3-xg.byteimg.com/img/tos-cn-i-0004/efd83bf4ca9f409389aba8bce744143a~tplv-xg-center-qs:840:470:q75.webp",
  "https://p3-xg.byteimg.com/img/tos-cn-p-0026/f4c80745902c28b59ebb49a47c85b3f9~tplv-xg-center-qs:840:470:q75.webp",
  "https://p6-xg.byteimg.com/img/tos-cn-i-0004/3d7bacf590c34445bab35ccdf8467d12~tplv-xg-center-qs:840:470:q75.webp",
  "https://p3-xg.byteimg.com/img/tos-cn-i-0004/27a22186206d44e7b73810ea1325726a~tplv-xg-center-qs:840:470:q75.webp",
  "https://p9-xg.byteimg.com/img/tos-cn-i-0004/c6d6960fc0b14e16b455f335fde480c3~tplv-xg-center-qs:840:470:q75.webp",
  "https://p6-xg.byteimg.com/img/tos-cn-i-0004/c03d0d49d62b44dca44b16def6b993bf~tplv-xg-center-qs:840:470:q75.webp",
  "https://p6-xg.byteimg.com/img/tos-cn-i-0004/fb7cc8a513204cfcb299dd5d405288b2~tplv-xg-center-qs:840:470:q75.webp",
  "https://p3-xg.byteimg.com/img/tos-cn-i-0004/8fe13c6d9e014f8691c77df9d8e26d0a~tplv-xg-center-qs:840:470:q75.webp",
  "https://p3-xg.byteimg.com/img/tos-cn-i-0000/b08b43b6a87c45aeab7c8af6636dbf39~tplv-xg-center-qs:840:470:q75.webp",
  "https://p1-xg.byteimg.com/img/tos-cn-i-0004/61b612f2869349d6892e81fdba8093f8~tplv-xg-center-qs:840:470:q75.webp",
  "https://p9-xg.byteimg.com/img/tos-cn-i-0004/c439da64b4ed4b738216c2c3f6344d83~tplv-xg-center-qs:840:470:q75.webp",
  "https://p6-xg.byteimg.com/img/tos-cn-i-0004/3baaa863dc0e4e07905b31e54d5325ab~tplv-xg-center-qs:840:470:q75.webp",
];

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
module.exports = {
  "GET /": async (ctx, next) => {
    ctx.response.body = "这是芜桐的node_mock服务器，提供mock数据服务";
  },
  // 茄子英语后台 START
  // 登录
  "POST /login": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      "id|10000-90000": 1,
      name: "@cname",
      "avatar|1": avatarList,
    });
  },
  // 登出
  "GET /logout": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 获取地区数据
  "GET /region": async (ctx, next) => {
    ctx.response.body = {
      region: 0,
    };
  },
  // 获取视频列表
  "GET /video": async (ctx, next) => {
    ctx.response.body = createListRes({
      "id|+1": 1,
      "vid|1": vidList,
      title: "@csentence(20,50)",
      "cover|1": coverList,
      "user_id|10000-90000": 1,
      user_name: "@cname",
      "user_avatar|1": avatarList,
      "play_count|1-9999": 1,
      "create_at|1-12": 1,
    });
  },
  // 获取视频信息
  "GET /video/:id": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      "id|1-99999": 1,
      "vid|1": vidList,
      title: "@csentence(20,50)",
      "cover|1": coverList,
      "user_id|10000-90000": 1,
      user_name: "@cname",
      "user_avatar|1": avatarList,
      "play_count|1-9999": 1,
      "create_at|1-12": 1,
    });
  },
  // 统计数据
  "GET /platform/statistics": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      "total_fans|2000-10000": 1,
      "total_amount_of_play|2000-10000": 1,
      "cumulative_rewards|2000-10000": 1,
    });
  },
  // 统计数据详细
  "GET /platform/statistics/detail": async (ctx, next) => {
    ctx.response.body = Mock.mock({
      total: 600,
      per_page: 15,
      "data|15": [
        {
          "id|+1": 1,
          created_at: "@date",
          "number_of_new_followers|1-999": 1,
          "amount_of_play|1-999": 1,
          "remark|1": ["提现", "播放奖励"],
          "amount_of_bonus|1-999": 1,
          "balance|1-999": 1,
        },
      ],
    });
  },
  // 用户列表
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
  // 修改用户信息
  // "PUT /user/:id": async (ctx, next) => {
  //   ctx.response.body = {};
  // },
  // 作者列表
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
  // 添加作者
  // "POST /user/author": async (ctx, next) => {
  //   ctx.response.body = {
  //     id: 1,
  //   };
  // },
  // 修改用户信息
  // "PUT /user/author/:id": async (ctx, next) => {
  //   ctx.response.body = {};
  // },
  // 评论列表
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
  // 删除评论
  // "DELETE /comments/:id": async (ctx, next) => {
  //   ctx.response.body = {};
  // },
  // 邀请列表
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
  // 视频列表
  "GET /platform/video": async (ctx, next) => {
    if (ctx.request.query.link) {
      ctx.response.body = {
        data: [],
      };
      return false;
    }
    ctx.response.body = createListRes({
      "id|+1": 1,
      "order|1-9999": 1,
      link: "y3227ws5iuu",
      created_at: "@date",
      title: "@csentence(10,15)",
      "suit|0-15": 1,
      "share_count|1-9999": 1,
      "collect_count|1-9999": 1,
      "play_count|1-9999": 1,
      "play_full_count|1-9999": 1,
      remark: "@csentence(10,20)",
    });
    // }, 3000);
  },
  // 删除视频
  "DELETE /platform/video/:id": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 获取视频信息
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
  // 添加视频
  "POST /platform/video": async (ctx, next) => {
    ctx.response.body = {
      id: 1,
    };
  },
  // 编辑视频
  "PUT /platform/video/:id": async (ctx, next) => {
    ctx.response.body = {};
  },
  // 获取视频字幕
  "GET /platform/video/:id/subtitle": async (ctx, next) => {
    ctx.response.body = {
      data: [
        {
          t: 0,
          e: "This is the 0 second subtitle of the test",
          c: "这是测试第0秒的字幕",
        },
        {
          t: 2,
          e: "This is the second subtitle of the test",
          c: "这是测试第2秒的字幕",
        },
        {
          t: 4,
          e: "This is the subtitle in the fourth second of the test",
          c: "这是测试第4秒的字幕",
        },
        {
          t: 6,
          e: "This is the subtitle at 6 seconds of the test",
          c: "这是测试第6秒的字幕",
        },
        {
          t: 8,
          e: "This is the 8 second subtitle of the test",
          c: "这是测试第8秒的字幕",
        },
        {
          t: 10,
          e: "This is the 10 second subtitle of the test",
          c: "这是测试第10秒的字幕",
        },
        {
          t: 15,
          e:
            "This is a test of the 10-second subtitle. This is a test of the 15-second subtitle. The subtitle is longer than normal subtitles",
          c:
            "这是测试第15秒的字幕,这个字幕比一般的字幕都要长一些，测试一下长字幕多几行之后的效果",
        },
      ],
    };
  },
  "POST /platform/video/subtitle": async (ctx, next) => {
    ctx.response.body = {};
  },

  // 茄子英语后台 END

  // 茄子英语小程序
  // 登录
  // "POST /login": async (ctx, next) => {
  //   const { body } = ctx.request;
  //   ctx.response.body = {
  //     user: Mock.mock({
  //       "id|10000-90000": 1,
  //       name: "@cname",
  //       avatar: "@image('50x50')",
  //     }),
  //   };
  // },
  // // 视频列表
  // "GET /video": async (ctx, next) => {
  //   const { query } = ctx.request;
  //   const vidList = [
  //     "x0035pjtcv2",
  //     "u00353ouh7q",
  //     "o00351qqnqs",
  //     "p00357pvnm6",
  //     "w0035iwyxlc",
  //     "y00351ckoif",
  //     "t00353ns34i",
  //     "c0035sq0fct",
  //     "m32181yfqeu",
  //     "m32181yfqeu",
  //     "o0035logckq",
  //     "q0035rmewf0",
  //     "v0035ejcu9p",
  //     "p3218krfrpr",
  //     "s0035u4a6yk",
  //     "d3218ycf2r9",
  //     "m3218muogq2",
  //     "g3218mexawt",
  //     "i0035miei9s",
  //     "f0035lsrwwk",
  //     "o3218btcrnw",
  //     "c3218qxxccu",
  //     "j3217yl6mfn",
  //     "y3218c54rgh",
  //     "s3218483c5g",
  //     "b321844n8ld",
  //     "t3218dpfjtp",
  //     "w32184gus9o",
  //     "s3218sztwfm",
  //     "l0035utu842",
  //   ];
  //   const page = parseInt(query.page) || 1;
  //   ctx.response.body = createListRes(
  //     {
  //       "id|+1": (page - 1) * 15 + 1,
  //       "vid|1": vidList,
  //       "share_count|0-999": 1,
  //       "like_count|0-999": 1,
  //       "comments_count|0-999": 1,
  //       "like|1": [0, 1],
  //       "collect_id|10000-99999": 1,
  //       title: "@csentence(10,15)",
  //     },
  //     page > 2 ? false : true
  //   );
  // },
  // // 收藏视频
  // "POST /video/:id/collect": async (ctx, next) => {
  //   ctx.response.body = {
  //     id: 1,
  //   };
  // },
  // // 取消收藏视频
  // "DELETE /video/:video_id/collect/:collect_id": async (ctx, next) => {
  //   ctx.response.body = {};
  // },
  // // 评论列表
  // "GET /video/:id/comments": async (ctx, next) => {
  //   ctx.response.body = Mock.mock({
  //     "data|20": [
  //       {
  //         "id|+1": 1,
  //         "user_id|10000-99999": 1,
  //         user_name: "@cname",
  //         user_avatar: "@image('50x50')",
  //         create_at: "@datetime('2020-MM-dd HH:mm:ss')",
  //         "like_count|0-999": 1,
  //         "like|1": [0, 1],
  //         "collect_id|10000-99999": 1,
  //         content: "@cparagraph(1, 3)",
  //         replay_list: Mock.mock({
  //           "data|2": [
  //             {
  //               "id|+1": 1,
  //               "user_id|10000-99999": 1,
  //               user_name: "@cname",
  //               user_avatar: "@image('50x50')",
  //               create_at: "@datetime('2020-12-dd HH:mm:ss')",
  //               content: "@cparagraph(1, 3)",
  //               "replay_user_id|10000-99999": 1,
  //               replay_user_name: "@cname",
  //               replay_user_avatar: "@image('50x50')",
  //             },
  //           ],
  //         }).data,
  //       },
  //     ],
  //   });
  // },
  // // 收藏评论
  // "POST /comments/:id/collect": async (ctx, next) => {
  //   ctx.response.body = {
  //     id: 1,
  //   };
  // },
  // // 取消收藏评论
  // "DELETE /comments/:comment_id/collect/:collect_id": async (ctx, next) => {
  //   ctx.response.body = {};
  // },
  // // 发表评论
  // "POST /comments": async (ctx, next) => {
  //   ctx.response.body = {
  //     id: 1,
  //   };
  // },
  // // 获取视频字幕
  // "GET /video/:id/sub": async (ctx, next) => {
  //   ctx.response.body = {
  //     data: [
  //       {
  //         time_s: 0,
  //         en: "This is the 0 second subtitle of the test",
  //         ch: "这是测试第0秒的字幕",
  //       },
  //       {
  //         time_s: 2,
  //         en: "This is the second subtitle of the test",
  //         ch: "这是测试第2秒的字幕",
  //       },
  //       {
  //         time_s: 4,
  //         en: "This is the subtitle in the fourth second of the test",
  //         ch: "这是测试第4秒的字幕",
  //       },
  //       {
  //         time_s: 6,
  //         en: "This is the subtitle at 6 seconds of the test",
  //         ch: "这是测试第6秒的字幕",
  //       },
  //       {
  //         time_s: 8,
  //         en: "This is the 8 second subtitle of the test",
  //         ch: "这是测试第8秒的字幕",
  //       },
  //       {
  //         time_s: 10,
  //         en: "This is the 10 second subtitle of the test",
  //         ch: "这是测试第10秒的字幕",
  //       },
  //       {
  //         time_s: 15,
  //         en:
  //           "This is a test of the 10-second subtitle. This is a test of the 15-second subtitle. The subtitle is longer than normal subtitles",
  //         ch:
  //           "这是测试第15秒的字幕,这个字幕比一般的字幕都要长一些，测试一下长字幕多几行之后的效果",
  //       },
  //     ],
  //   };
  // },
  // // 我赞过的视频列表
  // "GET /video/like": async (ctx, next) => {
  //   const { query } = ctx.request;
  //   const vidList = [
  //     "x0035pjtcv2",
  //     "u00353ouh7q",
  //     "o00351qqnqs",
  //     "p00357pvnm6",
  //     "w0035iwyxlc",
  //     "y00351ckoif",
  //     "t00353ns34i",
  //     "c0035sq0fct",
  //     "m32181yfqeu",
  //     "m32181yfqeu",
  //     "o0035logckq",
  //     "q0035rmewf0",
  //     "v0035ejcu9p",
  //     "p3218krfrpr",
  //     "s0035u4a6yk",
  //     "d3218ycf2r9",
  //     "m3218muogq2",
  //     "g3218mexawt",
  //     "i0035miei9s",
  //     "f0035lsrwwk",
  //     "o3218btcrnw",
  //     "c3218qxxccu",
  //     "j3217yl6mfn",
  //     "y3218c54rgh",
  //     "s3218483c5g",
  //     "b321844n8ld",
  //     "t3218dpfjtp",
  //     "w32184gus9o",
  //     "s3218sztwfm",
  //     "l0035utu842",
  //   ];
  //   const page = parseInt(query.page) || 1;
  //   ctx.response.body = createListRes(
  //     {
  //       "id|+1": (page - 1) * 15 + 1,
  //       "vid|1": vidList,
  //       "share_count|0-999": 1,
  //       "like_count|0-999": 1,
  //       "comments_count|0-999": 1,
  //       like: 1,
  //       "collect_id|10000-99999": 1,
  //       title: "@csentence(10,15)",
  //     },
  //     page > 2 ? false : true
  //   );
  // },
  // // 接受好友邀请
  // "POST /user/invite/:id": async (ctx, next) => {
  //   ctx.response.body = {
  //     id: 1,
  //   };
  // },
  // // 获取好友列表
  // "GET /user/friends": async (ctx, next) => {
  //   ctx.response.body = Mock.mock({
  //     "data|5": [
  //       {
  //         "id|10000-99999": 1,
  //         name: "@cname",
  //         avatar: "@image('50x50')",
  //         "mastered_count|0-9999": 1,
  //       },
  //     ],
  //   });
  // },
  // // 获取单词收藏信息
  // "GET /word/:word/collect": async (ctx, next) => {
  //   ctx.response.body = Mock.mock({
  //     "id|1": [1, null],
  //   });
  // },
  // // 收藏单词
  // "POST /word/:word/collect": async (ctx, next) => {
  //   ctx.response.body = {
  //     id: 1,
  //   };
  // },
  // // 取消收藏单词
  // "DELETE /word/:word/collect": async (ctx, next) => {
  //   ctx.response.body = {};
  // },
  // // 获取单词翻译信息
  // "GET /word/:word/trans": async (ctx, next) => {
  //   ctx.response.body = Mock.mock({
  //     _id: ctx.params.word,
  //     symbols: {
  //       ph_am: "helθker",
  //       ph_en: "'helθkeə",
  //       ph_am_mp3:
  //         "http://res.iciba.com/resource/amp3/1/0/85/12/8512ae7d57b1396273f76fe6ed341a23.mp3",
  //       ph_en_mp3:
  //         "http://res.iciba.com/resource/amp3/oxford/0/bc/29/bc29d509d7e41cbfab2fea7b15f60c67.mp3",
  //       "parts|3": [
  //         {
  //           "part|1": ["n.", "v.", "vt.", "adj."],
  //           means: ["@cword(2, 6)", "@cword(2, 6)", "@cword(2, 6)"],
  //         },
  //       ],
  //     },
  //   });
  // },
  // // 获取用户生词本信息
  // "GET /voc/user/:id": async (ctx, next) => {
  //   ctx.response.body = Mock.mock({
  //     user_id: ctx.params.id,
  //     "latest_word_id|1-99999": 1,
  //     "latest_un_word_id|1-99999": 1,
  //     "unknown_count|1-9999": 1,
  //     "mastered_count|1-9999": 1,
  //   });
  // },
  // // 修改用户生词本信息
  // "PUT /voc/user/:id": async (ctx, next) => {
  //   ctx.response.body = {};
  // },
  // // 获取用户生词本单词列表
  // "GET /user/:id/voc": async (ctx, next) => {
  //   const { query } = ctx.request;
  //   const page = parseInt(query.page) || 1;
  //   ctx.response.body = createListRes(
  //     {
  //       "id|+1": (page - 1) * 15 + 1,
  //       word: "@word",
  //     },
  //     page > 2 ? false : true
  //   );
  // },
  // // 获取一组需要学习的单词
  // "GET /voc/user/:id/study/start": async (ctx, next) => {
  //   ctx.response.body = Mock.mock({
  //     "data|10": [
  //       {
  //         "id|+1": 1,
  //         word: "@word",
  //         internet: {
  //           acceptation: "@csentence(10, 15)",
  //           key: "@word",
  //           "pos|1": ["n.", "v.", "vt.", "adj."],
  //           pron: [
  //             "http://res.iciba.com/resource/amp3/0/0/30/42/3042b39cba46e3d7b638b6dbcef46eb9.mp3",
  //             "http://res-tts.iciba.com/3/0/4/3042b39cba46e3d7b638b6dbcef46eb9.mp3",
  //           ],
  //           ps: ["fi:əkrəʊməsaɪ'təʊmə", "ˌfioʊˌkroʊmoʊsaɪ'toʊmə"],
  //           "sent|5": [
  //             {
  //               orig: "@sentence(20, 30)",
  //               trans: "@csentence(20, 30)",
  //             },
  //           ],
  //         },
  //       },
  //     ],
  //   });
  // },
  // // 修改单词掌握状态
  // "PUT /voc/word": async (ctx, next) => {
  //   ctx.response.body = {};
  // },
  // 茄子英语小程序 END
};
