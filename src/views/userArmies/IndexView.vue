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
  { key: 'armyTypeName', dataKey: 'armyTypeName', width: 250, title: 'Army Type' },
  {
    dataKey: 'units',
    width: 60,
    title: 'Num',
    fixed: TableV2FixedDir.RIGHT,
    cellRenderer: (data: any) => (
      <>
        <span>{data.cellData.length}</span>
      </>
    )
  },
  {
    key: 'points',
    dataKey: 'points',
    width: 120,
    fixed: TableV2FixedDir.RIGHT,
    title: 'Used / Points',
    cellRenderer: (data: any) => (
      <>
        <span>
          {data.rowData.usedPoints} / {data.rowData.points}
        </span>
      </>
    )
  },
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
  appStore.loading = true
  const [res, , err] = await userArmiesStore.getUserArmies(999, 0)
  if (err) {
    ElMessage.error(err)
    return
  }

  userArmies.value = res as UserArmy[]
  console.log(res)
  appStore.loading = false
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
