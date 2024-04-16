<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserArmiesStore } from '@/stores/userArmies'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import type { UserArmy } from '@/gen/proto/userarmies/armies_pb'
import { useAppStore } from '@/stores/app'
import { useGamesStore } from '@/stores/games'
import { useArmyTypesStore } from '@/stores/armyTypes'
import type { Game } from '@/gen/proto/games/game_pb'
import type { ArmyType } from '@/gen/proto/armytypes/army-types_pb'

const appStore = useAppStore()
const gamesStore = useGamesStore()
const armyTypeStore = useArmyTypesStore()
const userArmiesStore = useUserArmiesStore()
const router = useRouter()

const { loading } = storeToRefs(appStore)

const games = ref<Game[]>([])
const armyTypes = ref<ArmyType[]>([])

const form = reactive({
  gameId: '',
  armyTypeId: '',
  name: '',
  points: 0
})

async function create() {
  ElMessage.info('Attempting to create an army...')
  loading.value = true
  const [ua, err] = await userArmiesStore.createUserArmy(
    form.name,
    form.gameId,
    form.armyTypeId,
    form.points
  )
  loading.value = false
  if (err) {
    ElMessage.error(err)
    return
  }

  const userArmy = ua as UserArmy

  ElMessage.success(`Successfully created army '${userArmy.name}'. Navigating to army edit page`)
  router.push({ path: `/user-armies/edit/${userArmy.id}` })
}

async function getGameData() {
  appStore.loading = true
  const [gms, , err] = await gamesStore.getGames(500, 0)
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
  form.armyTypeId = ''
  const [ats, , err] = await armyTypeStore.getArmyTypes(form.gameId, 500, 0)
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

onMounted(async () => {
  await getGameData()
  await getArmyTypeData()
})
</script>

<template>
  <div class="user-armies-create">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/user-armies' }">User Armies</el-breadcrumb-item>
      <el-breadcrumb-item>Create new army</el-breadcrumb-item>
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
                placeholder="please select your game"
                @change="getArmyTypeData"
              >
                <el-option v-for="gm in games" :key="gm.id" :label="gm.name" :value="gm.id" />
              </el-select>
            </el-form-item>
            <el-form-item label="Army Type">
              <el-select v-model="form.armyTypeId" placeholder="please select your army type">
                <el-option v-for="at in armyTypes" :key="at.id" :label="at.name" :value="at.id" />
              </el-select>
            </el-form-item>
            <el-form-item label="Army Name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Max Points">
              <el-input v-model="form.points" type="number" />
            </el-form-item>
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
