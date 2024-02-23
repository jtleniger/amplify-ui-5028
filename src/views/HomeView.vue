<script setup>
import { useAuthenticator } from '@aws-amplify/ui-vue'
import { toRefs } from 'vue'

const { authStatus } = toRefs(useAuthenticator())
</script>

<template>
  <main>
    Home page. This page can be viewed while signed out. {{ authStatus }}
  </main>
</template>
