<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref<number>(0)

function handleAdd(): void {
  if(count.value >= 100) return;
  count.value++;
}

function handleReduce(): void {
  if(count.value <= 0) return;
  count.value--;
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <el-slider v-model="count" />

  <el-button type="primary" @click="handleAdd">Add</el-button>
  <el-button type="primary" @click="handleReduce">Reduce</el-button>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
