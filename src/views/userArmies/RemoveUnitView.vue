<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserArmiesStore } from '@/stores/userArmies'
import { useUserUnitsStore } from '@/stores/userUnits'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import type { ArmyUnit } from '@/gen/proto/userarmies/units_pb'

const route = useRoute()
const router = useRouter()
const userArmyStore = useUserArmiesStore()
const userUnitStore = useUserUnitsStore()

onMounted(async () => {
  const [ua, err] = await userUnitStore.getUnit(route.params.id as string)
  if (err) {
    ElMessage.error(err)
    return
  }

  const existingUserArmyUnit = ua as ArmyUnit
  const err2 = await userArmyStore.removeUnitToUserArmy(
    existingUserArmyUnit.id,
    existingUserArmyUnit.userArmyId
  )
  if (err2) {
    ElMessage.error(err2)
    return
  }

  ElMessage.success('Successfully removed unit')
  router.push(`/user-armies/edit/${existingUserArmyUnit.userArmyId}`)
})
</script>

<template>
  <div class="user-army-unit-destroy">
    <span>Removing unit...</span>
  </div>
</template>
