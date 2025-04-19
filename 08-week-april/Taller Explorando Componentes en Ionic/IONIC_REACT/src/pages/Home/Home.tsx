import React from 'react';
import { 
  IonContent, 
  IonPage, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonButton, 
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';
import Header from '../../components/Header/Header';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header title="Inicio" />
      <IonContent fullscreen className="ion-padding">
        <div className="welcome-section">
          <h1 className="welcome-title">Bienvenido a Ionic + React</h1>
          <p className="welcome-subtitle">La combinación perfecta para aplicaciones móviles</p>
        </div>

        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="6">
              <IonCard color="primary" className="custom-card">
                <IonCardHeader>
                  <IonIcon icon="rocket" size="large" className="card-icon" />
                  <IonCardTitle>Bienvenido</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Esta es la página principal de nuestra aplicación con diseño mejorado.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="6">
              <IonCard color="secondary" className="custom-card">
                <IonCardHeader>
                  <IonIcon icon="star" size="large" className="card-icon" />
                  <IonCardTitle>Características</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Ionic + React es una combinación poderosa para desarrollar aplicaciones móviles y web multiplataforma.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <div className="action-buttons">
          <IonButton 
            routerLink="/about" 
            expand="block" 
            color="primary" 
            shape="round"
            className="custom-button"
          >
            Conoce más
          </IonButton>
          
          <IonButton 
            routerLink="/contact" 
            expand="block" 
            fill="outline" 
            color="primary" 
            shape="round"
            className="custom-button"
          >
            Contáctanos
          </IonButton>
        </div>

        <div className="features-section">
          <h2>Nuestras Ventajas</h2>
          <div className="features-grid">
            <div className="feature-item">
              <IonIcon name="phone-portrait" className="feature-icon" />
              <h3>Aplicaciones Móviles</h3>
              <p>Desarrollo para iOS y Android desde un solo código</p>
            </div>
            <div className="feature-item">
              <IonIcon icon="globe" className="feature-icon" />
              <h3>Aplicaciones Web</h3>
              <p>Funciona perfectamente en navegadores modernos</p>
            </div>
            <div className="feature-item">
              <IonIcon icon="flash" className="feature-icon" />
              <h3>Rendimiento</h3>
              <p>Componentes optimizados para máxima velocidad</p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;