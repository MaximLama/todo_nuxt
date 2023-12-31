import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _596a73c3 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _29466a39 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _03853c97 = () => interopDefault(import('../pages/workspaces/index.vue' /* webpackChunkName: "pages/workspaces/index" */))
const _e07a5ea8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _f49f97fc = () => interopDefault(import('../pages/workspaces/_id/index.vue' /* webpackChunkName: "pages/workspaces/_id/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _596a73c3,
    name: "login"
  }, {
    path: "/register",
    component: _29466a39,
    name: "register"
  }, {
    path: "/workspaces",
    component: _03853c97,
    name: "workspaces"
  }, {
    path: "/",
    component: _e07a5ea8,
    name: "index"
  }, {
    path: "/workspaces/:id",
    component: _f49f97fc,
    name: "workspaces-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
