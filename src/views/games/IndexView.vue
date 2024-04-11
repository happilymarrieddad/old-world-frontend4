<script setup lang="tsx">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { Game } from '@/gen/proto/games/game_pb'
import { useAppStore } from '@/stores/app'
import { useGamesStore } from '@/stores/games'
import { ElMessage } from 'element-plus'

const appStore = useAppStore()
const gamesStore = useGamesStore()

const { loading } = storeToRefs(appStore)

const games = ref<Game[]>([])
const columns = ref<any>([
  { key: 'id', dataKey: 'id', width: 500, title: 'ID' },
  { key: 'name', dataKey: 'name', width: 0, align: 'center', title: 'Name' }
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
