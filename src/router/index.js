import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import blogform from '@/components/blogform'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/blogform',
      name: 'blogform',
      component: blogform
    }
  ]
})
