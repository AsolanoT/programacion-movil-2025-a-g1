import { businessOutline, cardOutline } from "ionicons/icons";
import { GenericForm } from "../components/GenericForm/GenericForm";
import "./style_pages.css"; 

export const Proveedor = () => {
  const proveedorFields = [
    {
      label: "Empresa",
      placeholder: "Ingrese el nombre de la empresa",
      icon: businessOutline
    },
    {
      label: "NIT",
      placeholder: "Ingrese el NIT de la empresa",
      icon: cardOutline
    }
  ];

  return <GenericForm title="Proveedor" specificFields={proveedorFields} />;
};