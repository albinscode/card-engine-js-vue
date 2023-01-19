<script setup lang="ts">
import Zone from '../components/Zone.vue'
const cards = [{
    id: 'autogen',
    name: 'bonding',
    urlFront: 'https://vdb.im/images/cards/en-EN/bonding.jpg',
    urlBack: 'https://vdb.im/images/cards/en-EN/bonding.jpg',
    },
]
</script>

<template>
  <div id="table-wrapper">
      <Zone class="zone zone-line1" id="uncontrolled1" name="Uncontrolled Region"></Zone>
      <div class="zone-deck-crypt">
          <Zone class="zone" id="crypt1" name="Crypt"></Zone>
          <Zone class="zone" id="deck1" name="Deck" :cards="cards"></Zone>
      </div>
  </div>
</template>

<style>

#table-wrapper {
    display: flex;
    flex-direction: column;
}
.zone {
    min-height: 300px;
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
