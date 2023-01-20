<script setup lang="ts">

import { defineProps, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCardsStore } from '../stores/cards'
import Card from '@/components/Card.vue'

const props = defineProps<{
    name: string,
    id: string,
    organization: string,
}>()

// we fetch cards from the zone id
const store = useCardsStore()

// to be reactive, a list shall be computed (otherwise, element changes
// won't be noticed)
const cards = computed(() => store.getCards(props.id))

function computeStyle(index: number): string {
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


function onDrop(evt: DragEvent) {
  console.log('drop sur une zone')
  if (evt.dataTransfer != null) {
    const cardId = evt.dataTransfer.getData('cardId')
    const zoneIdSource = evt.dataTransfer.getData('zoneId')
    store.moveCard(zoneIdSource, props.id, cardId)
  }
}

</script>

<template>

<div :title="id" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
  <div class="zone-title">{{ name }}</div>

  <div v-for="(card, index) in cards">
      <Card :key="card.id" :id="card.id" :style="computeStyle(index)"  :name="card.name"
        :urlFront="card.urlFront" :urlBack="card.urlBack" :flipped="card.flipped" :zoneId="props.id"></Card>
  </div>
</div>

</template>
