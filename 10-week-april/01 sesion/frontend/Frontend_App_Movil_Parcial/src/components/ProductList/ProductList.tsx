import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonButton,
  IonIcon,
  IonBadge,
} from "@ionic/react";
import { add } from "ionicons/icons";
import { useState } from "react";
import "./ProductList.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductListProps {
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
  // Lista de productos de ejemplo
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Zapatos Deportivos",
      description: "Zapatos cómodos para correr o hacer ejercicio",
      price: 59.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyusaJqDaeLn602TLuvXClVWoC9PJalGycMQ&s",
      category: "Calzado",
    },
    {
      id: 2,
      name: "Camiseta Casual",
      description: "Camiseta 100% algodón para uso diario",
      price: 19.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyusaJqDaeLn602TLuvXClVWoC9PJalGycMQ&s",
      category: "Ropa",
    },
    {
      id: 3,
      name: "Smartphone",
      description: "Último modelo con cámara de alta resolución",
      price: 399.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyusaJqDaeLn602TLuvXClVWoC9PJalGycMQ&s",
      category: "Electrónica",
    },
    {
      id: 4,
      name: "Libro de Cocina",
      description: "Recetas gourmet para principiantes",
      price: 24.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyusaJqDaeLn602TLuvXClVWoC9PJalGycMQ&s",
      category: "Libros",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  // Agregar producto al carrito
  const addToCart = (product: Product) => {
    onAddToCart(product);
  };

  // Filtrar productos por categoría
  const filteredProducts =
    selectedCategory === "Todas"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Obtener categorías únicas
  const categories = [
    "Todas",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="product-list-container">
      {/* Filtro por categoría */}
      <div className="category-filter">
        {categories.map((category) => (
          <IonButton
            key={category}
            fill={selectedCategory === category ? "solid" : "outline"}
            onClick={() => setSelectedCategory(category)}
            size="small"
          >
            {category}
          </IonButton>
        ))}
      </div>

      {/* Lista de productos */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <IonCard key={product.id} className="product-card">
            <IonThumbnail className="product-image">
              <IonImg src={product.image} alt={product.name} />
            </IonThumbnail>

            <IonCardHeader>
              <IonCardTitle className="product-title">
                {product.name}
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <IonLabel className="product-price">
                  ${product.price.toFixed(2)}
                </IonLabel>
                <IonButton
                  fill="solid"
                  color="primary"
                  onClick={() => addToCart(product)}
                  className="add-to-cart-btn"
                >
                  <IonIcon slot="start" icon={add} />
                  Agregar
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
