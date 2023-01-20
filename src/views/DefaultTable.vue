<script setup lang="ts">
import Zone from '@/components/Zone.vue'
import { onMounted } from 'vue'
import { useCardsStore } from '@/stores/cards'

/* onMounted(() => { */
    const cards = [{
        id: 'autogen',
        name: 'bonding',
        urlFront: 'https://vdb.im/images/cards/en-EN/bonding.jpg',
        urlBack: 'https://vdb.im/images/cards/en-EN/bonding.jpg',
        flipped: false,
        },
        {
        id: 'autogen2',
        name: 'bonding',
        urlFront: 'https://vdb.im/images/cards/en-EN/bonding.jpg',
        urlBack: 'https://vdb.im/images/cards/en-EN/bonding.jpg',
        flipped: false,
        },
        {
        id: 'autogen3',
        name: 'blood dool',
        urlFront: 'https://vdb.im/images/cards/en-EN/blooddoll.jpg',
        urlBack: 'https://vdb.im/images/cards/en-EN/blooddoll.jpg',
        flipped: false,
        },
    ]
    const store = useCardsStore()
    store.addCards('deck1', cards)
/* }) */
</script>

<template>
  <div id="table-wrapper">
      <Zone class="zone zone-line1" 
        id="uncontrolled1" name="Uncontrolled Region"
        organization=""
        ></Zone>
      <div class="zone-deck-crypt">
          <Zone class="zone" id="crypt1" name="Crypt"
            organization="" 
           ></Zone>
          <Zone class="zone" id="deck1" name="Deck"
            organization="" 
          ></Zone>
      </div>
  </div>
</template>

<style>

#table-wrapper {
    display: flex;
    flex-direction: column;
}
.zone {
    min-height: 200px;
    min-width: 150px;
    border: 1px solid;
}
.zone-line1 {
    flex: 1 100px;
}
.zone-deck-crypt {
    display: flex;
    flex-direction: row;
}

</style>
