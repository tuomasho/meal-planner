<template>
  <ion-input :placeholder="ingredient.strAmmount"></ion-input>
  <ion-input :placeholder="ingredient.strName"></ion-input>
</template>

<script lang="ts">
import { IonInput } from "@ionic/vue";

export default {
  name: "IngredientInput",
  components: {
    IonInput,
  },
  props: {
    ingredient: Object,
  },
};
</script>