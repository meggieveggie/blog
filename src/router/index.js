import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import blogform from '@/components/blogform'
import Blog from '@/components/blog'
import Auth from '@okta/okta-vue'
console.log(process.env)
Vue.use(Auth, {
  issuer: process.env.VUE_APP_OKTA_ISSUER_URL,
  client_id: process.env.VUE_APP_OKTA_CLIENT_ID,
  redirect_uri: process.env.VUE_APP_OKTA_REDIRECT_URL,
  scope: 'openid profile email'
})

Vue.use(Router)

let router = new Router({
  mode: 'history',
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
      component: blogform,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/blogform/:id',
      name: 'blogform-update',
      component: blogform,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    }
  ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
