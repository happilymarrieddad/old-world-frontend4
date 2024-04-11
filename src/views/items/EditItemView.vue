<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useItemsStore } from '@/stores/items'
import { ElMessage } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import { UpdateItem, type Item } from '@/gen/proto/items/types_pb'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const itemStore = useItemsStore()
const route = useRoute()
const router = useRouter()

const { loading } = storeToRefs(appStore)

const path = ref('/games')
const form = reactive({
  name: '',
  armyTypeId: '',
  points: 0,
  description: '',
  story: ''
})

const save = async function () {
  const itmToUpdate = new UpdateItem({
    id: route.params.id as string,
    name: form.name,
    points: BigInt(form.points),
    description: form.description,
    story: form.story
  })

  const err = await itemStore.updateItem(itmToUpdate)
  if (err) {
    ElMessage.error(err)
    return
  }

  ElMessage.success('successfully updated item')

  router.push(`${path.value}/items`)
}

async function getItemData() {
  const [res, err] = await itemStore.getItem(
    route.params.gameid as string,
    route.params.id as string
  )
  if (err) {
    ElMessage.error(err)
    return
  }

  const item = res as Item
  form.name = item.name
  form.armyTypeId = item.armyTypeId
  form.points = Number(item.points)
  form.description = item.description
  form.story = item.story

  if (form.armyTypeId.length > 0) {
    path.value = '/army-types'
  }
}

onMounted(async () => {
  await getItemData()
})
</script>

<template>
  <div class="items-edit">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/items' }">Items</el-breadcrumb-item>
      <el-breadcrumb-item>{{ form.name }}</el-breadcrumb-item>
    </el-breadcrumb>
    <br />
    <br />
    <el-row class="row-bg" justify="space-between">
      <el-col :span="4"></el-col>
      <el-col :span="10">
        <el-card>
          <el-form :model="form" label-width="auto" style="max-height: 600px" v-loading="loading">
            <el-form-item label="Item Name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Points">
              <el-input v-model="form.points" type="number" min="0" />
            </el-form-item>
            <el-form-item label="Description">
              <el-input v-model="form.description" :rows="2" type="textarea" />
            </el-form-item>
            <el-form-item label="Story">
              <el-input v-model="form.story" :rows="4" type="textarea" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.prevent="save">Save</el-button>
              <el-button @click.prevent="getItemData">Cancel</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>
