import {
  IonRadioGroup,
  IonListHeader,
  IonItem,
  IonLabel,
  IonRadio,
  IonIcon,
} from "@ionic/react";
import { cashOutline, cardOutline, businessOutline } from "ionicons/icons";
import "./PaymentMethods.css";

export type PaymentMethod =
  | "efectivo"
  | "tarjeta_credito"
  | "tarjeta_debito"
  | "transferencia";

interface PaymentMethodsProps {
  selectedMethod: PaymentMethod;
  onMethodChange: (method: PaymentMethod) => void;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({
  selectedMethod,
  onMethodChange,
}) => {
  return (
    <div className="payment-methods-container">
      <IonListHeader>
        <h3>Método de Pago</h3>
      </IonListHeader>

      <IonRadioGroup
        value={selectedMethod}
        onIonChange={(e) => onMethodChange(e.detail.value)}
      >
        <IonItem className="payment-item">
          <IonIcon icon={cashOutline} slot="start" className="payment-icon" />
          <IonLabel>Efectivo</IonLabel>
          <IonRadio slot="end" value="efectivo" />
        </IonItem>

        <IonItem className="payment-item">
          <IonIcon icon={cardOutline} slot="start" className="payment-icon" />
          <IonLabel>Tarjeta de Crédito</IonLabel>
          <IonRadio slot="end" value="tarjeta_credito" />
        </IonItem>

        <IonItem className="payment-item">
          <IonIcon icon={cardOutline} slot="start" className="payment-icon" />
          <IonLabel>Tarjeta de Débito</IonLabel>
          <IonRadio slot="end" value="tarjeta_debito" />
        </IonItem>

        <IonItem className="payment-item">
          <IonIcon
            icon={businessOutline}
            slot="start"
            className="payment-icon"
          />
          <IonLabel>Transferencia Bancaria</IonLabel>
          <IonRadio slot="end" value="transferencia" />
        </IonItem>
      </IonRadioGroup>
    </div>
  );
};

export default PaymentMethods;
