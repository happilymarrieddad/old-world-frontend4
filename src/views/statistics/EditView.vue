<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useStatisticsStore } from '@/stores/statistics'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { UpdateStatisticRequest, type Statistic } from '@/gen/proto/statistics/statistics_pb'

const route = useRoute()
const router = useRouter()

const appStore = useAppStore()
const statisticStore = useStatisticsStore()

const { loading } = storeToRefs(appStore)

interface RuleForm {
  name: string
  display: string
}

const formRef = ref<FormInstance>()
const form = reactive<RuleForm>({
  name: '',
  display: ''
})
const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input a name', trigger: 'blur' },
    { min: 3, max: 100, message: 'Name length should at least be 3 chars long', trigger: 'blur' }
  ],
  display: [
    { required: true, message: 'Please input a display value', trigger: 'change' },
    { min: 1, max: 100, message: 'Name length should at least be 1 chars long', trigger: 'change' }
  ]
})

async function update() {
  appStore.loading = true
  const err = await statisticStore.updateStatistic(
    new UpdateStatisticRequest({
      id: route.params.id as string,
      name: form.name,
      display: form.display
    })
  )
  if (err) {
    appStore.loading = false
    ElMessage.error(err)
    return
  }

  appStore.loading = false
  ElMessage.success('Successfully updated the statistic')
  router.push('/games/statistics')
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

async function getStatisticData() {
  appStore.loading = true
  const [gm, err] = await statisticStore.getStatistic(route.params.id as string)
  if (err) {
    appStore.loading = false
    ElMessage.error(err)
    return
  }

  const existingStatistic = gm as Statistic
  form.name = existingStatistic.name
  form.display = existingStatistic.display

  appStore.loading = false
}

onMounted(async () => {
  await getStatisticData()
})
</script>

<template>
  <div class="statistics-update-view">
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
            <el-form-item label="Statistic Name" prop="name">
              <el-input v-model="form.name" placeholder="Movement" />
            </el-form-item>
            <el-form-item label="New Statistic Display Value" prop="display">
              <el-input v-model="form.display" placeholder="M" />
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
