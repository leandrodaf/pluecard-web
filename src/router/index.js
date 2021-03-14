import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import auth from './middleware/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () => import('../views/Question.vue'),
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Setting.vue'),
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/credits',
    name: 'Credits',
    component: () => import('../views/Credit.vue'),
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('../views/Card.vue'),
    meta: {
      middleware: [auth],
    },
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'

})

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware, store });
  }

  return next();
});

export default router
