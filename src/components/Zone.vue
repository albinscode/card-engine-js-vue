<script setup lang="ts">

import { defineProps, ref } from 'vue'
import { useCardsStore } from '../stores/cards.ts'
import Card from '../components/Card.vue'

const props = defineProps({
    name: String,
    id: String,
    organization: String,
})

// we fetch cards from the zone id
const store = useCardsStore()

const cards = store.getCards(props.id)

function computeStyle(index) {
console.log(props.organization)
    if (props.organization == 'test') {
        return ''
    }
    else {
        if (index == 0) {
            return ''
        }
        return `margin-top: -170px`
    }
}

</script>

<template>

<div :title="id">
{{ name }}

  <div v-for="(card, index) in cards">
      <Card :key="card.id" :style="computeStyle(index)"  :name="card.name" :urlFront="card.urlFront"></Card>
  </div>
</div>

</template>
