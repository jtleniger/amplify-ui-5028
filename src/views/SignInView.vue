<script setup>
import { Authenticator } from '@aws-amplify/ui-vue'
import { useAuthenticator } from '@aws-amplify/ui-vue'
import { toRefs, watch } from 'vue'
import router from '@/router'

const { authStatus } = toRefs(useAuthenticator())

const fields = {
  signIn: {
    username: {
      placeholder: 'Enter your email',
      label: 'Email',
      required: true
    }
  },
  signUp: {
    username: {
      placeholder: 'Enter your email',
      label: 'Email',
      required: true
    }
  }
}

watch(authStatus, (newState) => {
  if (newState === 'authenticated') {
    router.push({ name: 'protected' })
  }
})
</script>

<template>
  <authenticator :form-fields="fields">
  </authenticator>
</template>

