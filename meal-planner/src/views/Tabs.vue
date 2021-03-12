<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom" color="primary">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="albumsOutline" />
          <ion-label>Recipes</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="cartOutline" />
          <ion-label>Shopping list</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="listOutline" />
          <ion-label>Pantry</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :icon="calendarOutline" />
          <ion-label>Calendar</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { albumsOutline, cartOutline, listOutline, calendarOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      albumsOutline, 
      cartOutline, 
      listOutline,
      calendarOutline,
    }
  }
}
</script>