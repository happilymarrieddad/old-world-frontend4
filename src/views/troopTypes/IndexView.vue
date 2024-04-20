<script setup lang="tsx">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { Game } from '@/gen/proto/games/game_pb'
import { TroopType } from '@/gen/proto/trooptypes/troop-types_pb'
import { useAppStore } from '@/stores/app'
import { useGamesStore } from '@/stores/games'
import { useTroopTypesStore } from '@/stores/troopTypes'
import { ElMessage, TableV2FixedDir, ElLink } from 'element-plus'
import { Edit } from '@element-plus/icons-vue'

const appStore = useAppStore()
const gamesStore = useGamesStore()
const troopTypeStore = useTroopTypesStore()

const { loading } = storeToRefs(appStore)

const games = ref<Game[]>([])
const troopTypes = ref<TroopType[]>([])
const selectedGameId = ref('')
const selectedGameName = ref('')
const columns = ref<any>([
  { key: 'name', dataKey: 'name', width: 500, title: 'Name' },
  {
    dataKey: 'id',
    width: 200,
    fixed: TableV2FixedDir.RIGHT,
    title: 'Options',
    cellRenderer: (data: any) => (
      <>
        <ElLink underline={false} icon={Edit} href={`/troop-types/${data.cellData}`}>
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

async function getTroopTypeData() {
  appStore.loading = true
  const [ats, , err] = await troopTypeStore.getTroopTypes(selectedGameId.value, 500, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  troopTypes.value = ats as TroopType[]
  appStore.loading = false
}

onMounted(async () => {
  await getGameData()
  await getTroopTypeData()
})
</script>

<template>
  <div class="troop-types-index">
    <div class="troop-types">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/games' }">
          <el-select
            v-model="selectedGameId"
            placeholder="Select"
            size="small"
            style="min-width: 200px"
            @change="getTroopTypeData"
          >
            <el-option key="" label="" value="-- Please select a game --" />
            <el-option v-for="gm in games" :key="gm.id" :label="gm.name" :value="gm.id" />
          </el-select>
        </el-breadcrumb-item>
        <el-breadcrumb-item>Troop Types</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="height: 1000px">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            v-loading="loading"
            :columns="columns"
            :data="troopTypes"
            :width="width"
            :height="height"
            fixed
          />
        </template>
      </el-auto-resizer>
    </div>
  </div>
</template>
