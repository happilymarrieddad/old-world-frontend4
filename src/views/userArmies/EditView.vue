<script setup lang="tsx">
import { onMounted, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useUserArmiesStore } from '@/stores/userArmies'
import type { UserArmy } from '@/gen/proto/userarmies/armies_pb'
import { ArmyUnit } from '@/gen/proto/userarmies/units_pb.js'
import { useAppStore } from '@/stores/app'
import { ElMessage, TableV2FixedDir, ElLink, ElButton } from 'element-plus'
import { Edit, Delete } from '@element-plus/icons-vue'

const appStore = useAppStore()
const route = useRoute()
const router = useRouter()
const userArmyStore = useUserArmiesStore()

const { loading } = storeToRefs(appStore)

const used_points = ref(0)
const form = reactive({
  name: '',
  points: 0,
  gameName: '',
  armyTypeName: '',
  units: [] as ArmyUnit[]
})

async function update() {
  loading.value = true
  const err = await userArmyStore.updateUserArmy(route.params.id as string, form.name, form.points)
  loading.value = false
  if (err) {
    ElMessage.error(err)
    return
  }

  ElMessage.success('successfully updated army!')
  router.push('/user-armies')
}

async function reset() {
  loading.value = true
  await getData()
  loading.value = false
}

async function getData() {
  const [res, err] = await userArmyStore.getUserArmy(route.params.id as string)
  if (err) {
    ElMessage.error(err)
    return
  }

  const existingUserArmy = res as UserArmy

  for (let i = 0; i < existingUserArmy.units.length; i++) {
    used_points.value += Number(existingUserArmy.units[i].points)
  }

  form.name = existingUserArmy.name
  form.points = Number(existingUserArmy.points)
  form.gameName = existingUserArmy.gameName
  form.armyTypeName = existingUserArmy.armyTypeName
  form.units = existingUserArmy.units
}

async function addUnit() {
  router.push(`/user-armies/edit/${route.params.id}/add-unit`)
}

onMounted(async () => {
  await getData()
})

// Unit data
const unitColumns = ref<any>([
  {
    key: 'compositionTypeName',
    dataKey: 'unitType.compositionTypeName',
    width: 300,
    title: 'Type'
  },
  { key: 'name', dataKey: 'unitType.name', width: 300, title: 'Unit Name' },
  { key: 'points', dataKey: 'points', width: 80, title: 'Points' },
  { key: 'troopTypeName', dataKey: 'unitType.troopTypeName', width: 300, title: 'Troop Type' },
  {
    dataKey: 'id',
    width: 200,
    fixed: TableV2FixedDir.RIGHT,
    title: 'Options',
    // data.rowData has all the data.. use that at some point
    cellRenderer: (data: any) => (
      <>
        <ElLink
          underline={false}
          icon={Edit}
          href={`/user-armies/edit/${route.params.id as string}/unit/${data.cellData}`}
        >
          Edit
        </ElLink>
        <ElLink
          style="padding-left:10px"
          underline={false}
          icon={Delete}
          href={`/user-armies/unit/destroy/${data.cellData}`}
        >
          Delete
        </ElLink>
      </>
    )
  }
])
</script>

<template>
  <div class="user-armies-edit">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/user-armies' }">User Armies</el-breadcrumb-item>
      <el-breadcrumb-item>Edit {{ form.name }}</el-breadcrumb-item>
    </el-breadcrumb>
    <br />
    <br />
    <el-row class="row-bg" justify="space-between">
      <el-col :span="4"></el-col>
      <el-col :span="10">
        <el-card>
          <el-form v-loading="loading" :model="form" label-width="auto" style="max-height: 600px">
            <el-form-item label="Army Name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Game">
              <el-input v-model="form.gameName" disabled />
            </el-form-item>
            <el-form-item label="Army Type">
              <el-input v-model="form.armyTypeName" disabled />
            </el-form-item>
            <el-form-item label="Max Points">
              <el-input v-model="form.points" type="number" />
            </el-form-item>
            <el-form-item label="Used Points">
              <el-input v-model="used_points" type="number" disabled />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.prevent="update">Save</el-button>
              <el-button type="success" @click.prevent="addUnit">Add Unit</el-button>
              <el-button type="warning" @click.prevent="reset">Reset</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
    <br />
    <br />
    <div v-show="form.units.length > 0" style="height: 1000px">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            v-loading="loading"
            :columns="unitColumns"
            :data="form.units"
            :width="width"
            :height="height"
            fixed
          />
        </template>
      </el-auto-resizer>
    </div>
  </div>
</template>
