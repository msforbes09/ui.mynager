import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/auth/Login.vue'),
      meta: {
        requiresVisitor: true
      }
    },
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          name: 'welcome',
          component: () => import('./views/Welcome.vue')
        },
        {
          path: 'summary',
          name: 'summary',
          component: () => import('./views/Report.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'income',
          name: 'income',
          component: () => import('./views/income/Index.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'expense',
          name: 'expense',
          component: () => import('./views/expense/Index.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '*',
          name: '404',
          component: () => import('./components/404.vue')
        }
      ],
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'home'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
