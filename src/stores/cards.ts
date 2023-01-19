import { defineStore } from 'pinia'
import { ref } from 'vue'

// cards are put by zones in a map
export const useCardsStore = defineStore('cards', () => {
  const cardsByZone = ref({})
  // const doubleCount = computed(() => count.value * 2)
  function addCards(zoneId, cards) {
    if (!cardsByZone.value[zoneId]) {
        cardsByZone.value[zoneId] = []
    }
    cardsByZone.value[zoneId].push(...cards)
  }
  function getCards(zoneId) {
    if (cardsByZone.value[zoneId]) {
        return cardsByZone.value[zoneId]
    }
    return []
  }

  return { cardsByZone, addCards, getCards }
})

