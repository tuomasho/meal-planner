<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Recipes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button
          @click="
            () => {
              router.push(`/AddRecipe/`)
            }
          "
        >
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <ion-list>
        <ion-list-header>
          <ion-label>List header</ion-label>
        </ion-list-header>
        <ion-item v-for="item in 5" :key="item">
          <ion-label>Item</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/vue";
import { add } from "ionicons/icons";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import Recipe from "../interfaces/IRecipe";

export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonListHeader,
    IonLabel,
    IonItem,
    IonFab,
    IonFabButton,
    IonIcon,
  },

  setup() {
    const router = useRouter();

    const state = reactive({
      lstRecipes: [] as Recipe[],
      loading: false,
    });

    const addRecipe = () => {
      console.log("add new recipe");
    };

    return {
      add,
      addRecipe,
      router,
      state,
    };
  },
};
</script>