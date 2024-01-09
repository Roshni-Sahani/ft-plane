import "./App.css";
import Header from "./components/Header";
import Tabsec from "./components/Tabsec";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Footer from "./components/Footer";
import Backtop from './components/Backtop';
import Loader from './components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";


function App() {
  useEffect(() => {
    AOS.init(
      { once: true }
    );
  }, [])
  const [data, setdata] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="overflow-hidden">
          <div className="bg-[url(./assets/images/bgimg.png)] bg-no-repeat bg-cover">
            <Header />
          </div>
          <Tabsec />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <div className="bg-[url(./assets/images/png/footbg.png)] bg-no-repeat bg-cover">
            <Footer />
            <Backtop />
          
          </div>
        </div>
      )
}
    </div>
  );
}

export default App;
