import { bookOutline, schoolOutline } from "ionicons/icons";
import { GenericForm } from "../components/GenericForm/GenericForm";
import "./style_pages.css"; 

export const Profesor = () => {
  const profesorFields = [
    {
      label: "Materia",
      placeholder: "Ingrese la materia que enseña",
      icon: bookOutline,
      type: "text" as const // Especificamos el tipo literal
    },
    {
      label: "Años de experiencia",
      placeholder: "Ingrese años de experiencia",
      icon: schoolOutline,
      type: "number" as const // Especificamos el tipo literal
    }
  ];

  return <GenericForm title="Profesor" specificFields={profesorFields} />;
};