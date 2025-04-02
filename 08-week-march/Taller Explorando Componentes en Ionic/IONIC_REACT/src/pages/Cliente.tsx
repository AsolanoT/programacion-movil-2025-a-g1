// src/pages/Cliente.tsx
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
import { Cliente } from '../interfaces/Persona';
import PersonaForm from '../components/PersonaForm';

const ClientePage: React.FC = () => {
  const [cliente, setCliente] = useState<Cliente>({
    nombre: '',
    apellido: '',
    documento: '',
    fechaNacimiento: '',
    direccion: '',
    telefono: '',
    correo: '',
    tipoCliente: '',
    frecuenciaCompra: '',
    limiteCredito: 0
  });

  const handlePersonaChange = (field: string, value: any) => {
    setCliente(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del cliente:', cliente);
    // Aquí iría la lógica para enviar los datos al servidor
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro de Cliente</IonTitle>
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
                persona={cliente} 
                onChange={handlePersonaChange} 
              />
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Datos de Cliente</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Tipo de Cliente</IonLabel>
                      <IonSelect 
                        value={cliente.tipoCliente}
                        onIonChange={(e) => handlePersonaChange('tipoCliente', e.detail.value)}
                      >
                        <IonSelectOption value="regular">Regular</IonSelectOption>
                        <IonSelectOption value="vip">VIP</IonSelectOption>
                        <IonSelectOption value="corporativo">Corporativo</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonCol>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Frecuencia de Compra</IonLabel>
                      <IonSelect 
                        value={cliente.frecuenciaCompra}
                        onIonChange={(e) => handlePersonaChange('frecuenciaCompra', e.detail.value)}
                      >
                        <IonSelectOption value="diaria">Diaria</IonSelectOption>
                        <IonSelectOption value="semanal">Semanal</IonSelectOption>
                        <IonSelectOption value="mensual">Mensual</IonSelectOption>
                        <IonSelectOption value="ocasional">Ocasional</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Límite de Crédito</IonLabel>
                      <IonInput
                        type="number"
                        value={cliente.limiteCredito}
                        onIonChange={(e) => handlePersonaChange('limiteCredito', parseFloat(e.detail.value!))}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>

          <div className="ion-padding">
            <IonButton expand="block" type="submit">Guardar Cliente</IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default ClientePage;