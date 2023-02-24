<script setup>
import { defineEmits, defineProps } from "vue";
const props = defineProps(["Livre"]);
const emit = defineEmits(["deletelivre", "augmenterQte", "diminuerQte"]);
</script>

<template>
  <div class="livre">
    <div class="suprimer">
      <button @click="$emit('deletelivre', props.Livre.id)">✖</button>
    </div>
    <div class="titre" id="titre">{{ Livre.titre }}</div>
    <div class="prix" id="prix">{{ Livre.prix }} euros</div>
    <div class="quantite">
      {{ Livre.qtestock }}
      <button @click="$emit('augmenterQte', Livre)">+</button>
      <button @click="$emit('diminuerQte', props.Livre)">-</button>
    </div>
  </div>
</template>
<style scoped>
.livre {
  height: 200px;
  width: 200px;
  background-color: rgb(231, 185, 185);
  border-radius: 10px;
}
button {
  font-size: 5;
  border: 1px dotted;
  height: 20px;
  width: 40px;
  color: rgb(56, 5, 5);
  background-color: rgb(187, 212, 179);
}
.suprimer {
  display: flex;
  justify-content: flex-start;
}
.titre {
  margin-top: 30px;
  color: black;
  font: 25px solid;
  height: 50px;
  padding: 10px;
}
.prix {
  height: 30px;
  margin-top: 20px;
}
.quantite {
  display: flex;
  overflow: hidden;
  justify-content: left;
}
.prix {
  color: black;
  font: 15px solid;
}
@media (max-height: 480px) and (max-width: 300px),
  screen and (orientation: portrait) {
  .livre {
    height: 200px;
    width: 200px;
  }
}
</style>
