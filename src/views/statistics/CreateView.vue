<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useGamesStore } from '@/stores/games'
import { useStatisticsStore } from '@/stores/statistics'

import type { Game } from '@/gen/proto/games/game_pb'

interface RuleForm {
  name: string
  display: string
  gameId: string
}

const formRef = ref<FormInstance>()
const form = reactive<RuleForm>({
  name: '',
  display: '',
  gameId: ''
})
const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input a name', trigger: 'change' },
    { min: 3, max: 100, message: 'Name length should at least be 3 chars long', trigger: 'change' }
  ],
  display: [
    { required: true, message: 'Please input a display value', trigger: 'change' },
    { min: 1, max: 100, message: 'Name length should at least be 1 chars long', trigger: 'change' }
  ],
  gameId: [{ required: true, message: 'Please select a game', trigger: 'change' }]
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
const statisticsStore = useStatisticsStore()

const router = useRouter()

const { loading } = storeToRefs(appStore)

const games = ref<Game[]>([])

async function create() {
  ElMessage.info('Attempting to add new statistic...')
  appStore.loading = true
  const err = await statisticsStore.createStatistic(form.name, form.display, form.gameId)
  if (err) {
    ElMessage.error(err)
    return
  }

  appStore.loading = false
  ElMessage.success('Successfully created statistic')
  router.push(`/games/statistics`)
}

async function getGameData() {
  appStore.loading = true
  const [gms, , err] = await gamesStore.getGames(1000, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  games.value = gms as Game[]
  if (games.value.length > 0) {
    form.gameId = games.value[0].id
  }
  appStore.loading = false
}

onMounted(async () => {
  await getGameData()
})
</script>

<template>
  <div class="statistics-create">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/statistics' }">Statistics</el-breadcrumb-item>
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
            <el-form-item label="New Statistic Name" prop="name">
              <el-input v-model="form.name" placeholder="Movement" />
            </el-form-item>
            <el-form-item label="New Statistic Display Value" prop="display">
              <el-input v-model="form.display" placeholder="M" />
            </el-form-item>
            <el-form-item label="Game">
              <el-select v-model="form.gameId" placeholder="please select a game">
                <el-option v-for="gm in games" :key="gm.id" :label="gm.name" :value="gm.id" />
              </el-select>
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
