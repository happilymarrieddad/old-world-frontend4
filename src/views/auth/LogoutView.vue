<script lang="ts">
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'

export default {
  setup() {
    const router = useRouter()
    const store = useAppStore()

    setTimeout(() => {
      store.clearToken()
      router.push('/login')
    }, 250)
  }
}
</script>

<template>
  <div class="logout">
    <h1>Logging out...</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .logout {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
