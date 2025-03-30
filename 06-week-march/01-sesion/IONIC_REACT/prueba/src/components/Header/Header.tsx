import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/react';
import './Header.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="end">
          <IonButton routerLink="/">Home</IonButton>
          <IonButton routerLink="/about">About</IonButton>
          <IonButton routerLink="/contact">Contact</IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;