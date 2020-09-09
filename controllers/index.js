const Mock = require('mockjs')
const createListRes = (template) => Mock.mock({
  current_page: 1,
  'data|15': [template],
  has_more_page: true,
  per_page: 15,
  total: 75
})

module.exports = {
  'GET /': async (ctx, next) => {
    ctx.response.body = '这是芜桐的node_mock服务器，提供mock数据服务'
  },
  /** 
   * 获取adm规培列表
   */
  'GET /yxhk/adm/training': async (ctx, next) => {
    ctx.response.body = createListRes({
      'id|+1': 1,
      'hospital|1': ['四川大学华西第二医院', '山东省齐鲁医院', '单县中心医院'],
      'create_at': '@date("yyyy-MM-dd")',
      'province|1': [11, 12, 13, 14, 15, 21, 22, 23, 31, 32, 33, 34, 35, 36, 37],
      'type': [0, 1],
      'status|1': [0, 1],
      'sign_up_start': '@date("yyyy-MM-dd")',
      'sign_up_end': '@date("yyyy-MM-dd")',
      'base_salary|900-5000': 1,
      'url': 'https://cn.vuejs.org/v2/guide/',
      'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598875539380&di=a5e2695e3be708b283fa87bb6418d8fd&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb21c8701a18b87d6993fcf52010828381f30fd7a.jpg',
      'desc|1-3': '我是一个简介',
    })
  },
  /** 
   * 更新adm规培
   */
  'PUT /yxhk/adm/training/:id': async (ctx, next) => {
    ctx.response.body = {
      id: ctx.params.id
    }
  },
  /** 
   * 添加adm规培
   */
  'POST /yxhk/adm/training': async (ctx, next) => {
    ctx.response.body = {
      msg: 'ok'
    }
  },
  /** 
   * 获取adm规培评论列表
   */
  'GET /yxhk/adm/training/cmts': async (ctx, next) => {
    ctx.response.body = createListRes({
      'id|+1': 1,
      'user': {
        'id|+1': 10000,
        'name': '@cname',
      },
      'create_at': '@date("yyyy-MM-dd")',
      'cmt|5-10': '测试评论',
      'status|1': [0, 1],
      'image1': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598875539380&di=a5e2695e3be708b283fa87bb6418d8fd&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb21c8701a18b87d6993fcf52010828381f30fd7a.jpg',
      'image2': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598875539380&di=a5e2695e3be708b283fa87bb6418d8fd&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb21c8701a18b87d6993fcf52010828381f30fd7a.jpg',
      'image3': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598875539380&di=a5e2695e3be708b283fa87bb6418d8fd&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb21c8701a18b87d6993fcf52010828381f30fd7a.jpg',
    })
  },
  /** 
 * 获取adm规培
 */
  'GET /yxhk/adm/training/:id': async (ctx, next) => {
    ctx.response.body = Mock.mock({
      'id': ctx.params.id,
      'hospital': '@cname',
      'create_at': '@date("yyyy-MM-dd")',
      'province|1': [11, 12, 13, 14, 15, 21, 22, 23, 31, 32, 33, 34, 35, 36, 37],
      'type': [0, 1],
      'status|1': [0, 1],
      'sign_up_start': '@date("yyyy-MM-dd")',
      'sign_up_end': '@date("yyyy-MM-dd")',
      'base_salary|900-5000': 1,
      'url': 'https://cn.vuejs.org/v2/guide/',
      'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598875539380&di=a5e2695e3be708b283fa87bb6418d8fd&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb21c8701a18b87d6993fcf52010828381f30fd7a.jpg',
      'desc|1-3': '我是一个简介',
    })
  },
  /** 
   * 删除adm规培评论
   */
  'DELETE /yxhk/adm/training/cmts/:id': async (ctx, next) => {
    ctx.response.body = {
      id: ctx.params.id
    }
  },
  /** 
   * 获取规培列表
   */
  'GET /yxhk/training': async (ctx, next) => {
    ctx.response.body = createListRes({
      'id|+1': 1,
      'hospital|1': ['四川大学华西第二医院', '山东省齐鲁医院', '单县中心医院'],
      'create_at': '@date("yyyy-MM-dd")',
      'province|1': [11, 12, 13, 14, 15, 21, 22, 23, 31, 32, 33, 34, 35, 36, 37],
      'type': [0, 1],
      'status|1': [0, 1],
      'sign_up_start': '@date("yyyy-MM-dd")',
      'sign_up_end': '@date("yyyy-MM-dd")',
      'base_salary|900-5000': 1,
      'url': 'https://cn.vuejs.org/v2/guide/',
      'image|1': ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598875539380&di=a5e2695e3be708b283fa87bb6418d8fd&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb21c8701a18b87d6993fcf52010828381f30fd7a.jpg', null],
      'desc|1-3': '我是一个简介',
      'cmts_count|50-900': 1,
      'top_count|50-900': 1,
    })
  },
  /** 
   * bdr pc微信登录
   */
  'POST /bdr/user/login': async (ctx, next) => {
    ctx.response.body = {
      user: {
        id: 10004,
        name: '芜桐',
        avatar: 'https://www.sumoli.com/img/logo_01.91a175d3.png'
      },
      csrf_token: 'csrf_token',
    }
  },
  /** 
   * bdr 用户收藏夹
   */
  'GET /bdr/user/:id/favorite': async (ctx, next) => {
    ctx.response.body = createListRes({
      'id|+1': 1,
      'name|1': ['开发', '前端', '后端', 'UI设计', '软件测试', '实用工具'],
      'user_id|1': [10004, 10005, 10006, 10007],
      'type|1': [0, 1], // 0私人 1共享
    })
  },
  /** 
   * bdr 全部收藏夹
   */
  'GET /bdr/favorite': async (ctx, next) => {
    ctx.response.body = createListRes({
      'id|+1': 1,
      'name|1': ['开发', '前端', '后端', 'UI设计', '软件测试', '实用工具'],
      'cate': ['js', 'java', 'python', 'nodejs', 'vue', 'react', '颜色', '金融'], // 0私人 1共享 2关注
      'desc|1-3': '我是一个简介',
      'website_count|1-50': 1,
      'fans_count|1-50000': 1,
      'user_id|1': [10004, 10005, 10006, 10007],
      'type': 1,
    })
  },
  /** 
   * bdr 收藏夹详情
   */
  'GET /bdr/favorite/:id': async (ctx, next) => {
    ctx.response.body =
      Mock.mock({
        'id': ctx.params.id,
        'name|1': ['开发', '前端', '后端', 'UI设计', '软件测试', '实用工具'],
        'cate|10': [
          { 'id|+1': 1, 'name|1': ['js', 'java', 'python', 'nodejs', 'vue', 'react', '金融', '颜色'], },
        ],
        'desc|1-3': '我是一个简介',
        'website_count|1-50': 1,
        'fans_count|1-50000': 1,
        'user_id|1': [10004, 10005, 10006, 10007],
        'user_avatar|1': ['https://static.iiter.cn/weixin.ico', 'https://static.iiter.cn/react.png', 'https://static.iiter.cn/gitmind.png', 'https://static.iiter.cn/163.ico'],
        'user_name': '@cname',
        'type|1': [0, 1], // 0私人 1共享
        'cate_id|1-10': 1,
        'profile|1-3': '设计师必备站点，国内优秀设计师都在上面。设计师必备站点，国内优秀设计师都在上面。设计师必备站点，国内优秀设计师都在上面。设计师必备站点，国内优秀设计师都在上面。',
        'attention|1': [0, 1]
      })
  },
  /** 
   * bdr 更新收藏夹
   */
  'PUT /bdr/favorite/:id': async (ctx, next) => {
    ctx.response.body = {
      msg: 'ok'
    }
  },
  /** 
   * bdr 获取收藏夹内urls
   */
  'GET /bdr/favorite/:id/urls': async (ctx, next) => {
    ctx.response.body = Mock.mock({
      'data|17': [
        {
          'name|1': ['芜桐博客', '艾特网', '知乎', '阿里云', '腾讯云'],
          'id|+1': 1,
          'url|1': ['https://sumoli.com', 'https://iiter.cn/'],
          'logo|1': ['https://static.iiter.cn/weixin.ico', 'https://static.iiter.cn/react.png', 'https://static.iiter.cn/gitmind.png', 'https://static.iiter.cn/163.ico'],
          'desc|1-3': '凤凰鸣矣，于彼高岗。芜桐生矣，于彼朝阳。'
        }
      ],
    })
  },
};