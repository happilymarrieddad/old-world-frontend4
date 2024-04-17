<script setup lang="tsx">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { Game } from '@/gen/proto/games/game_pb'
import { useAppStore } from '@/stores/app'
import { useGamesStore } from '@/stores/games'
import { ElMessage, TableV2FixedDir, ElLink } from 'element-plus'
import { Plus, Edit } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const appStore = useAppStore()
const gamesStore = useGamesStore()
const router = useRouter()

const { loading } = storeToRefs(appStore)

const games = ref<Game[]>([])
const columns = ref<any>([
  { key: 'id', dataKey: 'id', width: 500, title: 'ID' },
  { key: 'name', dataKey: 'name', width: 0, align: 'center', title: 'Name' },
  {
    dataKey: 'id',
    width: 200,
    fixed: TableV2FixedDir.RIGHT,
    title: 'Options',
    cellRenderer: (data: any) => (
      <>
        <ElLink underline={false} icon={Edit} href={`/games/${data.cellData}`}>
          Edit
        </ElLink>
      </>
    )
  }
])

async function getData() {
  appStore.loading = true
  const [gms, , err] = await gamesStore.getGames(10000, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  games.value = gms as Game[]
  appStore.loading = false
}

async function create() {
  router.push('/games/create')
}

onMounted(async () => {
  await getData()
})
</script>

<template>
  <div class="games-index">
    <div class="games">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
        <el-breadcrumb-item>Games</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <br />
    <el-button type="success" @click.prevent="create"
      ><el-icon><Plus /></el-icon> Create New</el-button
    >
    <br />
    <div style="height: 400px">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            v-loading="loading"
            :columns="columns"
            :data="games"
            :width="width"
            :height="height"
            fixed
          />
        </template>
      </el-auto-resizer>
    </div>
  </div>
</template>
