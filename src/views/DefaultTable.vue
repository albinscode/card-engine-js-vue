<script setup lang="ts">
import Zone from '@/components/Zone.vue'
import { onMounted } from 'vue'
import { useCardsStore } from '@/stores/cards'
import { ZoneLayouts } from '@/interfaces/IZone'
import { storeToRefs } from 'pinia'

// FIXME put it into jsonserver
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
const { currentCard } = storeToRefs(store)

store.addCards('deck1', cards)

</script>

<template>
  <div id="table-wrapper">
      <div class="zone-line">
          <Zone class="zone zone-full" id="ready1" name="Ready"
            layout="row"
          ></Zone>
      </div>
      <div class="zone-line">
          <Zone class="zone" id="deck1" name="Deck"
            layout="stack"
          ></Zone>
          <Zone class="zone" id="ashHeap1" name="AshHeap"
            layout="stack"
          ></Zone>
          <Zone class="zone zone-full" id="torpor1" name="Torpor"
            layout="row"
          ></Zone>
      </div>
      <div class="zone-line">
          <Zone class="zone" id="crypt1" name="Crypt"
            layout="stack"
           ></Zone>
           <Zone class="zone zone-full"
             id="uncontrolled1" name="Uncontrolled Region"
             layout="row"
             ></Zone>
      </div>
      <div class="zone-line">
          <Zone class="zone zone-full" id="hand1" name="Hand"
            layout="row-shifted"
           ></Zone>
      </div>
      <div class="card-view" v-if="currentCard.urlFront != null">
          <img :src="currentCard.urlFront" />
      </div>
      <div class="card-context-menu">
          <div>action1</div>
          <div>action2</div>
      </div>
  </div>
</template>

<style>

#table-wrapper {
    display: flex;
    flex-direction: column;
    min-width: 1024px;
}
.zone {
    min-height: 200px;
    min-width: 150px;
    border: 1px solid;
}
.zone-full {
    flex: 1 1 100%;
}
.zone-line {
    display: flex;
    flex-direction: row;
}
/* zone layout managed only by css in this case */
.zone-layout-row {
    display: flex;
    flex-direction: row;
}
/* card part */
.card {
    min-width: 100px;
    max-width: 100px;
    min-height: 165px;
    max-height: 165px;
    border: 1px solid;
    background: lightgrey;
    margin-left: 20px;
}
/* we apply a margin top from the second to nth element */
.zone-layout-stack .card-wrapper:nth-of-type(n+2) {
    margin-top: -165px;
}
.zone-layout-stack-shifted .card-wrapper:nth-of-type(n+2) {
    margin-top: -100%;
}
.zone-layout-row .card {
    /* margin-right: 20px; */
}
.zone-layout-row .card {
    margin-left: 20px;
}

.zone-layout-row-shifted {
    display: flex;
    flex-direction: row;
}
.zone-layout-row-shifted .card-wrapper:nth-of-type(n+2) {
    margin-left: -75px;
}

.card .img {
    width: 100px;
}

.card-view {
  position: absolute;
  bottom: 0;
}
.card-context-menu {
  /* position: absolute; */
}

</style>
