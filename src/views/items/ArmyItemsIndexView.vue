<script setup lang="tsx">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { Game } from '@/gen/proto/games/game_pb'
import { Item } from '@/gen/proto/items/types_pb'
import { useAppStore } from '@/stores/app'
import { useGamesStore } from '@/stores/games'
import { useItemsStore } from '@/stores/items'
import { useArmyTypesStore } from '@/stores/armyTypes'
import { ElMessage, TableV2FixedDir, ElLink } from 'element-plus'
import { Edit } from '@element-plus/icons-vue'
import type { ArmyType } from '@/gen/proto/armytypes/army-types_pb'

const appStore = useAppStore()
const gamesStore = useGamesStore()
const armyTypeStore = useArmyTypesStore()
const itemStore = useItemsStore()

const { loading } = storeToRefs(appStore)

const games = ref<Game[]>([])
const armyTypes = ref<ArmyType[]>([])
const items = ref<Item[]>([])
const selectedGameId = ref('')
const selectedGameName = ref('')
const selectedArmyTypeId = ref('')
const selectedArmyTypeName = ref('')
const columns = ref<any>([
  { key: 'itemTypeName', dataKey: 'itemTypeName', width: 150, title: 'Item Type' },
  { key: 'name', dataKey: 'name', width: 500, title: 'Name' },
  { key: 'points', dataKey: 'points', width: 60, fixed: TableV2FixedDir.RIGHT, title: 'Pts' },
  {
    key: 'armyTypeId',
    dataKey: 'armyTypeId',
    width: 100,
    fixed: TableV2FixedDir.RIGHT,
    title: 'Is Army Item',
    cellRenderer: (data: any) => (
      <>
        <p v-html={data.cellData.length > 0 ? '*' : ''}></p>
      </>
    )
  },
  {
    key: 'description',
    dataKey: 'description',
    width: 300,
    fixed: TableV2FixedDir.RIGHT,
    title: 'Description'
  },
  {
    dataKey: 'id',
    width: 200,
    fixed: TableV2FixedDir.RIGHT,
    title: 'Options',
    cellRenderer: (data: any) => (
      <>
        <ElLink
          underline={false}
          icon={Edit}
          href={`/games/${data.rowData.gameId}/items/${data.cellData}`}
        >
          Edit
        </ElLink>
      </>
    )
  }
])

async function getGameData() {
  appStore.loading = true
  const [gms, , err] = await gamesStore.getGames(500, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  games.value = gms as Game[]
  if (games.value.length > 0) {
    selectedGameId.value = games.value[0].id
    selectedGameName.value = games.value[0].name
  }

  selectedArmyTypeId.value = ''
  selectedArmyTypeName.value = ''
  appStore.loading = false
}

async function getArmyTypeData() {
  appStore.loading = true
  const [ats, , err] = await armyTypeStore.getArmyTypes(selectedGameId.value, 500, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  armyTypes.value = ats as ArmyType[]
  if (armyTypes.value.length > 0) {
    selectedArmyTypeId.value = armyTypes.value[0].id
    selectedArmyTypeName.value = armyTypes.value[0].name
  }
  appStore.loading = false

  getItemData()
}

async function getItemData() {
  appStore.loading = true
  const [its, err] = await itemStore.getArmyItems(selectedArmyTypeId.value, 10000, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  items.value = its as Item[]
  appStore.loading = false
}

onMounted(async () => {
  await getGameData()
  await getArmyTypeData()
})
</script>

<template>
  <div class="items-index">
    <div class="items">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/games' }">
          <el-select
            v-model="selectedGameId"
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
            v-model="selectedArmyTypeId"
            placeholder="Select"
            size="small"
            style="min-width: 200px"
            @change="getItemData"
          >
            <el-option key="" label="" value="-- Please select an army type --" />
            <el-option v-for="at in armyTypes" :key="at.id" :label="at.name" :value="at.id" />
          </el-select>
        </el-breadcrumb-item>
        <el-breadcrumb-item>Army Items</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="height: 1000px">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            v-loading="loading"
            :columns="columns"
            :data="items"
            :width="width"
            :height="height"
            fixed
          />
        </template>
      </el-auto-resizer>
    </div>
  </div>
</template>
