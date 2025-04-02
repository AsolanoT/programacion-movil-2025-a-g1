// src/pages/Estudiante.tsx
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
import { Estudiante } from '../interfaces/Persona';
import PersonaForm from '../components/PersonaForm';

const EstudiantePage: React.FC = () => {
  const [estudiante, setEstudiante] = useState<Estudiante>({
    nombre: '',
    apellido: '',
    documento: '',
    fechaNacimiento: '',
    direccion: '',
    telefono: '',
    correo: '',
    carrera: '',
    semestre: 1,
    promedio: 0
  });

  const handlePersonaChange = (field: string, value: any) => {
    setEstudiante(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del estudiante:', estudiante);
    // Aquí iría la lógica para enviar los datos al servidor
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro de Estudiante</IonTitle>
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
                persona={estudiante} 
                onChange={handlePersonaChange} 
              />
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Datos Académicos</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Carrera</IonLabel>
                      <IonSelect 
                        value={estudiante.carrera}
                        onIonChange={(e) => handlePersonaChange('carrera', e.detail.value)}
                      >
                        <IonSelectOption value="sistemas">Sistemas</IonSelectOption>
                        <IonSelectOption value="mecatronica">Mecatronica</IonSelectOption>
                        <IonSelectOption value="ambiental">Ambiental</IonSelectOption>
                   
                      </IonSelect>
                    </IonItem>
                  </IonCol>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Semestre</IonLabel>
                      <IonSelect 
                        value={estudiante.semestre}
                        onIonChange={(e) => handlePersonaChange('semestre', parseInt(e.detail.value, 10))}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <IonSelectOption key={num} value={num}>{num}</IonSelectOption>
                        ))}
                      </IonSelect>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Promedio</IonLabel>
                      <IonInput
                        type="number"
                        min="0"
                        max="10"
                        step="0.1"
                        value={estudiante.promedio}
                        onIonChange={(e) => handlePersonaChange('promedio', parseFloat(e.detail.value!))}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>

          <div className="ion-padding">
            <IonButton expand="block" type="submit">Guardar Estudiante</IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default EstudiantePage;