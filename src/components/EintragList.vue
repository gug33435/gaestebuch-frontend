<script setup>
import {ref} from "vue";
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route.path)
let test = ref(await ausführen())
for (let valueKey in test.value) {
  test.value[valueKey].publishDate = (new Date(test.value[valueKey].publishDate)).toLocaleDateString()
}

async function ausführen() {
  try {
    const response = await fetch('http://localhost:8080/eintrag/all')
    const save = await response.json()
    return save.reverse().filter(function(item) {
      return item.restID === parseInt(route.path.replace("/rest", ""))
    })
  } catch (error) {
    console.error(error)
  }
}

console.log(JSON.stringify(test.value))
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
      <small>{{item.publishDate}}</small>
    </a>
  </div>
</template>

<style scoped>
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