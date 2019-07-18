import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import blogform from '@/components/blogform'
import Blog from '@/components/blog'
import PostsManager from '@/components/PostsManager'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://dev-436349.okta.com/oauth2/default',
  client_id: '0oawdrn88eQMHETKu356',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

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
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    },
    {
      path: '/posts-manager',
      name: 'PostsManager',
      component: PostsManager,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
