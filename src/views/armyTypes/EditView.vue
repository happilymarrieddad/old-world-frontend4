<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useArmyTypesStore } from '@/stores/armyTypes'
import { ElMessage } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import type { ArmyType } from '@/gen/proto/armytypes/army-types_pb'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const armyTypeStore = useArmyTypesStore()
const route = useRoute()
const router = useRouter()

const { loading } = storeToRefs(appStore)

const form = reactive({
  name: ''
})

const save = async function () {
  const err = await armyTypeStore.updateArmyType(route.params.id as string, form.name)
  if (err) {
    ElMessage.error(err)
    return
  }

  ElMessage.success('successfully updated army type')
  router.push(`/army-types`)
}

onMounted(async () => {
  appStore.loading = true
  const [res, err] = await armyTypeStore.getArmyType(route.params.id as string)
  if (err) {
    ElMessage.error(err)
    return
  }

  const armyType = res as ArmyType
  form.name = armyType.name
  appStore.loading = false
})
</script>

<template>
  <div class="army-types-edit">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/army-types' }">Army Types</el-breadcrumb-item>
      <el-breadcrumb-item>{{ form.name }}</el-breadcrumb-item>
    </el-breadcrumb>
    <br />
    <br />
    <el-row class="row-bg" justify="space-between">
      <el-col :span="4"></el-col>
      <el-col :span="10">
        <el-card>
          <el-form :model="form" label-width="auto" style="max-height: 600px" v-loading="loading">
            <el-form-item label="Army Type Name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="save">Save</el-button>
              <el-button>Cancel</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>
