<script setup lang="tsx">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { ElMessage, TableV2FixedDir, ElLink } from 'element-plus'
import { Edit, Delete } from '@element-plus/icons-vue'

import { useAppStore } from '@/stores/app'
import { useGamesStore } from '@/stores/games'
import { useArmyTypesStore } from '@/stores/armyTypes'
import { useUnitTypesStore } from '@/stores/unitTypes'

import type { Game } from '@/gen/proto/games/game_pb'
import type { ArmyType } from '@/gen/proto/armytypes/army-types_pb'
import type { UnitType } from '@/gen/proto/unittypes/types_pb'

const appStore = useAppStore()
const gamesStore = useGamesStore()
const armyTypeStore = useArmyTypesStore()
const unitTypeStore = useUnitTypesStore()

const { loading } = storeToRefs(appStore)

const games = ref<Game[]>([])
const armyTypes = ref<ArmyType[]>([])
const unitTypes = ref<UnitType[]>([])

const gameId = ref('')
const armyTypeId = ref('')

const columns = ref<any>([
  { key: 'id', dataKey: 'id', width: 300, title: 'ID' },
  { key: 'name', dataKey: 'name', width: 500, title: 'Name' },
  {
    key: 'compositionTypeName',
    dataKey: 'compositionTypeName',
    width: 200,
    title: 'Composition Type',
    fixed: TableV2FixedDir.RIGHT
  },
  {
    key: 'pointsPerModel',
    dataKey: 'pointsPerModel',
    width: 100,
    title: 'Pts per model',
    fixed: TableV2FixedDir.RIGHT
  },
  {
    dataKey: 'id',
    width: 200,
    fixed: TableV2FixedDir.RIGHT,
    title: 'Options',
    cellRenderer: (data: any) => (
      <>
        <ElLink underline={false} icon={Edit} href={`/unit-types/edit/${data.cellData}`}>
          Edit
        </ElLink>
        <ElLink
          style="padding-left:10px"
          underline={false}
          icon={Delete}
          href={`/unit-types/destroy/${data.cellData}`}
        >
          Delete
        </ElLink>
      </>
    )
  }
])

async function getGameData() {
  appStore.loading = true
  const [gms, , err] = await gamesStore.getGames(1000, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  games.value = gms as Game[]
  if (games.value.length > 0) {
    gameId.value = games.value[0].id
  }
  appStore.loading = false
}

async function getArmyTypeData() {
  appStore.loading = true
  const [ats, , err] = await armyTypeStore.getArmyTypes(gameId.value, 1000, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  armyTypes.value = ats as ArmyType[]
  if (armyTypes.value.length > 0) {
    armyTypeId.value = armyTypes.value[0].id
  }
  appStore.loading = false
}

async function getUnitTypeData() {
  appStore.loading = true
  const [uts, , err] = await unitTypeStore.getUnitTypes(armyTypeId.value, 1000, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  unitTypes.value = uts as UnitType[]
  appStore.loading = false
  console.log(uts)
}

onMounted(async () => {
  await getGameData()
  await getArmyTypeData()
  await getUnitTypeData()
})
</script>

<template>
  <div class="unit-type-index">
    <div class="troop-types">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/games' }">
          <el-select
            v-model="gameId"
            placeholder="Select"
            size="small"
            style="min-width: 200px"
            @change="getArmyTypeData"
          >
            <el-option key="" label="" value="-- Please select a game --" />
            <el-option v-for="gm in games" :key="gm.id" :label="gm.name" :value="gm.id" />
          </el-select>
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/army-types' }">
          <el-select
            v-model="armyTypeId"
            placeholder="Select"
            size="small"
            style="min-width: 200px"
            @change="getUnitTypeData"
          >
            <el-option key="" label="" value="-- Please select an army type --" />
            <el-option v-for="at in armyTypes" :key="at.id" :label="at.name" :value="at.id" />
          </el-select>
        </el-breadcrumb-item>
        <el-breadcrumb-item>Unit Types</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/unit-types/create' }">Create New</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="height: 1000px">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            v-loading="loading"
            :columns="columns"
            :data="unitTypes"
            :width="width"
            :height="height"
            fixed
          />
        </template>
      </el-auto-resizer>
    </div>
  </div>
</template>
