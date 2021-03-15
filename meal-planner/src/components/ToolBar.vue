<template>
    <ion-header>
        <ion-toolbar color="primary">
            <ion-buttons slot="start" v-if="!mainPage">
                <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title> {{title}}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script lang="ts">

import { IonButtons, IonBackButton, IonToolbar, IonTitle, IonHeader } from "@ionic/vue";

export default ({
    name: "ToolBar",
    components: {
        IonButtons,
        IonBackButton,
        IonToolbar,
        IonTitle,
        IonHeader,
    },

    props: {
        title: String,
        mainPage: Boolean,
    },
});
</script>