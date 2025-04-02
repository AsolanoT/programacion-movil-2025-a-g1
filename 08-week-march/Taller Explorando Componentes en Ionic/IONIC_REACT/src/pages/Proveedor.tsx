// src/pages/Proveedor.tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';
import { Proveedor } from '../interfaces/Persona';
import PersonaForm from '../components/PersonaForm';

const ProveedorPage: React.FC = () => {
  const [proveedor, setProveedor] = useState<Proveedor>({
    nombre: '',
    apellido: '',
    documento: '',
    fechaNacimiento: '',
    direccion: '',
    telefono: '',
    correo: '',
    rubro: '',
    tipoProducto: '',
    diasEntrega: 0
  });

  const handlePersonaChange = (field: string, value: any) => {
    setProveedor(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del proveedor:', proveedor);
    // Aquí iría la lógica para enviar los datos al servidor
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro de Proveedor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit}>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Datos Personales</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <PersonaForm 
                persona={proveedor} 
                onChange={handlePersonaChange} 
              />
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Datos de Proveedor</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Rubro</IonLabel>
                      <IonSelect 
                        value={proveedor.rubro}
                        onIonChange={(e) => handlePersonaChange('rubro', e.detail.value)}
                      >
                        <IonSelectOption value="tecnologia">Tecnología</IonSelectOption>
                        <IonSelectOption value="alimentos">Alimentos</IonSelectOption>
                        <IonSelectOption value="servicios">Servicios</IonSelectOption>
                        <IonSelectOption value="otros">Otros</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonCol>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Tipo de Producto</IonLabel>
                      <IonInput
                        value={proveedor.tipoProducto}
                        onIonChange={(e) => handlePersonaChange('tipoProducto', e.detail.value!)}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Días de Entrega</IonLabel>
                      <IonInput
                        type="number"
                        value={proveedor.diasEntrega}
                        onIonChange={(e) => handlePersonaChange('diasEntrega', parseInt(e.detail.value!, 10))}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>

          <div className="ion-padding">
            <IonButton expand="block" type="submit">Guardar Proveedor</IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default ProveedorPage;