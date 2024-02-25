import './App.css';
import Banner from './Components/Header/Banner';
import Contact from './Components/Header/Contact';
import Extra from './Components/Header/Extra';
import Footer from './Components/Header/Footer';
import Header from './Components/Header/Header';
import Innovation from './Components/Header/Innovation';
import Service from './Components/Header/Service';
import Slider from './Components/Header/Slider';
import Vision from './Components/Header/Vision';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Service/>
      <Innovation/>
      <Extra/>
      <Contact/>
      <Slider/>
      <Vision/>
      <Footer/>
    </>
  );
}

export default App;
