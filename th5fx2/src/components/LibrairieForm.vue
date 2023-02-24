<script setup>
import { ref, defineEmits, reactive } from "vue";
import Livre from "../Livre.js";
const emit = defineEmits(["ajouter"]);

const newLivre = reactive({ titre: "", qtestock: "", prix: "" });
</script>

<template>
  <div class="form">
    <h3>Ajout d'un livre</h3>
    <form @submit.prevent="$emit('ajouter', newLivre)" class="champs">
      <input
        type="text"
        v-model="newLivre.titre"
        placeholder="Titre"
        id="titre"
        class="titre"
      />
      <input
        type="number"
        v-model="newLivre.qtestock"
        placeholder="Quantité"
        id="quantite"
      />
      <input
        type="number"
        v-model="newLivre.prix"
        placeholder="Prix"
        id="prix"
      />
      <div class="ajouter">
        <input type="submit" value="Ajouter" />
      </div>
    </form>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 10px;
  color: black;
}
input {
  color: black;
  border: 0.5px solid white;
  background-color: rgb(231, 185, 185);
  height: 30px;
  border-radius: 10px;
  width: 200px;
}
form {
  margin: 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
@media (max-height: 480px), screen and (orientation: portrait) {
  h3 {
    font-size: 20px;
  }
  form {
    flex-direction: column;
    align-items: center;
  }
  input {
    width: 150px;
  }
}
</style>
