<script setup lang="ts">

import { defineProps, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCardsStore } from '../stores/cards'
import Card from '../components/Card.vue'

const props = defineProps({
    name: String,
    id: String,
    organization: String,
})

// we fetch cards from the zone id
const store = useCardsStore()

// to be reactive, a list shall be computed (otherwise, element changes
// won't be noticed)
const cards = computed(() => store.getCards(props.id))

function computeStyle(index: number) {
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


function onDrop(evt) {
  console.log('drop sur une zone')
  const cardId = evt.dataTransfer.getData('cardId')
  const zoneIdSource = evt.dataTransfer.getData('zoneId')
  console.log(cardId)
  store.moveCard(zoneIdSource, props.id, cardId)
}

</script>

<template>

<div :title="id" @drop="onDrop($event, id)" @dragover.prevent @dragenter.prevent>
{{ name }}

  <div v-for="(card, index) in cards">
      <Card :key="card.id" :id="card.id" :style="computeStyle(index)"  :name="card.name"
        :urlFront="card.urlFront" :zoneId="props.id"></Card>
  </div>
</div>

</template>
