<script setup lang="ts">

import { defineProps } from 'vue'
import type { ICard } from '@/interfaces/ICard'
import { useCardsStore } from '@/stores/cards'

// props need some UI properties
export interface ICardProps {
    card: ICard,
    zoneId: string,
    style: string,
}

const store = useCardsStore()

const props = defineProps<ICardProps>()

function dragStart(evt: DragEvent) {
  console.log('Entering drag')
  if (evt.dataTransfer != null) {
    evt.dataTransfer.dropEffect = 'move'
    evt.dataTransfer.effectAllowed = 'move'

    // data to pass to the drop event
    evt.dataTransfer.setData('cardId', props.card.id)
    evt.dataTransfer.setData('zoneId', props.zoneId)

    // setting image seen while doing drag
    let img: HTMLImageElement = createFrontImage()
    evt.dataTransfer.setDragImage(img, 10, 10);
  }
}

function createFrontImage(): HTMLImageElement {
  let img: HTMLImageElement = new Image()
  img.src = props.card.urlFront
  return img
}

function onDrop(evt: DragEvent) {
  console.log('drop sur une carte')
}

// to display the card view (zoomed) we have to mouse over the
// card and press "z" key at the same time
function onMouseOver(evt: MouseEvent) {
  if (store.currentKey === 'z') {
    store.setCurrentCard(props.card)
  }
}
function onMouseLeave(evt: MouseEvent) {
  store.setCurrentCard({})
}

function onClick(evt: MouseEvent) {
  console.log('Aie girls')
  console.log(evt)
}


</script>

<template>

<!-- A card can be dragged and dropped -->
<!-- It has also a style that will be computed by parent zone to put arrange
them in the zone space -->
<div class="card" :title="card.id + ' - ' + card.name" :style="style"
    @drop.prevent="onDrop($event)"
    @dragstart="dragStart($event)"
    @mouseenter="onMouseOver($event)"
    @mouseleave="onMouseLeave($event)"
    @contextmenu.prevent="onClick($event)"
    draggable="true">
    <div>{{ card.name }}</div>
    <img v-if="card.flipped" :src="card.urlBack" class="img" />
    <img v-else :src="card.urlFront" class="img" />
</div>

</template>

