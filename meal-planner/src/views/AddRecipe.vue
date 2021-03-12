<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Add new recipe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-list-header lines="none" mode="ios">
          <ion-label>Details:</ion-label>
        </ion-list-header>
        <ion-item>
          <ion-label position="floating">Name</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Description</ion-label>
          <ion-textarea auto-grow="true"></ion-textarea>
        </ion-item>
        <ion-list-header lines="none" mode="ios">
          <ion-label>Ingredients:</ion-label>
        </ion-list-header>
        <ion-item
          v-for="ingredient in state.lstIngredients"
          :key="ingredient.strName"
        >
          <IngredientInput :ingredient="ingredient" />
        </ion-item>

        <ion-button
          expand="full"
          fill="solid"
          color="primary"
          @click="addIngredient"
        >
          <ion-icon :icon="add"></ion-icon>
        </ion-button>

        <ion-list-header>
          <ion-label>Instructions:</ion-label>
        </ion-list-header>

        <ion-item
          v-for="instruction in state.lstInstructions"
          :key="instruction.idInstruction"
        >
        </ion-item>

        <ion-button
          expand="full"
          fill="solid"
          color="primary"
          @click="addInstrcution"
        >
          <ion-icon :icon="add"></ion-icon>
        </ion-button>
      </ion-list>
      <ion-button expand="full" fill="solid" color="success">
        <ion-icon :icon="saveOutline"></ion-icon>
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
  IonTextarea,
  IonInput,
  IonList,
  IonListHeader,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { reactive } from "vue";
import Ingredient from "../interfaces/IIngredient";
import Instruction from "../interfaces/IInstruction";
import { add, saveOutline } from "ionicons/icons";
import IngredientInput from '@/components/IngredientInput.vue';

export default {
  name: "AddRecipe",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonItem,
    IonLabel,
    IonTextarea,
    IonInput,
    IonList,
    IonListHeader,
    IonButton,
    IonIcon,
    IngredientInput
  },

  setup() {

    const state = reactive({
      lstIngredients: [
        { strName: "Ingredient", strAmmount: "Ammount" },
      ] as Ingredient[],
      lstInstructions: [
        { idInstruction: "temp", strDetails: "Fill here", strPhase: "1" },
      ] as Instruction[],

      x: 1,
    });

    const addIngredient = () => {
      state.lstIngredients.push({
        strName: "Add Ingredient",
        strAmmount: "Add ammount",
      });
      console.log("add ingredient");
    };

    const addInstrcution = () => {

      state.x += 1;
      state.lstInstructions.push({
        idInstruction: "temp" + state.lstInstructions.length as string,
        strDetails: "Fill in here",
        strPhase: `${state.x}`,
      });
    }

    return {
      state,
      addIngredient,
      addInstrcution,
      add,
      saveOutline,
    };
  },
};
</script>