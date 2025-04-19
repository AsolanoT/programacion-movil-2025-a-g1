// src/components/PersonaForm.tsx
import React from 'react';
import { IonItem, IonLabel, IonInput, IonGrid, IonRow, IonCol } from '@ionic/react';
import { Persona } from '../interfaces/Persona';

interface PersonaFormProps {
  persona: Persona;
  onChange: (field: keyof Persona, value: any) => void;
}

const PersonaForm: React.FC<PersonaFormProps> = ({ persona, onChange }) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Nombre</IonLabel>
            <IonInput
              value={persona.nombre}
              onIonChange={(e) => onChange('nombre', e.detail.value!)}
            />
          </IonItem>
        </IonCol>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Apellido</IonLabel>
            <IonInput
              value={persona.apellido}
              onIonChange={(e) => onChange('apellido', e.detail.value!)}
            />
          </IonItem>
        </IonCol>
      </IonRow>
      
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Documento</IonLabel>
            <IonInput
              value={persona.documento}
              onIonChange={(e) => onChange('documento', e.detail.value!)}
            />
          </IonItem>
        </IonCol>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Fecha de Nacimiento</IonLabel>
            <IonInput
              type="date"
              value={persona.fechaNacimiento}
              onIonChange={(e) => onChange('fechaNacimiento', e.detail.value!)}
            />
          </IonItem>
        </IonCol>
      </IonRow>
      
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Dirección</IonLabel>
            <IonInput
              value={persona.direccion}
              onIonChange={(e) => onChange('direccion', e.detail.value!)}
            />
          </IonItem>
        </IonCol>
      </IonRow>
      
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Teléfono</IonLabel>
            <IonInput
              type="tel"
              value={persona.telefono}
              onIonChange={(e) => onChange('telefono', e.detail.value!)}
            />
          </IonItem>
        </IonCol>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Correo Electrónico</IonLabel>
            <IonInput
              type="email"
              value={persona.correo}
              onIonChange={(e) => onChange('correo', e.detail.value!)}
            />
          </IonItem>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default PersonaForm;