import type { ICard } from '@/interfaces/ICard'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// cards are put by zones in a map like manner
type ICardsByZone = Record<string, Array<ICard>>

export const useCardsStore = defineStore('cards', () => {

  // current keyboad key pressed
  const currentKey = ref('')
  // current card that is displayed by hovering the mouse
  const currentCard = ref({} as ICard)
  const cardsByZone = ref({} as ICardsByZone)
  const allCards = ref(Array<ICard>())

  function getCardFromId(cardId: string) {
      const cards = allCards.value.filter(c => c.id == cardId)
      return cards.length ? cards[0] : null
  }

  function addCards(zoneId: string, cards: Array<ICard>) {
    if (!cardsByZone.value[zoneId]) {
        cardsByZone.value[zoneId] = Array<ICard>()
    }
    cardsByZone.value[zoneId].push(...cards)
    allCards.value.push(...cards)
  }

  function moveCard(zoneIdSource: string, zoneIdDest: string, cardId: string) {
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

  function getCards(zoneId: string) {
    if (cardsByZone.value[zoneId]) {
        return cardsByZone.value[zoneId]
    }
    return []
  }

  function removeCard(zoneId: string, cardId: string) {
    // FIXME
    if (cardsByZone.value[zoneId]) {
        cardsByZone.value[zoneId].pop()
    }
  }

  function setCurrentCard(card: ICard) {
    currentCard.value = card
  }

  function setCurrentKey(key: string) {
    currentKey.value = key
  }

  return { currentKey, currentCard, allCards, cardsByZone, addCards, getCards, removeCard, moveCard, setCurrentCard, setCurrentKey }
})

