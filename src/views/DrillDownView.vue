<script setup>
import EintragList from "@/components/EintragList.vue";
import { useRoute } from 'vue-router';
const route = useRoute()
const href = "'/newEintrag/" + route.name + "'"
console.log(href)
function transfer() {
  window.location.href = '/newEintrag/' + route.name
}
</script>

<template>
  <main>
    <div id="maindiv">
      <Suspense>
        <EintragList/>
      </Suspense>
    </div>
    <div id="buttondiv">
      <button @click="transfer">Neuer Eintrag</button>
    </div>
  </main>
</template>

<style scoped>
#maindiv {
  width: 1000px;
//display: flex;
  justify-content: center;
  align-items: center;
}
#buttondiv {
  text-align: center;
}
h1 {
  justify-content: center;
  align-items: center;
}
main {

}
</style>