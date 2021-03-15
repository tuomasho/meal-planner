<template>
  <ion-page>
    <ToolBar :mainPage="false" :title="'Add new recipe'"/>
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
          :key="ingredient.idIngredient"
        >
          <ion-input :placeholder="ingredient.strAmmount"></ion-input>
          <ion-input :placeholder="ingredient.strName"></ion-input>
        </ion-item>

        <ion-button
          expand="full"
          fill="solid"
          color="primary"
          @click="addIngredient"
        >
          <ion-icon :icon="add"></ion-icon>
        </ion-button>

        <ion-list-header lines="none" mode="ios">
          <ion-label>Instructions:</ion-label>
        </ion-list-header>

        <ion-item
          v-for="instruction in state.lstInstructions"
          :key="instruction.idInstruction"
        >
          <ion-label> {{ instruction.strPhase }} </ion-label>
          <ion-textarea
            auto-grow="true"
            :placeholder="instruction.strDetails"
          ></ion-textarea>
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
  IonItem,
  IonLabel,
  IonTextarea,
  IonInput,
  IonList,
  IonListHeader,
  IonButton,
  IonIcon,
  IonContent,
} from "@ionic/vue";
import { reactive } from "vue";
import Ingredient from "../interfaces/IIngredient";
import Instruction from "../interfaces/IInstruction";
import { add, saveOutline } from "ionicons/icons";
import ToolBar from "@/components/ToolBar.vue";

export default {
  name: "AddRecipe",
  components: {
    IonPage,
    IonItem,
    IonLabel,
    IonTextarea,
    IonInput,
    IonList,
    IonListHeader,
    IonButton,
    IonIcon,
    ToolBar,
    IonContent,
  },

  setup() {
    const state = reactive({
      lstIngredients: [
        { idIngredient: "id0" , strName: "Ingredient", strAmmount: "Ammount" },
      ] as Ingredient[],
      lstInstructions: [
        { idInstruction: "temp", strDetails: "Fill here", strPhase: "1" },
      ] as Instruction[],

      instructionCount: 1,
      ingredientCount: 1,
    });

    const addIngredient = () => {
      state.ingredientCount += 1;
      state.lstIngredients.push({
        idIngredient: "id" + state.lstIngredients.length,
        strName: "Add Ingredient",
        strAmmount: "Add ammount",
      });
    };

    const addInstrcution = () => {
      state.instructionCount += 1;
      state.lstInstructions.push({
        idInstruction: ("temp" + state.lstInstructions.length) as string,
        strDetails: "Fill in here",
        strPhase: `${state.instructionCount}`,
      });
    };

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