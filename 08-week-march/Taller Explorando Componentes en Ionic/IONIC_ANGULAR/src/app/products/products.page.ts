import { Component, signal } from '@angular/core';
import { 
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
  IonBadge 
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [
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
    FormsModule,
    CommonModule
  ]
})
export class ProductsPage {
  searchTerm = signal('');
  
  products: Product[] = [
    {
      id: 1,
      name: 'Smartphone X',
      category: 'Electrónicos',
      price: 799,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsSvUD3rZ7XDBa7IhVE7Sx38W4qjgdMu8bg&s'
    },
    {
      id: 2,
      name: 'Laptop Pro',
      category: 'Computadoras',
      price: 1299,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsSvUD3rZ7XDBa7IhVE7Sx38W4qjgdMu8bg&s'
    },
    {
      id: 3,
      name: 'Auriculares BT',
      category: 'Audio',
      price: 199,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsSvUD3rZ7XDBa7IhVE7Sx38W4qjgdMu8bg&s'
    },
    {
      id: 4,
      name: 'Smart Watch',
      category: 'Wearables',
      price: 249,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsSvUD3rZ7XDBa7IhVE7Sx38W4qjgdMu8bg&s'
    }
  ];

  filteredProducts = signal<Product[]>(this.products);

  onSearchInput(event: any) {
    const term = event.target.value.toLowerCase();
    this.searchTerm.set(term);
    this.filteredProducts.set(
      this.products.filter(
        product => 
          product.name.toLowerCase().includes(term) || 
          product.category.toLowerCase().includes(term)
      )
    );
  }

  viewProduct(product: Product) {
    console.log('Producto seleccionado:', product);
    // Aquí iría la navegación al detalle del producto
  }
}