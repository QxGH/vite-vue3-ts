<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
  <div class="toggle-box">
    <span class="toggle-btn" @click="toggleExpand()">
      <el-icon v-show="isCollapse"><Expand /></el-icon>
      <el-icon v-show="!isCollapse"><Fold /></el-icon>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue" 
import { useToggle } from '@vueuse/core'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Expand,
  Fold
} from '@element-plus/icons-vue'

const isCollapse = ref(true)

const toggleExpand = useToggle(isCollapse)
 
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  flex: 1;
}
.el-menu {
  border-right: none;
}
.toggle-box {
  margin-top: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid 1px var(--el-menu-border-color);
}
.toggle-btn {
  background-color: var(--el-fill-color-light);
  color: var(--el-text-color-regular);
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>