<script setup>
import {useAuth0} from "@auth0/auth0-vue";
const { logout, isAuthenticated} = useAuth0() || {}
import { useRoute } from 'vue-router';
import {watch} from "vue";
const route = useRoute() || { path: '/rest1' }
let ziel = "/"

watch(
    () => route.path,
    async newId => {
      ziel = route.path
    },
    {
      immediate: true
    }
)

function logOutOfApp() {
  logout({
    logoutParams: {
      returnTo: "https://gaestebuch-frontend.onrender.com/"
    }
  })
}
</script>

<template>
  <button v-if="isAuthenticated" class="btn btn-outline-danger my-2 my-sm-0" type="submit" @click="logOutOfApp">Logout</button>
</template>

<style scoped>

</style>