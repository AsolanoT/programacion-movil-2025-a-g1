import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/react';
import './Card.css';

interface CardProps {
  title: string;
  content: string;
  color?: string;
  icon?: string;
}

const Card: React.FC<CardProps> = ({ title, content, color = 'light', icon }) => {
  return (
    <IonCard color={color} className="custom-card">
      <IonCardHeader>
        {icon && <IonIcon icon={icon} className="card-icon" />}
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{content}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default Card;