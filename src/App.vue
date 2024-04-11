<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

const activeIndex = ref('/')

const { authenticated, user } = storeToRefs(appStore)
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header v-show="authenticated">
        <el-menu :default-active="activeIndex" mode="horizontal" :router="true">
          <el-menu-item default-active index="/">Wargame List Builder</el-menu-item>
          <el-sub-menu index="2">
            <template #title>Settings</template>
            <el-menu-item index="/games">Games</el-menu-item>
            <el-menu-item index="/games/items">Game Items</el-menu-item>
            <el-sub-menu index="2-1">
              <template #title>Types</template>
              <el-menu-item index="/army-types">Army</el-menu-item>
              <el-menu-item index="/composition-types">Composition</el-menu-item>
              <el-menu-item index="/troop-types">Troop</el-menu-item>
              <el-menu-item index="/item-types">Item</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2-2">
              <template #title>Armies</template>
              <el-menu-item index="/army-units" disabled>Units (Not Implemented)</el-menu-item>
              <el-menu-item index="/army-types/items">Items</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item default-active index="/user-armies">Your Armies</el-menu-item>
          <el-menu-item default-active index="/user-armies/create">Create Army</el-menu-item>
          <div class="flex-grow" />
          <el-menu-item index="/about">About</el-menu-item>
          <el-menu-item index="/profile">{{ user?.first_name }} {{ user?.last_name }}</el-menu-item>
          <el-menu-item index="/logout">Logout</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style>
.flex-grow {
  flex-grow: 1;
}
.btn-padding-left {
  padding-left: 10px;
}
.btn-padding-left-right {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
