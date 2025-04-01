import { libraryOutline, trophyOutline } from "ionicons/icons";
import { GenericForm, FieldConfig } from "../components/GenericForm/GenericForm";
import "./style_pages.css"; 

export const Estudiante = () => {
  const estudianteFields: FieldConfig[] = [
    {
      label: "Grado",
      placeholder: "Ingrese el grado académico",
      icon: libraryOutline,
      type: "text" // Tipo explícito
    },
    {
      label: "Promedio",
      placeholder: "Ingrese el promedio académico",
      icon: trophyOutline,
      type: "number" // Tipo explícito
    }
  ];

  return <GenericForm title="Estudiante" specificFields={estudianteFields} />;
};