import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { delay } from '@/utils/delay'

let verified = false

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { auth: true },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: { auth: true },
      component: () => import('../views/AboutView.vue')
    },

    // List Pages
    {
      path: '/games',
      name: 'gamesIndex',
      meta: { auth: true },
      component: () => import('../views/games/IndexView.vue'),
      children: []
    },
    {
      path: '/army-types',
      name: 'armyTypesIndex',
      meta: { auth: true },
      component: () => import('../views/armyTypes/IndexView.vue')
    },
    {
      path: '/army-types/:id',
      name: 'armyTypesEdit',
      meta: { auth: true },
      component: () => import('../views/armyTypes/EditView.vue')
    },

    // User Armies
    {
      path: '/user-armies',
      name: 'userArmies',
      meta: { auth: true },
      component: () => import('../views/userArmies/IndexView.vue')
    },
    {
      path: '/user-armies/create',
      name: 'userArmiesCreate',
      meta: { auth: true },
      component: () => import('../views/userArmies/CreateView.vue')
    },
    {
      path: '/user-armies/edit/:id',
      name: 'userArmiesEdit',
      meta: { auth: true },
      component: () => import('../views/userArmies/EditView.vue')
    },
    {
      path: '/user-armies/edit/:id/add-unit',
      name: 'userArmiesAddUnit',
      meta: { auth: true },
      component: () => import('../views/userArmies/AddUnitView.vue')
    },
    {
      path: '/user-armies/unit/destroy/:id',
      name: 'userArmiesRemoveUnit',
      meta: { auth: true },
      component: () => import('../views/userArmies/RemoveUnitView.vue')
    },
    {
      path: '/user-armies/edit/:userarmyid/unit/:armyunitid',
      name: 'userArmiesUnitEdit',
      meta: { auth: true },
      component: () => import('../views/userArmies/EditUnitView.vue')
    },

    // Auth
    { path: '/login', name: 'login', component: () => import('../views/auth/LoginView.vue') },
    { path: '/logout', name: 'logout', component: () => import('../views/auth/LogoutView.vue') },
    {
      path: '/profile',
      name: 'profile',
      meta: { auth: true },
      component: () => import('../views/auth/ProfileView.vue')
    },

    // Last route
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const store = useAppStore()
  store.loading = true
  const authRequired = to && to.meta && to.meta.auth
  await delay(0.25)

  if (to.name == 'not-found') {
    return next('/')
  }

  if (authRequired) {
    if (!verified) {
      const err = await store.verifyToken()
      if (err) {
        console.log(err)
        return next('/login')
      }
      verified = true
    }

    if (to.name == 'login') {
      return next('/')
    }

    return next()
  }

  if (store.getToken() != '' && (to.name == 'login' || to.name == 'register')) {
    return next('/')
  }

  return next()
})

router.afterEach(async () => {
  await delay(0.25)
  useAppStore().loading = false
})

export default router