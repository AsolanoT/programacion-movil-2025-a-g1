// src/App.tsx
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { person, business, school, arrowBack, personAdd, contract, home } from 'ionicons/icons';
import ClientePage from './pages/Cliente';
import ProveedorPage from './pages/Proveedor';
import EstudiantePage from './pages/Estudiante';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/cliente">
            <ClientePage />
          </Route>
         
          <Route exact path="/about">
            <About />
          </Route> 
          {/*
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
*/}
          <Route exact path="/proveedor">
            <ProveedorPage />
          </Route>
          <Route path="/estudiante">
            <EstudiantePage />
          </Route>
          <Route exact path="/">
            <Redirect to="/cliente" />
          </Route>
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
          <IonTabButton tab="cliente" href="/cliente">
            <IonIcon icon={person} />
            <IonLabel>Cliente</IonLabel>
          </IonTabButton>
          <IonTabButton tab="proveedor" href="/proveedor">
            <IonIcon icon={business} />
            <IonLabel>Proveedor</IonLabel>
          </IonTabButton>
          <IonTabButton tab="estudiante" href="/estudiante">
            <IonIcon icon={school} />
            <IonLabel>Estudiante</IonLabel>
          </IonTabButton>

          <IonTabButton tab="about" href="/about">
            <IonIcon icon={personAdd} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
          {/*
          <IonTabButton tab="contact" href="/contact">
            <IonIcon icon={contract} />
            <IonLabel>Contact</IonLabel>
          </IonTabButton>
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          */}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;