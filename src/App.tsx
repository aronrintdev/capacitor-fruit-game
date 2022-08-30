import { IonApp, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import { StatusBar } from "@capacitor/status-bar";
import Routes from "./Routes";
import { useEffect, useState } from "react";
import { AndroidFullScreen } from "@awesome-cordova-plugins/android-full-screen";
import Loader from "./Pages/Loader";
import UserContextProvider from "./Pages/context/UserContext";
import LevelContextProvider from "./Pages/context/LevelContext";
// import { SplashScreen } from '@capacitor/splash-screen';

setupIonicReact();

const App: React.FC = () => {
  useEffect(() => {
    const hideStatusBar = async () => {
      await StatusBar.hide();
    };
    const fullScreen = async () => {
      if (await AndroidFullScreen.isImmersiveModeSupported())
        await AndroidFullScreen.immersiveMode();
      else {
        await AndroidFullScreen.showUnderSystemUI();
      }
    };
    // const hideSplash = async() => {
    //   await SplashScreen.show();
    // }
    // hideSplash();
    fullScreen();
    hideStatusBar();
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  
  
  return (
    <IonApp>
      <UserContextProvider>
        <LevelContextProvider>
          {isLoading && 
          <Loader 
          finshedLoading={() => setIsLoading(false)} />}
          {!isLoading && <Routes />}
        </LevelContextProvider>
      </UserContextProvider>
    </IonApp>
  );
};

export default App;
