<script setup lang="tsx">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { Game } from '@/gen/proto/games/game_pb'
import { ArmyType } from '@/gen/proto/armytypes/army-types_pb'
import { useAppStore } from '@/stores/app'
import { useGamesStore } from '@/stores/games'
import { useArmyTypesStore } from '@/stores/armyTypes'
import { ElMessage, TableV2FixedDir, ElLink } from 'element-plus'
import { Edit } from '@element-plus/icons-vue'

const appStore = useAppStore()
const gamesStore = useGamesStore()
const armyTypeStore = useArmyTypesStore()

const { loading } = storeToRefs(appStore)

const games = ref<Game[]>([])
const armyTypes = ref<ArmyType[]>([])
const selectedGameId = ref('')
const selectedGameName = ref('')
const columns = ref<any>([
  { key: 'id', dataKey: 'id', width: 300, title: 'ID' },
  { key: 'name', dataKey: 'name', width: 500, title: 'Name' },
  {
    dataKey: 'id',
    width: 200,
    fixed: TableV2FixedDir.RIGHT,
    title: 'Options',
    cellRenderer: (data: any) => (
      <>
        <ElLink underline={false} icon={Edit} href={`/army-types/${data.cellData}`} disabled>
          Edit
        </ElLink>
      </>
    )
  }
])

async function getGameData() {
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
}

async function getArmyTypeData() {
  const [ats, , err] = await armyTypeStore.getArmyTypes(selectedGameId.value, 500, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  armyTypes.value = ats as ArmyType[]
}

onMounted(async () => {
  await getGameData()
  await getArmyTypeData()
})
</script>

<template>
  <div class="army-types-index">
    <div class="army-types">
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
        <el-breadcrumb-item>Army Types</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="height: 1000px">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            v-loading="loading"
            :columns="columns"
            :data="armyTypes"
            :width="width"
            :height="height"
            fixed
          />
        </template>
      </el-auto-resizer>
    </div>
  </div>
</template>
