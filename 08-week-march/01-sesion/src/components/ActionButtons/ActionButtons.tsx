import { IonButton, IonGrid, IonRow, IonCol } from "@ionic/react";
import './ActionButtons.css';

export const ActionButtons = () => {
  return (
    <div className="buttons-container">
      <IonGrid className="custom-buttons-grid">
        <IonRow className="button-row">
          <IonCol size="auto">
            <IonButton 
              className="custom-button custom-button-add"
              fill="solid"
              shape="round"
              size="large"
            >
              Agregar
            </IonButton>
          </IonCol>
          <IonCol size="auto">
            <IonButton 
              className="custom-button custom-button-delete"
              fill="solid"
              shape="round"
              size="large"
            >
              Eliminar
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow className="button-row">
          <IonCol size="auto">
            <IonButton 
              className="custom-button custom-button-modify"
              fill="solid"
              shape="round"
              size="large"
            >
              Modificar
            </IonButton>
          </IonCol>
          <IonCol size="auto">
            <IonButton 
              className="custom-button custom-button-query"
              fill="solid"
              shape="round"
              size="large"
            >
              Consultar
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};
