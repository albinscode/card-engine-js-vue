<script setup lang="ts">
/* import TheWelcome from '../components/TheWelcome.vue' */
import DefaultTable from './DefaultTable.vue'


import { useCardsStore } from '@/stores/cards'

const store = useCardsStore()

document.addEventListener('keydown', (evt) => {
  store.setCurrentKey(evt.key)
})

document.addEventListener('keyup', (evt) => {
  store.setCurrentKey('')
})

</script>

<template>
  <main>
    <DefaultTable />
  </main>
</template>
