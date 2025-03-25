import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonButton} from "@ionic/react";

export function IonCardComponent() {
  return (
    <IonContent 
    style={{ 
      height: "80vh", // Altura del 80% del viewport
      margin: "20px", // Margen opcional
    }}
    >
      <IonCard>
        <img 
          src = "https://i.pinimg.com/originals/7c/de/e4/7cdee403e7d64419d7c9b14ba6453a90.png"
          alt="Someone" 
        />
        <IonCardHeader>
          <IonCardTitle>Angel Gustavo Solano.</IonCardTitle>
          <IonCardSubtitle>Ing. Sistemas</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          I'm gonna die if I don't learn to live my life, 
          I need to know more about english, i want to learn to speak in 
          italian and i wanna know how universe prepare my destiny.
        </IonCardContent>
        <IonButton fill="clear">
          Like
        </IonButton>
        <IonButton fill="clear">
          Follow
        </IonButton>
      </IonCard>
       
      <IonCard>
        <img 
          src = "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png"
          alt="Someone" 
        />
        <IonCardHeader>
          <IonCardTitle>Harrison Wells.</IonCardTitle>
          <IonCardSubtitle>Astronomo</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          I'm gonna die if I don't learn to live my life, 
          I need to know more about english, i want to learn to speak in 
          italian and i wanna know how universe prepare my destiny.
        </IonCardContent>
        <IonButton fill="clear">
          Like
        </IonButton>
        <IonButton fill="clear">
          Follow
        </IonButton>
      </IonCard>
      
      <IonCard>
        <img 
          src = "https://darumaview.it/wp-content/uploads/2016/03/The-100-Jason-Rothenberg-copertina.jpg"
          alt="Someone" 
        />
        <IonCardHeader>
          <IonCardTitle>Lexa Kom Trikru.</IonCardTitle>
          <IonCardSubtitle>Astronomo</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          I'm gonna die if I don't learn to live my life, 
          I need to know more about english, i want to learn to speak in 
          italian and i wanna know how universe prepare my destiny.
        </IonCardContent>
        <IonButton fill="clear">
          Like
        </IonButton>
        <IonButton fill="clear">
          Follow
        </IonButton>
      </IonCard>
      
    </IonContent>
  )
}

