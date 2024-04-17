<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useGamesStore } from '@/stores/games'
import type { Game } from '@/gen/proto/games/game_pb'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'

const route = useRoute()
const router = useRouter()

const appStore = useAppStore()
const gameStore = useGamesStore()

const { loading } = storeToRefs(appStore)

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

async function update() {
  appStore.loading = true
  const err = await gameStore.updateGame(route.params.id as string, form.name)
  if (err) {
    appStore.loading = false
    ElMessage.error(err)
    return
  }

  appStore.loading = false
  ElMessage.success('Successfully updated the game')
  router.push('/games')
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      update()
    } else {
      console.log(fields)
      ElMessage.error('invalid form')
    }
  })
}

async function getGameData() {
  appStore.loading = true
  const [gm, err] = await gameStore.getGame(route.params.id as string)
  if (err) {
    appStore.loading = false
    ElMessage.error(err)
    return
  }

  const existingGame = gm as Game
  form.name = existingGame.name

  appStore.loading = false
}

onMounted(async () => {
  await getGameData()
})
</script>

<template>
  <div class="games-update-view">
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
            <el-form-item label="Game Name" prop="name">
              <el-input v-model="form.name" placeholder="Game requires a name" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm(formRef)">Update</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>
