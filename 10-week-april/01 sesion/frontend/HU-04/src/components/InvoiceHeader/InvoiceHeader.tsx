import { IonItem, IonLabel, IonInput, IonDatetime } from "@ionic/react";
import { useState } from "react";
import "./InvoiceHeader.css";

interface InvoiceHeaderProps {
  onHeaderChange: (headerData: InvoiceHeaderData) => void;
}

export interface InvoiceHeaderData {
  clientName: string;
  invoiceNumber: string;
  date: string;
  ruc?: string;
  address?: string;
}

const InvoiceHeader: React.FC<InvoiceHeaderProps> = ({ onHeaderChange }) => {
  const [headerData, setHeaderData] = useState<InvoiceHeaderData>({
    clientName: "",
    invoiceNumber: "",
    date: new Date().toISOString(),
    ruc: "",
    address: "",
  });

  const handleInputChange = (field: keyof InvoiceHeaderData, value: string) => {
    const newData = {
      ...headerData,
      [field]: value,
    };
    setHeaderData(newData);
    onHeaderChange(newData);
  };

  return (
    <div className="invoice-header-container">
      <h2 className="invoice-title">Encabezado de Factura</h2>

      <IonItem className="invoice-item">
        <IonLabel position="floating">Cliente</IonLabel>
        <IonInput
          value={headerData.clientName}
          onIonChange={(e) => handleInputChange("clientName", e.detail.value!)}
        />
      </IonItem>

      <IonItem className="invoice-item">
        <IonLabel position="floating">N° Factura</IonLabel>
        <IonInput
          value={headerData.invoiceNumber}
          onIonChange={(e) =>
            handleInputChange("invoiceNumber", e.detail.value!)
          }
        />
      </IonItem>

      <IonItem className="invoice-item">
        <IonLabel position="floating">RUC</IonLabel>
        <IonInput
          value={headerData.ruc}
          onIonChange={(e) => handleInputChange("ruc", e.detail.value!)}
        />
      </IonItem>

      <IonItem className="invoice-item">
        <IonLabel position="floating">Dirección</IonLabel>
        <IonInput
          value={headerData.address}
          onIonChange={(e) => handleInputChange("address", e.detail.value!)}
        />
      </IonItem>

      <IonItem className="invoice-item">
        <IonLabel position="floating">Fecha</IonLabel>
        <IonDatetime
          presentation="date"
          value={headerData.date}
          onIonChange={(e) =>
            handleInputChange(
              "date",
              Array.isArray(e.detail.value)
                ? e.detail.value[0]
                : e.detail.value!
            )
          }
        />
      </IonItem>
    </div>
  );
};

export default InvoiceHeader;
