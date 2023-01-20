<script setup lang="ts">

import { defineProps } from 'vue'

const props = defineProps({
    name: String,
    id: String,
    style: String,
    urlFront: String,
    urlUrlBack: String,
    flipped: Boolean,
    zoneId: String,
})

function dragStart(evt) {
  evt.dataTransfer.dropEffect = 'move'
  evt.dataTransfer.effectAllowed = 'move'
  console.log(props.id)
  evt.dataTransfer.setData('cardId', props.id)
  evt.dataTransfer.setData('zoneId', props.zoneId)
  console.log('drag')
  let img = new Image();
  img.src = props.urlFront;
  evt.dataTransfer.setDragImage(img, 10, 10);
}
function onDrop(evt, list) {
  console.log('drop sur une carte')
  /* const itemID = evt.dataTransfer.getData('itemID') */
  /* const item = this.items.find((item) => item.id == itemID) */
  /* item.list = list */
}

</script>

<template>

<!-- A card can be dragged and dropped -->
<!-- It has also a style that will be computed by parent zone to put arrange
them in the zone space -->
<div class="card" :title="id" :style="style"
    @drop.prevent="onDrop($event, null)"
    @dragstart="dragStart($event)"
    draggable="true">
    <div>{{ name }}</div>
    <img v-if="flipped" :src="urlBack" class="img" />
    <img v-else :src="urlFront" class="img" />
</div>

</template>

<style>
.card {
    min-width: 100px;
    min-height: 200px;
    border: 1px solid;
    background: lightgrey;
}
.card .img {
    width: 100px;
}
</style>
