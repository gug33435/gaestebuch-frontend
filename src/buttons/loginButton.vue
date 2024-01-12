<script setup>
import {useAuth0} from "@auth0/auth0-vue";
const { loginWithRedirect, isAuthenticated } = useAuth0() || {}
import { useRoute } from 'vue-router';
import {watch} from "vue";
const route = useRoute() || { path: '/rest1' }
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
function login() {
  loginWithRedirect({
    appState: {
      target: ziel
    }
  })
}
</script>

<template>
  <button v-if="!isAuthenticated" class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="login">Login</button>
</template>

<style scoped>

</style>