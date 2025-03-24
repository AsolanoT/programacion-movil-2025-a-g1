import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonIcon,
} from '@ionic/react';
import { star, settings, notifications, person } from 'ionicons/icons'; // Iconos de Ionic
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* Encabezado */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi Aplicación</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Contenido principal */}
      <IonContent className="ion-padding">
        {/* Sección 1: Tarjetas de información */}
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Proyectos</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Gestiona tus proyectos de ingeniería de manera eficiente.</p>
                  <IonButton expand="block" color="primary">
                    Ver Proyectos
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="12" size-md="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Tareas</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Organiza y prioriza tus tareas diarias.</p>
                  <IonButton expand="block" color="secondary">
                    Ver Tareas
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Sección 2: Acciones rápidas */}
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <h2>Acciones Rápidas</h2>
            </IonCol>
            <IonCol size="6" size-md="3">
              <IonButton expand="block" color="light">
                <IonIcon icon={star} slot="start" />
                Favoritos
              </IonButton>
            </IonCol>
            <IonCol size="6" size-md="3">
              <IonButton expand="block" color="light">
                <IonIcon icon={settings} slot="start" />
                Configuración
              </IonButton>
            </IonCol>
            <IonCol size="6" size-md="3">
              <IonButton expand="block" color="light">
                <IonIcon icon={notifications} slot="start" />
                Notificaciones
              </IonButton>
            </IonCol>
            <IonCol size="6" size-md="3">
              <IonButton expand="block" color="light">
                <IonIcon icon={person} slot="start" />
                Perfil
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      {/* Pie de página */}
      <IonFooter>
        <IonToolbar>
          <IonTitle>© 2025 Angel My App</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;