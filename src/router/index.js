import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import blogform from '@/components/blogform'
import Blog from '@/components/blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/blog/:id',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blogform',
      name: 'blogform',
      component: blogform
    },
    {
      path: '/blogform/:id',
      name: 'blogform-update',
      component: blogform
    }

  ]
})
