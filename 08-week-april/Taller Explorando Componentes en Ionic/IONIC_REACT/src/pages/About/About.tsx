import React from 'react';
import { IonContent, IonPage, IonList, IonItem, IonLabel } from '@ionic/react';
import Header from '../../components/Header/Header';
import './About.css';

const About: React.FC = () => {
  const teamMembers = [
    { name: 'Angel Solano T', role: 'Desarrollador' },

  ];

  return (
    <IonPage>
      <Header title="About" />
      <IonContent>
        <div className="container">
          <h2>Sobre Nosotros</h2>
          <p>Equipo apasionado por crear aplicaciones con Ionic y React.</p>
          
          <h3>Nuestro Equipo</h3>
          <IonList>
            {teamMembers.map((member, index) => (
              <IonItem key={index}>
                <IonLabel>
                  <h2>{member.name}</h2>
                  <p>{member.role}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;