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
    {
      path: '/composition-types',
      name: 'compositionTypesIndex',
      meta: { auth: true },
      component: () => import('../views/compositionTypes/IndexView.vue')
    },
    {
      path: '/composition-types/:id',
      name: 'compositionTypesEdit',
      meta: { auth: true },
      component: () => import('../views/compositionTypes/EditView.vue')
    },
    {
      path: '/item-types',
      name: 'itemTypesIndex',
      meta: { auth: true },
      component: () => import('../views/itemTypes/IndexView.vue')
    },
    {
      path: '/item-types/:id',
      name: 'itemTypesEdit',
      meta: { auth: true },
      component: () => import('../views/itemTypes/EditView.vue')
    },
    {
      path: '/troop-types',
      name: 'troopTypesIndex',
      meta: { auth: true },
      component: () => import('../views/troopTypes/IndexView.vue')
    },
    {
      path: '/troop-types/:id',
      name: 'troopTypesEdit',
      meta: { auth: true },
      component: () => import('../views/troopTypes/EditView.vue')
    },
    {
      path: '/games/items',
      name: 'gameItemsIndex',
      meta: { auth: true },
      component: () => import('../views/items/GameItemsIndexView.vue')
    },
    {
      path: '/army-types/items',
      name: 'armyTypeItemsIndex',
      meta: { auth: true },
      component: () => import('../views/items/ArmyItemsIndexView.vue')
    },
    {
      path: '/games/:gameid/items/:id',
      name: 'itemsEdit',
      meta: { auth: true },
      component: () => import('../views/items/EditItemView.vue')
    },
    {
      path: '/games/create',
      name: 'gamesCreate',
      meta: { auth: true },
      component: () => import('../views/games/CreateView.vue')
    },
    {
      path: '/games/:id',
      name: 'gamesEdit',
      meta: { auth: true },
      component: () => import('../views/games/EditView.vue')
    },
    {
      path: '/unit-types',
      name: 'unitTypesIndex',
      meta: { auth: true },
      component: () => import('../views/unitTypes/IndexView.vue')
    },
    {
      path: '/unit-types/create',
      name: 'unitTypesCreate',
      meta: { auth: true },
      component: () => import('../views/unitTypes/CreateView.vue')
    },
    {
      path: '/unit-types/edit/:id',
      name: 'unitTypesEdit',
      meta: { auth: true },
      component: () => import('../views/unitTypes/EditView.vue')
    },
    {
      path: '/unit-types/destroy/:id',
      name: 'unitTypesDestroy',
      meta: { auth: true },
      component: () => import('../views/unitTypes/DeleteView.vue')
    },
    {
      path: '/games/statistics',
      name: 'statisticsIndex',
      meta: { auth: true },
      component: () => import('../views/statistics/IndexView.vue')
    },
    {
      path: '/statistics/:id',
      name: 'statisticsEdit',
      meta: { auth: true },
      component: () => import('../views/statistics/EditView.vue')
    },
    {
      path: '/statistics/create',
      name: 'statisticsCreate',
      meta: { auth: true },
      component: () => import('../views/statistics/CreateView.vue')
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
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue')
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
  await delay(0.05)
})

export default router
