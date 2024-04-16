<script setup lang="ts">
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useAppStore } from '@/stores/app'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useAppStore()
const form = reactive({
  email: '',
  password: ''
})

async function login() {
  const [, err] = await store.login(form.email, form.password)
  if (err) {
    ElMessage.error(err)
    return
  }

  router.push('/')
}

async function register() {
  router.push('/register')
}
</script>

<template>
  <div class="login">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content">
          <img
            style="max-width: 100%; max-height: 100%"
            src="@/assets/images/wargame_list_builder_img.png"
            alt="Website image"
          />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-form :model="form" label-width="auto" label-position="right" size="large">
          <el-form-item label="Email">
            <el-input v-model="form.email" />
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="form.password" type="password" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">Login</el-button>
            <el-button>Cancel</el-button>
            <el-button @click="register">Create New Account</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
