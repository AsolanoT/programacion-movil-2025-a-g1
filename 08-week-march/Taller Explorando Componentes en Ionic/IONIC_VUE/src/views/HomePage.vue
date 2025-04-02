<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Página Principal</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h2>Bienvenido a nuestra tienda</h2>
      <p>Explora nuestros productos y contacta con nosotros.</p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  },
});
</script>
