import { locationOutline, cashOutline } from "ionicons/icons";
import { GenericForm } from "../components/GenericForm/GenericForm";
import "./style_pages.css"; 

export const Cliente = () => {
  const clienteFields = [
    {
      label: "Dirección",
      placeholder: "Ingrese la dirección",
      icon: locationOutline,
      className: "cliente-field" // Aplica la clase CSS
    },
    {
      label: "Tipo de cliente",
      placeholder: "Seleccione el tipo de cliente",
      icon: cashOutline,
      className: "cliente-field"
    }
  ];

  return (
    <div className="cliente-container">
      <GenericForm title="Cliente" specificFields={clienteFields} />
    </div>
  );
};


