const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const controller = require('./controller')
const app = new Koa()
const port = 5000 // 端口号

if (!(process.env.NODE_ENV === 'production')) {
  let staticFiles = require('./static-files')
  app.use(staticFiles('/static/', __dirname + '/static'))
}
app.use(cors({
  origin: () => ['http://www.test.bdr.com'], // 跨域 'http://adm.test.shangshuyixue.com','http://www.test.shangshuyixue.com','http://www.test.bdr.com',
  maxAge: 5, //指定本次预检请求的有效期，单位为秒。
  credentials: true, //是否允许发送Cookie
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-CSRF-TOKEN'], //设置服务器支持的所有头信息字段
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))
app.use(bodyParser())
app.use(controller())
app.listen(port)