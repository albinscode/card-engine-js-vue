<script setup lang="ts">

import { defineProps, ref } from 'vue'
import Card from '../components/Card.vue'
const props = defineProps({
    name: String,
    id: String,
    cards: Array,
})

</script>

<template>

<div :title="id">
{{ name }}

  <div v-for="card in cards">
      <div :name="card.name"></div>
      <Card :key="card.id" :name="card.name" :urlFront="card.urlFront"></Card>
  </div>
</div>

</template>
