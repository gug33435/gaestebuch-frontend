<template>
  <main>
    <div>
      <Form></Form>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script setup>
import Form from "../components/submitForm.vue";
</script>