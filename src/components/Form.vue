<script setup>
import moment from "moment";
import router from "../router";
import { useRoute } from 'vue-router';
let route = parseInt(useRoute().path.replace("/newEintrag/", ""))
console.log(route)

const pushToBackEnd = async(fields) => {
  await new Promise((r) => setTimeout(r, 1000))
  const endpoint = 'http://localhost:8080/eintrag'
  const data = {
    text: fields.beschreibung,
    visitRating: parseInt(fields.bewertung),
    publishDate: moment(fields.date).utc().format('YYYY-MM-DD'),
    restID: route,
    name: fields.name,
    email: fields.email
  }
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Success: ', data)
        router.push({path: '/rest' + route})
      })
}
</script>

<template>
  <FormKit type="form" @submit="pushToBackEnd">
    <FormKit
        type="rating"
        name="bewertung"
        label="Bewertung"
        step="1"
    />
    <FormKit
      type="textarea"
      name="beschreibung"
      label="Bitte beschreibe deine Erfahrung"
      validation="length:0,500"
      validation-visibility="live"
      validation-messages="{
        length: 'Bitte nicht mehr als 500 Zeichen!',
      }"
    />
    <FormKit
        type="text"
        name="name"
        label="Name"
        help="Your full name"
        placeholder="Max Mustermann"
    />
    <FormKit
        type="email"
        name="email"
        label="Ihre private E-Mail-Adresse:"
    />
    <FormKit
        type="datepicker"
        name="date"
        label="Datum des letzten Besuchs"
        picker-only
        :max-date="new Date()"
    />
  </FormKit>
</template>

<style scoped>

</style>