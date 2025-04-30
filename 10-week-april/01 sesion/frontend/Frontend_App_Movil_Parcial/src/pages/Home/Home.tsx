import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import { useState } from "react";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import InvoiceHeader from "../../components/InvoiceHeader/InvoiceHeader";
import ProductList from "../../components/ProductList/ProductList";
import PaymentMethods from "../../components/PaymentMethods/PaymentMethods";
import "./Home.css";

const Home: React.FC = () => {
  const [invoiceData, setInvoiceData] = useState<any>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<
    "efectivo" | "tarjeta_credito" | "tarjeta_debito" | "transferencia"
  >("efectivo");

  const handleHeaderChange = (data: any) => {
    setInvoiceData(data);
  };

  const handleAddToCart = (product: any) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleGenerateInvoice = () => {
    const invoice = {
      ...invoiceData,
      items: cartItems,
      paymentMethod,
      total: calculateTotal(),
      date: new Date().toISOString(),
    };
    console.log("Factura generada:", invoice);
    alert(
      `Factura generada con éxito\nMétodo de pago: ${paymentMethod}\nTotal: $${calculateTotal()}`
    );
  };

  return (
    <IonPage>
      <CustomHeader
        pageName={
          invoiceData?.clientName
            ? `Factura para ${invoiceData.clientName}`
            : "Sistema de Facturación"
        }
        showMenuButton={true}
        showLogoutButton={true}
      />

      <IonContent className="home-page">
        {/* Sección de encabezado */}
        <div className="header-section">
          <h1>Sistema de Facturación</h1>
          <p>Complete los datos de la factura y agregue productos</p>
        </div>

        {/* Componente InvoiceHeader */}
        <IonCard className="invoice-card">
          <IonCardContent>
            <InvoiceHeader onHeaderChange={handleHeaderChange} />
          </IonCardContent>
        </IonCard>

        {/* Resumen de factura */}
        {invoiceData && (
          <div className="invoice-summary">
            <h3>Resumen de Factura</h3>
            <p>
              <strong>Cliente:</strong> {invoiceData.clientName}
            </p>
            {invoiceData.ruc && (
              <p>
                <strong>RUC:</strong> {invoiceData.ruc}
              </p>
            )}
            <p>
              <strong>N° Factura:</strong> {invoiceData.invoiceNumber}
            </p>
            <p>
              <strong>Fecha:</strong>{" "}
              {new Date(invoiceData.date).toLocaleDateString()}
            </p>
          </div>
        )}

        {/* Componente ProductList */}
        <div className="product-list-container">
          <ProductList onAddToCart={handleAddToCart} />
        </div>

        {/* Componente PaymentMethods (nuevo) */}
        {cartItems.length > 0 && (
          <IonCard className="payment-section">
            <IonCardContent>
              <PaymentMethods
                selectedMethod={paymentMethod}
                onMethodChange={setPaymentMethod}
              />
            </IonCardContent>
          </IonCard>
        )}

        {/* Resumen del carrito */}
        {cartItems.length > 0 && (
          <div className="cart-summary">
            <h3>Resumen del Carrito</h3>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <strong>Total:</strong> ${calculateTotal()}
            </div>
            <IonButton
              expand="block"
              className="generate-invoice-btn"
              disabled={!invoiceData?.clientName}
              onClick={handleGenerateInvoice}
            >
              Generar Factura
            </IonButton>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
