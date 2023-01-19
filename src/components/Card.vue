<script setup lang="ts">

import { defineProps } from 'vue'
const props = defineProps({
    name: String,
    id: String,
    style: String,
    urlFront: String,
    urlUrlBack: String,
    flipped: Boolean,
})
</script>

<template>

<div class="card" :title="id" :style="style">
    <div>{{ name }}</div>
    <div>{{ content }}</div>
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
