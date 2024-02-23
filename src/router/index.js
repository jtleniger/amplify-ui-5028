import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProtectedView from '../views/ProtectedView.vue'
import SignInView from '../views/SignInView.vue'
import { useAuthenticator } from '@aws-amplify/ui-vue'

const auth = useAuthenticator();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/protected',
      name: 'protected',
      beforeEnter: () => {
        if (auth.authStatus !== 'authenticated') {
          return { name: 'signin'}
        }
      },
      component: ProtectedView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView
    }
  ]
})

export default router
