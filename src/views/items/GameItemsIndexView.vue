<script setup lang="tsx">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { Game } from '@/gen/proto/games/game_pb'
import { Item } from '@/gen/proto/items/types_pb'
import { useAppStore } from '@/stores/app'
import { useGamesStore } from '@/stores/games'
import { useItemsStore } from '@/stores/items'
import { ElMessage, TableV2FixedDir, ElLink } from 'element-plus'
import { Edit } from '@element-plus/icons-vue'

const appStore = useAppStore()
const gamesStore = useGamesStore()
const itemStore = useItemsStore()

const { loading } = storeToRefs(appStore)

const games = ref<Game[]>([])
const items = ref<Item[]>([])
const selectedGameId = ref('')
const selectedGameName = ref('')
const columns = ref<any>([
  { key: 'itemTypeName', dataKey: 'itemTypeName', width: 300, title: 'Item Type' },
  { key: 'name', dataKey: 'name', width: 500, title: 'Name' },
  { key: 'points', dataKey: 'points', width: 60, title: 'Pts' },
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
  appStore.loading = false
}

async function getItemData() {
  appStore.loading = true
  const [its, err] = await itemStore.getGameItems(selectedGameId.value, 10000, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  items.value = its as Item[]
  appStore.loading = false
}

onMounted(async () => {
  await getGameData()
  await getItemData()
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
            @change="getItemData"
          >
            <el-option key="" label="" value="-- Please select a game --" />
            <el-option v-for="gm in games" :key="gm.id" :label="gm.name" :value="gm.id" />
          </el-select>
        </el-breadcrumb-item>
        <el-breadcrumb-item>Game Items</el-breadcrumb-item>
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
