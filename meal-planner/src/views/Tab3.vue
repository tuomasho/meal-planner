<template>
  <ion-page>
    <ToolBar :mainPage="true" title="Storage" />
    <ion-content :fullscreen="true">
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="AddItemToStorage">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <ion-list>
        <ion-item-group>
          <ion-item-divider>
            <ion-label>Fridge</ion-label>
          </ion-item-divider>
          <ion-item v-for="item in state.lstInFridge" :key="item.idIngredient">
            <ion-label>Item in fridge</ion-label>
          </ion-item>
        </ion-item-group>
        <ion-item-group>
          <ion-item-divider>
            <ion-label>Pantry</ion-label>
          </ion-item-divider>
          <ion-item v-for="item in state.lstInPantry" :key="item.idIngredient">
            <ion-label>Item in pantry</ion-label>
          </ion-item>
        </ion-item-group>
        <ion-item-group>
          <ion-item-divider>
            <ion-label>Spices</ion-label>
          </ion-item-divider>
          <ion-item v-for="item in state.lstInSpcies" :key="item.idIngredient">
            <ion-label>{{item}}. item in spices</ion-label>
          </ion-item>
        </ion-item-group>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonList,
  IonItemGroup,
  IonLabel,
  IonItemDivider,
  IonItem,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/vue";
import ToolBar from "@/components/ToolBar.vue";
import { add } from "ionicons/icons";
import Ingredient from "../interfaces/IIngredient";
import { reactive } from "vue";

export default {
  name: "Tab3",
  components: {
    IonContent,
    IonPage,
    ToolBar,
    IonList,
    IonItemGroup,
    IonLabel,
    IonItemDivider,
    IonItem,
    IonFab,
    IonFabButton,
    IonIcon,
  },

  setup() {
    const state = reactive({
      lstInFridge: [] as Ingredient[],
      lstInPantry: [] as Ingredient[],
      lstInSpcies: [] as Ingredient[],
    })

    const AddItemToStorage = () => {
      console.log("Add item");
    }

    return {
      add,
      state,
      AddItemToStorage,
    }
  }
};
</script>