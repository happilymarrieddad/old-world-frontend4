<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import { useArmyTypesStore } from '@/stores/armyTypes'
import { useUnitTypesStore } from '@/stores/unitTypes'
import { useTroopTypesStore } from '@/stores/troopTypes'
import { useCompositionTypesStore } from '@/stores/compositionTypes'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import type { UnitStatistic, UnitType } from '@/gen/proto/unittypes/types_pb'
import type { TroopType } from '@/gen/proto/trooptypes/troop-types_pb'
import type { CompositionType } from '@/gen/proto/compositiontypes/composition-types_pb'
import type { ArmyType } from '@/gen/proto/armytypes/army-types_pb'
import { UpdateUnitTypeRequest } from '@/gen/proto/unittypes/unit-types-service_pb'

const route = useRoute()
const router = useRouter()

const appStore = useAppStore()
const armyTypeStore = useArmyTypesStore()
const unitTypeStore = useUnitTypesStore()
const troopTypeStore = useTroopTypesStore()
const compositionTypeStore = useCompositionTypesStore()

const { loading } = storeToRefs(appStore)

const troopTypes = ref<TroopType[]>([])
const compositionTypes = ref<CompositionType[]>([])
const parentUnitTypes = ref<UnitType[]>([])

const form = reactive({
  name: '',
  gameId: '',
  armyTypeId: '',
  armyTypeName: '',
  troopTypeId: '',
  compositionTypeId: '',
  parentUnitTypeId: '',
  pointsPerModel: 0,
  minModels: 1,
  maxModels: 1,
  stats: [] as UnitStatistic[]
})

async function getUnitTypeData() {
  appStore.loading = true
  const [ut, err] = await unitTypeStore.getUnitType(route.params.id as string)
  if (err) {
    ElMessage.error(err)
    return
  }

  const existingUnitType = ut as UnitType

  const [at, err2] = await armyTypeStore.getArmyType(existingUnitType.armyTypeId)
  if (err2) {
    ElMessage.error(err2)
    return
  }

  const existingArmyType = at as ArmyType

  form.name = existingUnitType.name
  form.gameId = existingUnitType.gameId
  form.armyTypeId = existingUnitType.armyTypeId
  form.armyTypeName = existingArmyType.name
  form.troopTypeId = existingUnitType.troopTypeId
  form.compositionTypeId = existingUnitType.compositionTypeId
  //form.parentUnitTypeId = existingUnitType // TODO:

  form.pointsPerModel = Number(existingUnitType.pointsPerModel)
  form.minModels = Number(existingUnitType.minModels)
  form.maxModels = Number(existingUnitType.maxModels)

  form.stats = existingUnitType.statistics

  appStore.loading = false
}

async function getTroopTypeData() {
  appStore.loading = true
  const [tts, , err] = await troopTypeStore.getTroopTypes(form.gameId, 1000, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  troopTypes.value = tts as TroopType[]
  if (troopTypes.value.length > 0) {
    form.troopTypeId = troopTypes.value[0].id
  }
  appStore.loading = false
}

async function getCompositionTypeData() {
  appStore.loading = true
  const [cts, , err] = await compositionTypeStore.getCompositionTypes(form.gameId, 1000, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  compositionTypes.value = cts as CompositionType[]
  if (compositionTypes.value.length > 0) {
    form.troopTypeId = compositionTypes.value[0].id
  }
  appStore.loading = false
}

async function getParentUnitTypes() {
  appStore.loading = true
  const [puts, err] = await unitTypeStore.getUnitTypeNamesFromArmyTypeId(form.armyTypeId)
  if (err) {
    ElMessage.error(err)
    return
  }

  parentUnitTypes.value = puts as UnitType[]
  appStore.loading = false
}

async function reset() {
  loading.value = true
  await getUnitTypeData()
  loading.value = false
}

async function update() {
  loading.value = true
  const err = await unitTypeStore.updateUnitType(
    new UpdateUnitTypeRequest({
      id: route.params.id as string,
      name: form.name,
      pointsPerModel: BigInt(form.pointsPerModel),
      minModels: BigInt(form.minModels),
      maxModels: BigInt(form.maxModels),
      troopTypeId: form.troopTypeId,
      compositionTypeId: form.compositionTypeId,
      statistics: form.stats
    })
  )
  if (err) {
    ElMessage.error(err)
    return
  }

  ElMessage.success('Successfully updated unit type')
  router.push('/unit-types')
}

onMounted(async () => {
  await getUnitTypeData()
  await getTroopTypeData()
  await getCompositionTypeData()
  await getParentUnitTypes()
})
</script>

<template>
  <div class="unit-type-edit">
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
            <el-form-item label="Army Type">
              <el-input v-model="form.armyTypeName" disabled />
            </el-form-item>
            <el-form-item label="Troop Type">
              <el-select v-model="form.troopTypeId" placeholder="please select a troop type">
                <el-option
                  :key="''"
                  :label="'-- Please select a Troop Tyoe --'"
                  :value="''"
                ></el-option>
                <el-option
                  v-for="(tt, index) in troopTypes"
                  :key="index"
                  :label="tt.name"
                  :value="tt.id"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="Composition Type">
              <el-select
                v-model="form.compositionTypeId"
                placeholder="please select a composition type"
              >
                <el-option
                  :key="''"
                  :label="'-- Please select a Composition Tyoe --'"
                  :value="''"
                ></el-option>
                <el-option
                  v-for="(ct, index) in compositionTypes"
                  :key="index"
                  :label="ct.name"
                  :value="ct.id"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="Points Per Model">
              <el-input v-model="form.pointsPerModel" type="number" />
            </el-form-item>
            <el-form-item label="Min Models">
              <el-input v-model="form.minModels" type="number" min="1" />
            </el-form-item>
            <el-form-item label="Max Models">
              <el-input v-model="form.maxModels" type="number" min="1" />
            </el-form-item>
            <el-form-item label="Statistics">
              <table>
                <thead>
                  <tr>
                    <th v-for="(stat, index) in form.stats" :key="index">
                      {{ stat.statistic?.display }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th v-for="(stat, index) in form.stats" :key="index">
                      <el-input v-model="stat.value" />
                    </th>
                  </tr>
                </tbody>
              </table>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.prevent="update">Save</el-button>
              <el-button type="warning" @click.prevent="reset">Reset</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
    <!-- <br />
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
    </div> -->
  </div>
</template>
