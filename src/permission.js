import router from './router'

// 不需任何条件也能进去的页面,白名单
const whitePageList = [
        'login',
        'join'
    ]
// 路由守卫
router.beforeEach((to, from, next) => {
  next()
})