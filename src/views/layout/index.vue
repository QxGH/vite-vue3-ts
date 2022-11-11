<template>
  <div class="layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside>
          <Aside />
        </el-aside>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Header from './header.vue'
import Aside from './aside.vue'

</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100%;
  .el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--el-border-color);
  }
  .el-aside {
    width: auto;
    display: flex;
    height: 100%;
    flex-direction: column;
    border-right: solid 1px var(--el-menu-border-color);
  }
}
</style>