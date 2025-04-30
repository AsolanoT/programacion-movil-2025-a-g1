import { IonButton } from "@ionic/react";
import "./CustomButton.css";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  expand?: "full" | "block";
  color?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  expand = "block",
  color = "primary",
  disabled = false,
  type = "button",
}) => {
  return (
    <IonButton
      className="custom-button"
      expand={expand}
      color={color}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </IonButton>
  );
};

export default CustomButton;
