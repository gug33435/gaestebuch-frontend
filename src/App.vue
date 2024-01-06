<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
    <Suspense>
      <NavBar/>
    </Suspense>
  <div id="content">
    <RouterView/>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  text-align: center;
}
div {
  margin: 0 auto;
  padding-top: 120px;
}
</style>
