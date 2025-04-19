import { IonItem, IonLabel, IonInput, IonIcon } from "@ionic/react";
import { personOutline, mailOutline, calendarOutline } from "ionicons/icons";
import { FormCard } from "../FormCard/FormCard";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import './GenericForm.css';

export interface FieldConfig {
  label: string;
  placeholder: string;
  icon: string;
  type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url';
}

interface GenericFormProps {
  title: string;
  specificFields: FieldConfig[];
}

export const GenericForm = ({ title, specificFields }: GenericFormProps) => {
  return (
    <>
      <FormCard title={title}>
        {/* Campos comunes */}
        <IonItem className="form-field">
          <IonIcon icon={personOutline} slot="start" />
          <IonLabel>Nombre</IonLabel>
        </IonItem>
        <IonInput type="text" placeholder="Ingrese su nombre" />

        <IonItem className="form-field">
          <IonIcon icon={personOutline} slot="start" />
          <IonLabel>Apellido</IonLabel>
        </IonItem>
        <IonInput type="text" placeholder="Ingrese su apellido" />

        <IonItem className="form-field">
          <IonIcon icon={calendarOutline} slot="start" />
          <IonLabel>Edad</IonLabel>
        </IonItem>
        <IonInput type="number" placeholder="Ingrese su edad" />

        <IonItem className="form-field">
          <IonIcon icon={mailOutline} slot="start" />
          <IonLabel>Correo</IonLabel>
        </IonItem>
        <IonInput type="email" placeholder="Ingrese su correo electrónico" />

        {/* Campos específicos */}
        {specificFields.map((field, index) => (
          <div key={index}>
            <IonItem className="form-field">
              <IonIcon icon={field.icon} slot="start" />
              <IonLabel>{field.label}</IonLabel>
            </IonItem>
            <IonInput 
              type={field.type || 'text'} 
              placeholder={field.placeholder} 
            />
          </div>
        ))}
      </FormCard>

      {/* Botones de acción fuera del FormCard */}
      <ActionButtons />
    </>
  );
};
