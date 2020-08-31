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
      'hospital': '@cname',
      'create_at': '@date("yyyy-MM-dd")',
      'province|1': [11, 12, 13, 14, 15, 21, 22, 23, 31, 32, 33, 34, 35, 36, 37],
      'type': [0, 1],
      'status|1': [0, 1],
      'sign_up_start': '@date("yyyy-MM-dd")',
      'sign_up_end': '@date("yyyy-MM-dd")',
      'base_salary|900-5000': 1,
      'url': 'https://cn.vuejs.org/v2/guide/',
      'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598851578781&di=6346970eb9ddca41e48f2e74fce95a44&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F17%2F20160417100243_5nLvB.jpeg',
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
      'image1': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598851578781&di=6346970eb9ddca41e48f2e74fce95a44&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F17%2F20160417100243_5nLvB.jpeg',
      'image2': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598851578781&di=6346970eb9ddca41e48f2e74fce95a44&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F17%2F20160417100243_5nLvB.jpeg',
      'image3': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598851578781&di=6346970eb9ddca41e48f2e74fce95a44&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F17%2F20160417100243_5nLvB.jpeg',
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
      'image': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598851578781&di=6346970eb9ddca41e48f2e74fce95a44&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F17%2F20160417100243_5nLvB.jpeg',
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
};