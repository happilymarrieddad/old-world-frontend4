<script setup lang="ts">
import { reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useGamesStore } from '@/stores/games'

interface RuleForm {
  name: string
}

const formRef = ref<FormInstance>()
const form = reactive<RuleForm>({
  name: ''
})
const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input a name', trigger: 'blur' },
    { min: 3, max: 100, message: 'Name length should at least be 3 chars long', trigger: 'blur' }
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      create()
    } else {
      console.log(fields)
      ElMessage.error('invalid form')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const appStore = useAppStore()
const gamesStore = useGamesStore()

const router = useRouter()

const { loading } = storeToRefs(appStore)

async function create() {
  ElMessage.info('Attempting to add new game...')
  appStore.loading = true
  const err = await gamesStore.createGame(form.name)
  if (err) {
    ElMessage.error(err)
    return
  }

  appStore.loading = false
  ElMessage.success('Successfully created game')
  router.push(`/games`)
}
</script>

<template>
  <div class="games-create">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/games' }">Games</el-breadcrumb-item>
    </el-breadcrumb>
    <br />
    <br />
    <el-row class="row-bg" justify="space-between">
      <el-col :span="4"></el-col>
      <el-col :span="10">
        <el-card>
          <el-form
            ref="formRef"
            :rules="rules"
            :model="form"
            label-width="auto"
            style="max-height: 600px"
            v-loading="loading"
            status-icon
          >
            <el-form-item label="New Game Name" prop="name">
              <el-input v-model="form.name" placeholder="Warhammer 40k 3rd Edition" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm(formRef)">Create</el-button>
              <el-button @click="resetForm(formRef)">Reset</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>
