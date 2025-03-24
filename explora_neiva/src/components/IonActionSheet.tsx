import {IonButton, useIonActionSheet} from "@ionic/react"

export function IonActionSheet() {

  const [present] = useIonActionSheet();

  return (
    <div>
      <p>IonActionSheet</p>
      <IonButton 
        onClick={() =>
          present({
            header: "Mi Action",
            subHeader: "Subheader",
            buttons:[
              {
                text: "Delete",
                role: "destructive",
                data: {
                  action: "delete",
                },
              },
              {
                text: "cancel",
                role: "cancel",
                data: {
                  action: "cancel",
                },
              },
            ],
          })
        }
      >
        Open Action Sheet
        </IonButton>
    </div>
  )
}
