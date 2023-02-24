<script setup>
import { defineEmits, defineProps } from "vue";
const props = defineProps(["Livre"]);
const emit = defineEmits(["deletelivre", "augmenterQte", "diminuerQte"]);
</script>

<template>
  <tr>
    <td>{{ Livre.titre }}</td>
    <td>{{ Livre.qtestock }}</td>
    <td>{{ Livre.prix }} $</td>
    <td>
      <button @click="$emit('deletelivre', props.Livre.id)">suprimer</button>
    </td>
    <td>
      <button @click="$emit('augmenterQte', Livre)">+</button>
    </td>
    <td>
      <button @click="$emit('diminuerQte', props.Livre)">-</button>
    </td>
  </tr>
</template>
<style scoped>
button {
  font-size: 7;
  border: 1px solid;
  height: 20px;
}
</style>

