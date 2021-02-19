import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/test',
      component: () => import('./views/Test.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
