<script setup lang="tsx">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { UserArmy } from '@/gen/proto/userarmies/armies_pb'
import { ElMessage, TableV2FixedDir, ElLink } from 'element-plus'
import { Edit, Delete } from '@element-plus/icons-vue'
import { useAppStore } from '@/stores/app'
import { useUserArmiesStore } from '@/stores/userArmies'

const appStore = useAppStore()
const userArmiesStore = useUserArmiesStore()

const { loading } = storeToRefs(appStore)

const userArmies = ref<UserArmy[]>([])
const columns = ref<any>([
  { key: 'name', dataKey: 'name', width: 300, title: 'Name' },
  { key: 'gameName', dataKey: 'gameName', width: 200, title: 'Game' },
  { key: 'armyTypeName', dataKey: 'armyTypeName', width: 200, title: 'Army Type' },
  { key: 'id', dataKey: 'id', width: 280, fixed: TableV2FixedDir.RIGHT, title: 'ID' },
  { key: 'points', dataKey: 'points', width: 80, fixed: TableV2FixedDir.RIGHT, title: 'Points' },
  {
    dataKey: 'id',
    width: 200,
    fixed: TableV2FixedDir.RIGHT,
    title: 'Options',
    cellRenderer: (data: any) => (
      <>
        <ElLink underline={false} icon={Edit} href={`/user-armies/edit/${data.cellData}`}>
          Edit
        </ElLink>
        <ElLink
          class="btn-padding-left"
          underline={false}
          icon={Delete}
          href={`/user-armies/detroy/${data.cellData}`}
          disabled
        >
          Delete
        </ElLink>
      </>
    )
  }
])

async function getUserArmyData() {
  const [res, , err] = await userArmiesStore.getUserArmies(999, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  userArmies.value = res as UserArmy[]
}

onMounted(async () => {
  await getUserArmyData()
})
</script>

<template>
  <div class="user-armies-list">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item>User Armies</el-breadcrumb-item>
    </el-breadcrumb>
    <br />
    <div style="height: 1000px">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            v-loading="loading"
            :columns="columns"
            :data="userArmies"
            :width="width"
            :height="height"
            fixed
          />
        </template>
      </el-auto-resizer>
    </div>
  </div>
</template>
