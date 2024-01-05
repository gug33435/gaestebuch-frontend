<script setup>
import { useRoute } from 'vue-router';
import {ref} from "vue";
import data from "bootstrap/js/src/dom/data";
import moment from "moment/moment";
import router from "@/router";

const route = useRoute()

let dataForID = ref(await ausführen())

async function ausführen() {
  try {
    const response = await fetch('http://localhost:8080/eintrag/' + route.path.replace("/editEintrag/", ""))
    const save = await response.json()
    return save
  } catch (error) {
    console.error(error)
  }
}

const pushToBackEnd = async(fields) => {
  await new Promise((r) => setTimeout(r, 1000))
  const endpoint = 'http://localhost:8080/eintrag'
  const data = {
    id: route.path.replace("/editEintrag/", ""),
    text: fields.beschreibung,
    restID: dataForID.value.restID,
    visitRating: parseInt(fields.bewertung),
    publishDate: moment(fields.date).utc().format('YYYY-MM-DD'),
    name: fields.name,
    email: dataForID.value.email
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
        router.push({path: '/rest' + dataForID.value.restID})
      })
}
</script>

<template>
  <FormKit type="form" @submit="pushToBackEnd">
    <FormKit
        v-model="dataForID.visitRating"
        type="rating"
        name="bewertung"
        label="Bewertung"
        step="1"
        :value="dataForID.visitRating"
    />
    <FormKit
        v-model="dataForID.text"
        type="textarea"
        name="beschreibung"
        label="Bitte beschreibe deine Erfahrung"
        validation="length:0,500"
        validation-visibility="live"
        validation-messages="{
        length: 'Bitte nicht mehr als 500 Zeichen!',
      }"
        :value="dataForID.text"
    />
    <FormKit
        v-model="dataForID.name"
        type="text"
        name="name"
        label="Name"
        help="Your full name"
        placeholder=""
        :value="dataForID.name"
    />
    <FormKit
        v-model="dataForID.publishDate"
        type="datepicker"
        name="date"
        label="Datum des letzten Besuchs"
        picker-only
        :max-date="new Date()"
        :value="dataForID.publishDate"
    />
  </FormKit>
</template>

<style scoped>

</style>