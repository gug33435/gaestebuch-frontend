<script setup>
import {useRoute} from 'vue-router';
import {onMounted, ref, watch} from "vue";
import router from "@/router";
import {useAuth0} from "@auth0/auth0-vue";
const route = useRoute() || { path: '/rest1'}
const { user, isAuthenticated} = useAuth0()
let test = ref({})
let emailVal = ""
checkEmail()

function checkEmail() {
  if (isAuthenticated.value) {
    emailVal = user.value.email
  } else emailVal = ""
}

watch(
    () => route.path,
    async newId => {
      checkEmail()
      loadUpdate()
    },
    {
      immediate: true
    }
)

function transfer(id) {
  router.push('/editEintrag/' + id)
}

function transfer2() {
  router.push('/newEintrag/' + route.name)
}

onMounted(() => {
  loadUpdate()
})

function loadUpdate() {
  const reqeustOptions = {
    method: 'GET'
  }
  const endpoint = 'https://gaestebuch-backend.onrender.com/eintrag/all'
  fetch(endpoint, reqeustOptions)
      .then(response => response.json())
      .then(result => {
        const final = result.filter(function(item) {
          return item.restID === parseInt(route.path.replace("/rest", ""))
        })
        test.value = final.sort(function(a, b) {
          return b.publishDate - a.publishDate
        })
        for (let valueKey in test.value) {
          test.value[valueKey].publishDate = (new Date(test.value[valueKey].publishDate)).toLocaleDateString()
        }
      })
}

async function pushtoBackend(id) {
  await fetch("https://gaestebuch-backend.onrender.com/eintrag/delete/" + id, { method: 'DELETE'})
      .then (response => {
        loadUpdate()
      })
}
</script>

<template>
  <div class="list-group" v-for="item in test" :key="item.id">
    <a class="list-group-item list-group-item-action active" aria-current="true" v-bind:v-b-toggle="item.id">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{item.name}}</h5>
        <div class="rate" v-if="item.visitRating === 0">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text">1 star</label>
        </div>
        <div class="rate" v-else-if="item.visitRating === 1">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text" style="color: gold">1 star</label>
        </div>
        <div class="rate" v-else-if="item.visitRating === 2">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text" style="color: gold">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text" style="color: gold">1 star</label>
        </div>
        <div class="rate" v-else-if="item.visitRating === 3">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text" style="color: gold">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text" style="color: gold">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text" style="color: gold">1 star</label>
        </div>
        <div class="rate" v-else-if="item.visitRating === 4">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text" style="color: gold">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text" style="color: gold">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text" style="color: gold">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text" style="color: gold">1 star</label>
        </div>
        <div class="rate" v-else-if="item.visitRating === 5">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text" style="color: gold">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text" style="color: gold">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text" style="color: gold">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text" style="color: gold">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text" style="color: gold">1 star</label>
        </div>
      </div>
      <p class="mb-1">{{item.text}}</p>
      <div class="d-flex w-100 justify-content-between">
        <small class="my-auto">{{item.publishDate}}</small>
        <button v-if="emailVal === item.email" class="btn btn-danger my-auto" @click="pushtoBackend(item.id)">Löschen</button>
        <button v-if="emailVal === item.email" class="btn btn-outline-light my-auto" @click="transfer(item.id)">Bearbeiten</button>
      </div>
    </a>
  </div>
  <div id="buttondiv" class="list-group">
    <button @click="transfer2" class="">Neuer Eintrag</button>
  </div>
</template>

<style scoped>
#buttondiv {
  text-align: center;
}
.list-group {
  margin: 10px;
  flex-grow: 1;
}
*{
  margin: 0;
  padding: 0;
}
body{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.rate {
  float: left;
  height: 46px;
  padding: 0 10px;
}
.rate:not(:checked) > input {
  position:absolute;
  top:-9999px;
}
.rate:not(:checked) > label {
  float:right;
  width:1em;
  overflow:hidden;
  white-space:nowrap;
  font-size:30px;
  color:#ccc;
}
.rate:not(:checked) > label:before {
  content: '★ ';
}
</style>