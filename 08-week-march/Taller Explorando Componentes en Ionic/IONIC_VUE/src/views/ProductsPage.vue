<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Productos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-searchbar
        v-model="searchTerm"
        placeholder="Buscar productos..."
        animated
        debounce="300"
      ></ion-searchbar>

      <ion-list>
        <ion-item
          v-for="product in filteredProducts"
          :key="product.id"
          :detail="true"
          @click="viewProduct(product)"
        >
          <ion-thumbnail slot="start">
            <img :src="product.image" :alt="product.name" />
          </ion-thumbnail>
          <ion-label>
            <h2>{{ product.name }}</h2>
            <p>{{ product.category }}</p>
            <ion-badge color="success">${{ product.price }}</ion-badge>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonSearchbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonBadge,
} from "@ionic/vue";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

export default defineComponent({
  name: "ProductsPage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonSearchbar,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonBadge,
  },
  setup() {
    const searchTerm = ref("");

    const products: Product[] = [
      {
        id: 1,
        name: "Smartphone X",
        category: "Electrónicos",
        price: 799,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsSvUD3rZ7XDBa7IhVE7Sx38W4qjgdMu8bg&s",
      },
      {
        id: 2,
        name: "Laptop Pro",
        category: "Computadoras",
        price: 1299,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsSvUD3rZ7XDBa7IhVE7Sx38W4qjgdMu8bg&s",
      },
      {
        id: 3,
        name: "Auriculares BT",
        category: "Audio",
        price: 199,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsSvUD3rZ7XDBa7IhVE7Sx38W4qjgdMu8bg&s",
      },
      {
        id: 4,
        name: "Smart Watch",
        category: "Wearables",
        price: 249,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsSvUD3rZ7XDBa7IhVE7Sx38W4qjgdMu8bg&s",
      },
    ];

    const filteredProducts = computed(() => {
      return products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
          product.category
            .toLowerCase()
            .includes(searchTerm.value.toLowerCase())
      );
    });

    const viewProduct = (product: Product) => {
      console.log("Producto seleccionado:", product);
      // Aquí iría la navegación al detalle del producto
    };

    return {
      searchTerm,
      filteredProducts,
      viewProduct,
    };
  },
});
</script>

<style scoped>
ion-thumbnail {
  --size: 80px;
  --border-radius: 8px;
}

ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

ion-searchbar {
  padding: 0;
  margin-bottom: 16px;
}
</style>
