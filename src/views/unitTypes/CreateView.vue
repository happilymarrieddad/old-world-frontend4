<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'

import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useGamesStore } from '@/stores/games'
import { useArmyTypesStore } from '@/stores/armyTypes'
import { useUnitTypesStore } from '@/stores/unitTypes'
import { useTroopTypesStore } from '@/stores/troopTypes'
import { useCompositionTypesStore } from '@/stores/compositionTypes'

import type { Game } from '@/gen/proto/games/game_pb'
import type { ArmyType } from '@/gen/proto/armytypes/army-types_pb'
import { CreateUnitTypeRequest } from '@/gen/proto/unittypes/unit-types-service_pb'
import type { TroopType } from '@/gen/proto/trooptypes/troop-types_pb'
import type { CompositionType } from '@/gen/proto/compositiontypes/composition-types_pb'
import type { UnitType } from '@/gen/proto/unittypes/types_pb'

const appStore = useAppStore()
const gamesStore = useGamesStore()
const armyTypeStore = useArmyTypesStore()
const unitTypeStore = useUnitTypesStore()
const troopTypeStore = useTroopTypesStore()
const compositionTypeStore = useCompositionTypesStore()

const router = useRouter()

const { loading } = storeToRefs(appStore)

const games = ref<Game[]>([])
const armyTypes = ref<ArmyType[]>([])
const troopTypes = ref<TroopType[]>([])
const compositionTypes = ref<CompositionType[]>([])
const parentUnitTypes = ref<UnitType[]>([])

const form = reactive({
  name: '',
  gameId: '',
  armyTypeId: '',
  troopTypeId: '',
  compositionTypeId: '',
  parentUnitTypeId: '',
  pointsPerModel: 0,
  minModels: 1,
  maxModels: 1
})

async function create() {
  if (form.parentUnitTypeId.length > 0) {
    form.minModels = 1
    form.maxModels = 1
    form.pointsPerModel = 0
  }

  const req = new CreateUnitTypeRequest({
    name: form.name,
    gameId: form.gameId,
    armyTypeId: form.armyTypeId,
    troopTypeId: form.troopTypeId,
    compositionTypeId: form.compositionTypeId,
    pointsPerModel: BigInt(form.pointsPerModel),
    minModels: BigInt(form.minModels),
    maxModels: BigInt(form.maxModels),
    unitTypeId: form.parentUnitTypeId // TODO: in the API change this to ParentUnitTypeID at some point so it's clear what it is
  })

  const err = await unitTypeStore.createUnitType(req)
  if (err) {
    ElMessage.error(err)
    return
  }

  ElMessage.success('Successfully created unit type')
  router.push(
    `/unit-types${form.parentUnitTypeId.length > 0 ? '/edit/' + form.parentUnitTypeId : ''}`
  )
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

async function getArmyTypeData() {
  appStore.loading = true
  const [ats, , err] = await armyTypeStore.getArmyTypes(form.gameId, 1000, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  armyTypes.value = ats as ArmyType[]
  if (armyTypes.value.length > 0) {
    form.armyTypeId = armyTypes.value[0].id
  }
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

async function getGameRelatedData() {
  await getArmyTypeData()
  await getTroopTypeData()
  await getCompositionTypeData()
  await getParentUnitTypes()
}

onMounted(async () => {
  await getGameData()
  await getGameRelatedData()
})
</script>

<template>
  <div class="unit-type-create">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/unit-types' }">Unit Types</el-breadcrumb-item>
      <el-breadcrumb-item>Create new army unit type</el-breadcrumb-item>
    </el-breadcrumb>
    <br />
    <br />
    <el-row class="row-bg" justify="space-between">
      <el-col :span="4"></el-col>
      <el-col :span="10">
        <el-card>
          <el-form :model="form" label-width="auto" style="max-height: 600px" v-loading="loading">
            <el-form-item label="Game">
              <el-select
                v-model="form.gameId"
                placeholder="please select a game"
                @change="getGameRelatedData"
              >
                <el-option v-for="gm in games" :key="gm.id" :label="gm.name" :value="gm.id" />
              </el-select>
            </el-form-item>
            <el-form-item label="Army Type">
              <el-select
                v-model="form.armyTypeId"
                placeholder="please select an army type"
                @change="getParentUnitTypes"
              >
                <el-option v-for="at in armyTypes" :key="at.id" :label="at.name" :value="at.id" />
              </el-select>
            </el-form-item>
            <el-form-item label="Troop Type">
              <el-select v-model="form.troopTypeId" placeholder="please select a troop type">
                <el-option
                  :key="''"
                  :label="'-- Please select a Troop Tyoe --'"
                  :value="''"
                ></el-option>
                <el-option v-for="tt in troopTypes" :key="tt.id" :label="tt.name" :value="tt.id" />
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
                  v-for="ct in compositionTypes"
                  :key="ct.id"
                  :label="ct.name"
                  :value="ct.id"
                />
              </el-select>
            </el-form-item>
            <el-form-item
              label="Parent Unit Type (optional - only if you want to add this as a leader or mount for a unit)"
            >
              <el-select
                v-model="form.parentUnitTypeId"
                placeholder="please select a parent unit type"
              >
                <el-option
                  :key="''"
                  :label="'-- Select a parent unit if this is for example a leader of a unit--'"
                  :value="''"
                ></el-option>
                <el-option
                  v-for="put in parentUnitTypes"
                  :key="put.id"
                  :label="put.name"
                  :value="put.id"
                />
              </el-select>
            </el-form-item>

            <el-form-item label="Unit Type Name">
              <el-input v-model="form.name" placeholder="Empire Greatswords" />
            </el-form-item>
            <div v-if="form.parentUnitTypeId == ''">
              <el-form-item label="Points per model">
                <el-input v-model="form.pointsPerModel" type="number" min="0" />
              </el-form-item>
              <el-form-item label="Min Models">
                <el-input v-model="form.minModels" type="number" min="1" />
              </el-form-item>
              <el-form-item label="Max Models">
                <el-input v-model="form.maxModels" type="number" min="1" />
              </el-form-item>
            </div>

            <el-form-item>
              <el-button type="primary" @click="create">Create</el-button>
              <el-button>Cancel</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>
