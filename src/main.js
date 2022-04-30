import { createApp } from "vue";
import App from "./App.vue";

//erstelle neue App -> Gibt eine Vue Instanz zurück
//Speichern in einer Variablen/Const 
const app = createApp(App); 
                            
/*
const app = createApp({     //Gebe ein Objekt mit um diese Instanz zu konfigurieren
  data:  function(){        //Gebe eine Funktion Data mit
    return{
        title: 'Willkommen'
    }
  }
});
*/


//Verbindung/Zugriff Template zu Javascript (index.html - div Komponente mit id=app)
//Funktion erwartet als Parameter die Id des Elementes an welches wir uns binden möchten
app.mount("#app");

//app.mount('#myapp'); 
