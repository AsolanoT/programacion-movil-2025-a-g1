<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Contacto</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Contacto</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-icon slot="start" :icon="mailOutline"></ion-icon>
              <ion-label>Email: contacto@empresa.com</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon slot="start" :icon="callOutline"></ion-icon>
              <ion-label>Teléfono: +123456789</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon slot="start" :icon="locationOutline"></ion-icon>
              <ion-label>Ubicación: Calle 123, Ciudad</ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/vue";
import { mailOutline, callOutline, locationOutline } from "ionicons/icons";

export default defineComponent({
  name: "ContactPage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
  },
  setup() {
    return { mailOutline, callOutline, locationOutline };
  },
});
</script>
