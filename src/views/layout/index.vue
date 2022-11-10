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
          <i inline-flex i="dark:ep-moon ep-sunny" />
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Header from './header.vue'
import Aside from './aside.vue'




</script>

<style lang="scss">
.layout {
  display: flex;
  height: 100%;
  .el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--el-bg-color);
    border-bottom: 1px solid var(--el-border-color);
  }
  .logo {
    width: 32px;
    height: 32px;
  }
  .right-side {
    display: flex;
    align-items: center;
    .item {
      padding: 0 10px;
    }
  }
  .el-aside {
    display: flex;
    height: 100%;
    flex-direction: column;
    .aside {
      flex: 1;
    }
  }
}
</style>