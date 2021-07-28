const { Router } = require("express")
const { list } = require('../controller')
const router = new Router()

// 路由中间件
router.get('/',list)

router.get('/image', (req, res, next) => {
  res.send('image');
});


module.exports = router