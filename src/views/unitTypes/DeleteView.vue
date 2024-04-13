<script setup lang="ts">
import { onMounted } from 'vue'
import { useUnitTypesStore } from '@/stores/unitTypes'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const route = useRoute()
const router = useRouter()
const unitTypeStore = useUnitTypesStore()

onMounted(async () => {
  const err = await unitTypeStore.destroyUnitType(route.params.id as string)
  if (err) {
    ElMessage.error(err)
    return
  }

  ElMessage.success('Successfully removed unit type')
  router.push(`/unit-types`)
})
</script>

<template>
  <div class="unit-type-destroy">
    <span>Removing unit type...</span>
  </div>
</template>
