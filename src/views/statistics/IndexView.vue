<script setup lang="tsx">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { Game } from '@/gen/proto/games/game_pb'
import { Statistic } from '@/gen/proto/statistics/statistics_pb'
import { useAppStore } from '@/stores/app'
import { useGamesStore } from '@/stores/games'
import { useStatisticsStore } from '@/stores/statistics'
import { ElMessage, TableV2FixedDir, ElLink } from 'element-plus'
import { Plus, Edit } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const appStore = useAppStore()
const gamesStore = useGamesStore()
const statStore = useStatisticsStore()
const router = useRouter()

const { loading } = storeToRefs(appStore)

const games = ref<Game[]>([])
const statistics = ref<Statistic[]>([])
const selectedGameId = ref('')
const selectedGameName = ref('')
const columns = ref<any>([
  { key: 'name', dataKey: 'name', width: 500, title: 'Name' },
  { key: 'display', dataKey: 'display', width: 200, title: 'Display' },
  { key: 'position', dataKey: 'position', width: 50, title: 'Position' },
  {
    dataKey: 'id',
    width: 200,
    fixed: TableV2FixedDir.RIGHT,
    title: 'Options',
    cellRenderer: (data: any) => (
      <>
        <ElLink underline={false} icon={Edit} href={`/statistics/${data.cellData}`}>
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

async function getStatisticData() {
  appStore.loading = true
  const [stats, err] = await statStore.getStatistics(selectedGameId.value, 500, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  statistics.value = stats as Statistic[]
  appStore.loading = false
}

async function create() {
  router.push('/statistics/create')
}

onMounted(async () => {
  await getGameData()
  await getStatisticData()
})
</script>

<template>
  <div class="statistics-index">
    <div class="statistics">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/games' }">
          <el-select
            v-model="selectedGameId"
            placeholder="Select"
            size="small"
            style="min-width: 200px"
            @change="getStatisticData"
          >
            <el-option key="" label="" value="-- Please select a game --" />
            <el-option v-for="gm in games" :key="gm.id" :label="gm.name" :value="gm.id" />
          </el-select>
        </el-breadcrumb-item>
        <el-breadcrumb-item>Statistics</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <br />
    <el-button type="success" @click.prevent="create"
      ><el-icon><Plus /></el-icon> Create New</el-button
    >
    <br />
    <div style="height: 1000px">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            v-loading="loading"
            :columns="columns"
            :data="statistics"
            :width="width"
            :height="height"
            fixed
          />
        </template>
      </el-auto-resizer>
    </div>
  </div>
</template>
