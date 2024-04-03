<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useArmyTypesStore } from '@/stores/armyTypes'
import { ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'
import type { ArmyType } from '@/gen/proto/armytypes/army-types_pb'

const armyTypeStore = useArmyTypesStore()
const route = useRoute()

const name = ref('')

onMounted(async () => {
  const [res, err] = await armyTypeStore.getArmyType(route.params.id as string)
  if (err) {
    ElMessage.error(err)
    return
  }

  const armyType = res as ArmyType
  name.value = armyType.name
})
</script>

<template>
  <div class="army-types-edit">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/army-types' }">Army Types</el-breadcrumb-item>
      <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
