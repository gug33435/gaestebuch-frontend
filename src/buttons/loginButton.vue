<script setup>
import {useAuth0} from "@auth0/auth0-vue";

const { loginWithRedirect, isAuthenticated } = useAuth0()

function login() {
  loginWithRedirect({
    appState: {
      target: '/'
    }
  })
}
</script>

<template>
  <button v-if="!isAuthenticated" class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="login">Login</button>
</template>

<style scoped>

</style>