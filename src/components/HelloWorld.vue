<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})

let test = "haha"
async function initialise() {
  fetch("localhost:8080/eintrag/all")
      .then(response => {
        return response.json()
      })
      .then(data => {
        test = JSON.stringify(data)
      })
}

initialise();
</script>

<template>
  <div class="greetings">
    <h1 class="green">msg</h1>
    <h3>
      Hello World!
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
