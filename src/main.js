import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { Amplify } from 'aws-amplify'

const app = createApp(App)

app.use(router)

app.mount('#app')

const COGNITO_ID_POOL = import.meta.env.VITE_COGNITO_ID_POOL
const COGNITO_USER_POOL = import.meta.env.VITE_COGNITO_USER_POOL
const COGNITO_WEB_CLIENT = import.meta.env.VITE_COGNITO_WEB_CLIENT
const COGNITO_DOMAIN = import.meta.env.VITE_COGNITO_DOMAIN
const REDIRECT_URI = import.meta.env.VITE_AUTH_REDIRECT_URI

Amplify.configure({
  Auth: {
    Cognito: {
      identityPoolId: COGNITO_ID_POOL,
      userPoolId: COGNITO_USER_POOL,
      userPoolClientId: COGNITO_WEB_CLIENT,
      loginWith: {
        oauth: {
          domain: COGNITO_DOMAIN,
          scopes: ['profile', 'email', 'openid'],
          redirectSignIn: [REDIRECT_URI],
          redirectSignOut: [REDIRECT_URI],
          responseType: 'code'
        }
      }
    }
  }
})