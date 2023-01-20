<script setup lang="ts">

import { defineProps } from 'vue'
import type { ICard } from '@/interfaces/ICard'

// props need some UI properties
export interface ICardProps extends ICard {
    zoneId: string,
    style: string,
}

const props = defineProps<ICardProps>()

function dragStart(evt: DragEvent) {
  console.log('Entering drag')
  if (evt.dataTransfer != null) {
    evt.dataTransfer.dropEffect = 'move'
    evt.dataTransfer.effectAllowed = 'move'

    // data to pass to the drop event
    evt.dataTransfer.setData('cardId', props.id)
    evt.dataTransfer.setData('zoneId', props.zoneId)

    // setting image seen while doing drag
    let img: HTMLImageElement = new Image();
    img.src = props.urlFront;
    evt.dataTransfer.setDragImage(img, 10, 10);
  }
}

function onDrop(evt: DragEvent) {
  console.log('drop sur une carte')
}

</script>

<template>

<!-- A card can be dragged and dropped -->
<!-- It has also a style that will be computed by parent zone to put arrange
them in the zone space -->
<div class="card" :title="id" :style="style"
    @drop.prevent="onDrop($event)"
    @dragstart="dragStart($event)"
    draggable="true">
    <div>{{ name }}</div>
    <img v-if="flipped" :src="urlBack" class="img" />
    <img v-else :src="urlFront" class="img" />
</div>

</template>

