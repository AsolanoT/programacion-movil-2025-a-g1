import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonTextarea, IonButton, IonAlert } from '@ionic/react';
import Header from '../../components/Header/Header';
import './Contact.css';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);
    // Aquí normalmente enviarías los datos a un servidor
  };

  return (
    <IonPage>
      <Header title="Contacto" />
      <IonContent>
        <div className="container">
          <h2>Contáctanos</h2>
          <form onSubmit={handleSubmit}>
            <IonInput
              value={name}
              placeholder="Nombre completo"
              onIonChange={e => setName(e.detail.value!)}
              required
            />
            <IonInput
              type="email"
              value={email}
              placeholder="Correo electrónico"
              onIonChange={e => setEmail(e.detail.value!)}
              required
            />
            <IonTextarea
              value={message}
              placeholder="Tu mensaje"
              onIonChange={e => setMessage(e.detail.value!)}
              required
              rows={6}
            />
            <IonButton type="submit" expand="block">
              Enviar Mensaje
            </IonButton>
          </form>

          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header={'Gracias!'}
            message={`Hemos recibido tu mensaje, ${name}. Nos pondremos en contacto contigo pronto.`}
            buttons={['OK']}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Contact;