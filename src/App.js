import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Backtotop from "./components/Backtotop";
import HexaSlide from "./components/HexaSlide";
import MyHeader from "./components/MyHeader";
import My_Footer from "./components/My_Footer";
import My_Timeline from "./components/My_Timeline";
import Nexaislide from "./components/Nexaislide";
import Preload from "./components/Preload";
import Sec_One from "./components/Sec_One";
import Taldtoday from "./components/Taldtoday";
import WhatsAi from "./components/WhatsAi";

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 2500 });
  }, []);
  const [first, setfirst] = useState(true);
  useEffect(() => {
    setfirst(true);
    setTimeout(() => {
      setfirst(false);
    }, 3000);
  }, []);
  return (
    <div>
      {first ? (
        <>
          <Preload />
        </>
      ) : (
        <div className="App">
          <MyHeader />
          <Sec_One />
          <HexaSlide />
          <Nexaislide />
          <WhatsAi />
          <My_Timeline />
          <Taldtoday />
          <My_Footer />
          <Backtotop />
          <Preload />
        </div>
      )}
    </div>
  );
}

export default App;
