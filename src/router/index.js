import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/home')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/city/city')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/pages/detail/detail')
    }
  ]
})
