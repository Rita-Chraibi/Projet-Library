<script setup>
import { ref, defineEmits } from "vue";
const libelle = ref("");
const emit = defineEmits(["chercherLivre"]);
</script>

<template>
  <form @submit.prevent="$emit('chercherLivre', libelle)">
    <input type="text" v-model="libelle" placeholder="mot clé" id="motcle" />
    <button type="submit">Rechercher</button>
  </form>
</template>

<style>
form {
  margin: 30px auto;
  align-items: center;
}
input {
  color: black;
  border: 0.5px solid white;
  background-color: rgb(231, 185, 185);
  height: 30px;
  border-radius: 10px;
  width: 200px;
}
</style>