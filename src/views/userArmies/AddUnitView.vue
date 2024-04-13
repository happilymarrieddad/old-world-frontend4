<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import { useUnitTypesStore } from '@/stores/unitTypes'
import type { UnitType } from '@/gen/proto/unittypes/types_pb'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useUserArmiesStore } from '@/stores/userArmies'
import type { UserArmy } from '@/gen/proto/userarmies/armies_pb'
import { useRouter } from 'vue-router'

const route = useRoute()
const appStore = useAppStore()
const unitTypeStore = useUnitTypesStore()
const userArmyStore = useUserArmiesStore()
const router = useRouter()

const { loading } = storeToRefs(appStore)

const unitTypes = ref<UnitType[]>([])
const userArmyName = ref('')
const userArmyTypeId = ref('')
const form = reactive({
  unit_type_id: ''
})

async function add() {
  ElMessage.info('Attempting to add a unit to an army...')
  loading.value = true
  const err = await userArmyStore.addUnitToUserArmy(route.params.id as string, form.unit_type_id)
  loading.value = false
  if (err) {
    ElMessage.error(err)
    return
  }

  ElMessage.success(`Successfully added unit to army`)
  router.push({ path: `/user-armies/edit/${route.params.id}` })
}

async function getUnitTypes() {
  appStore.loading = true
  const [res, err] = await unitTypeStore.getUnitTypeNamesFromArmyTypeId(userArmyTypeId.value)
  if (err) {
    ElMessage.error(err)
    return
  }

  unitTypes.value = res as UnitType[]
  appStore.loading = false
}

onMounted(async () => {
  appStore.loading = true
  const [res, err] = await userArmyStore.getUserArmy(route.params.id as string)
  if (err) {
    ElMessage.error(err)
    return
  }

  const existingUserArmy = res as UserArmy
  userArmyName.value = existingUserArmy.name
  userArmyTypeId.value = existingUserArmy.armyTypeId

  await getUnitTypes()
})
</script>

<template>
  <div class="user-armies-add-unit">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/user-armies' }">User Armies</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: `/user-armies/edit/${route.params.id as string}` }">{{
        userArmyName
      }}</el-breadcrumb-item>
      <el-breadcrumb-item>Add Unit</el-breadcrumb-item>
    </el-breadcrumb>
    <br />
    <br />
    <el-row class="row-bg" justify="space-between">
      <el-col :span="4"></el-col>
      <el-col :span="10">
        <el-card>
          <el-form :model="form" label-width="auto" style="max-height: 600px" v-loading="loading">
            <el-form-item label="Unit Type">
              <el-select v-model="form.unit_type_id" placeholder="please select your unit type">
                <el-option
                  v-for="ut in unitTypes"
                  :key="ut.id"
                  :label="`${ut.compositionTypeName} - ${ut.name} - (${ut.pointsPerModel}pts${ut.maxModels > 1 ? ' per model (min:' + ut.minModels + ')' : ''})`"
                  :value="ut.id"
                />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="add">Add</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>
