<script setup>
import {useAuth0} from "@auth0/auth0-vue";
const { logout, isAuthenticated} = useAuth0() || {}
import { useRoute } from 'vue-router';
import {watch} from "vue";
const route = useRoute()
let ziel = "/"

watch(
    () => route.path,
    async newId => {
      ziel = route.path
      console.log(ziel)
    },
    {
      immediate: true
    }
)

function logOutOfApp() {
  logout()
}
</script>

<template>
  <button v-if="isAuthenticated" class="btn btn-outline-danger my-2 my-sm-0" type="submit" @click="logOutOfApp">Logout</button>
</template>

<style scoped>

</style>