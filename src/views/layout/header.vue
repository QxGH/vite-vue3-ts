<template>
  <div class="left-side">
    <img src="https://vitejs.cn/logo.svg" alt="" class="logo">
  </div>
  <ul class="right-side">
    <li class="item">
      <el-tooltip
        class="box-item"
        effect="dark"
        :content="darkTheme ? '亮色模式' : '暗黑模式'"
        placement="bottom"
      >
        <el-button :icon="darkTheme ? Moon : Sunny" circle @click="toggleDark()" ></el-button>
      </el-tooltip>
    </li>
    <li class="item">
      <el-tooltip
        class="box-item"
        effect="dark"
        :content="isFullscreen ? '退出全屏' : '全屏'"
        placement="bottom"
      >
        <el-button :icon="FullScreen" circle @click="toggleFullscreen()" ></el-button>
      </el-tooltip>
    </li>
    <li class="item">
      <el-dropdown>
        <div class="flex-box flex-mid pointer">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="pd-l-10">{{userName}}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue" 
import { Moon, Sunny, FullScreen } from '@element-plus/icons-vue'
import { globalStore } from '@/store'
import { useDark, useToggle, useFullscreen } from '@vueuse/core'

const { isFullscreen, enter, exit, toggle: toggleFullscreen } = useFullscreen()

const globalData = globalStore()

const userName = computed(() => {
  return globalData.name
})

const darkTheme = ref<boolean>(false)

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: '',
  onChanged(dark: boolean) {
    const htmlDom: any = document.querySelector('html')
    darkTheme.value = dark;
    if(dark) {
      htmlDom.className = 'dark'
    } else {
      htmlDom.className = ''
    }
  }
})
const toggleDark = useToggle(isDark)


</script>

<style lang="scss" scoped>
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
</style>