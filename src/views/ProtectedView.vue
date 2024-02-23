<script setup>
import { useAuthenticator } from '@aws-amplify/ui-vue'
import { toRefs } from 'vue'

const { authStatus } = toRefs(useAuthenticator())
</script>

<template>
    This view is protected. Users must be signed in. Current status: {{ authStatus }}
</template>