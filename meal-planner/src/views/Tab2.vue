<template>
  <ion-page>
    <ToolBar :mainPage="true" :title="'Shopping list'" />
    <ion-content :fullscreen="true">
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="AddNewShoppingItem">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <ion-list>
        <ion-list-header>
          <ion-label></ion-label>
        </ion-list-header>
          <ion-item v-for="item in state.lstShoppingItems" :key="item.strName">              
              <ion-checkbox slot="start"></ion-checkbox>
              <ion-input placeholder="Input shopping item"></ion-input>           
          </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonCheckbox,
  IonInput,
  IonLabel,
  IonFabButton,
  IonFab,
  IonIcon,
} from "@ionic/vue";
import ToolBar from "@/components/ToolBar.vue";
import { add } from "ionicons/icons";
import { reactive } from "vue";
import ShoppingItem from "../interfaces/IShoppingItem";

export default {
  name: "Tab2",
  components: {
    IonContent,
    IonPage,
    ToolBar,
    IonList,
    IonListHeader,
    IonItem,
    IonCheckbox,
    IonInput,
    IonLabel,
    IonFabButton,
    IonFab,
    IonIcon,
  },

  setup(){
    const state = reactive({
      lstShoppingItems: [] as ShoppingItem[]
    });

    const AddNewShoppingItem = () => {
      state.lstShoppingItems.push({
        blnGotten: false,
        strName: "",
      })
    }

    return {
      state,
      add,
      AddNewShoppingItem,
    }
  }
};
</script>