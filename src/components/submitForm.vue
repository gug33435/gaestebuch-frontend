<script setup>
import moment from "moment";
import router from "../router";
import { useRoute } from 'vue-router';
import {useAuth0} from "@auth0/auth0-vue";
const { user } = useAuth0()
let route = parseInt(useRoute().path.replace("/newEintrag/", ""))
const email = user.value.email

const pushToBackEnd = async(fields) => {
  await new Promise((r) => setTimeout(r, 1000))
  const endpoint = 'https://gaestebuch-backend.onrender.com/eintrag'
  const data = {
    text: fields.beschreibung,
    visitRating: parseInt(fields.bewertung),
    publishDate: moment(fields.date).utc().format('YYYY-MM-DD'),
    restID: route,
    name: fields.name,
    email: email
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