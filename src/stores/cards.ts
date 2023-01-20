import { defineStore } from 'pinia'
import { ref } from 'vue'

// cards are put by zones in a map
export const useCardsStore = defineStore('cards', () => {
  const cardsByZone = ref({})
  const allCards = ref([])

  function getCardFromId(cardId) {
      const cards = allCards.value.filter(c => c.id == cardId)
      return cards.length ? cards[0] : null
  }
  function addCards(zoneId, cards) {
    if (!cardsByZone.value[zoneId]) {
        cardsByZone.value[zoneId] = []
    }
    cardsByZone.value[zoneId].push(...cards)
    allCards.value.push(...cards)
  }
  function moveCard(zoneIdSource, zoneIdDest, cardId) {
    if (!cardsByZone.value[zoneIdDest]) {
        cardsByZone.value[zoneIdDest] = []
    }
    const card = getCardFromId(cardId)
    cardsByZone.value[zoneIdSource] = cardsByZone.value[zoneIdSource].filter(c => c.id != cardId)
    if (card != null) {
       cardsByZone.value[zoneIdDest].push(card)
    }
    else {
        console.log('Cannot move a card not found!')
    }

  }
  function getCards(zoneId) {
    if (cardsByZone.value[zoneId]) {
        return cardsByZone.value[zoneId]
    }
    return []
  }
  function removeCard(zoneId, cardId) {
    // FIXME
    if (cardsByZone.value[zoneId]) {
        cardsByZone.value[zoneId].pop(0)
    }
  }

  return { allCards, cardsByZone, addCards, getCards, removeCard, moveCard }
})

