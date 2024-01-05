<script setup>
import EintragList from "@/components/EintragList.vue";
</script>

<template>
  <main>
    <div id="maindiv">
      <Suspense>
        <EintragList class="mx-auto"/>
      </Suspense>
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
}
#maindiv {
  min-width: 1000px;
//display: flex;
  justify-content: center;
  align-items: center;
}

</style>