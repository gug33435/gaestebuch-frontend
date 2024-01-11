<script setup>
import {onMounted, ref} from "vue"
import { useRoute } from 'vue-router'
import router from "@/router"
import LogoutButton from "@/buttons/logoutButton.vue";
import LoginButton from "@/buttons/loginButton.vue";
const route = useRoute() || { path: '/rest1' }

let restLocation = ""
let restText = ""
let weatherData = ref({})
let weatherDegree = ref("")
let imageURL = ref("")

onMounted(async () => {
  await router.isReady()
  console.log(route.path)
  if (route.path === "/rest1" || route.path === "/rest2" || route.path === "/rest3") {
    const num = parseInt(route.path.replace("/rest", ""))
    console.log(num)
    setRestLocation(num, false)
  }
})

function loadWeather() {
  console.log("API Entered")
  const endpoint = "http://api.weatherapi.com/v1/current.json?key=97d241e2972a4bc684a05407240601&q=" + restLocation + "&aqi=no"
  const requestOptions = {
    method: 'GET'
  }
  fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then (result => {
        console.log(result)
        weatherData.value = result
        weatherDegree.value = result.current["temp_c"] + "° Celsius"
        imageURL.value = result.current.condition.icon
      })
}

function setRestLocation(number, retransfer) {
  console.log("entered")
  if (number === 1) {
    restLocation = "Berlin"
    restText = "Braserie Gendarmenmarkt, " + restLocation
    console.log(restLocation)
    if (retransfer) router.push('/rest1')
  } else if (number === 2) {
      restLocation = "Frankfurt"
      restText = "Imbiss Hoppner, " + restLocation
      console.log(restLocation)
      if (retransfer) this.router.push('/rest2')
    } else if (number === 3) {
      restLocation = "Reykjavík"
      restText = "Hotel Atlantis, " + restLocation
      console.log(restLocation)
      if (retransfer) router.push('/rest3')
    }
    loadWeather()
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Restaurantauswahl
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" @click="setRestLocation(1, true)">Restaurant 1</a></li>
              <li><a class="dropdown-item" @click="setRestLocation(2, true)">Restaurant 2</a></li>
              <li><a class="dropdown-item" @click="setRestLocation(3, true)">Restaurant 3</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <a class="navbar-text">{{restText}}</a>
      <a class="navbar-text">{{weatherDegree}}</a>
      <img v-bind:src="imageURL">
      <logout-button></logout-button>
      <login-button></login-button>
    </div>
  </nav>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.navbar {
  //background-color: #007bff;
  //color: #fff;
  padding: 10px;
  text-align: left;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar a {
  text-decoration: none;
  //color: #fff;
  margin: 0 15px;
  font-weight: bold;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>