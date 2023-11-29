import './App.css';
import AboutTourism from './Components/AboutTourism';
import { AboutTuar } from './Components/AboutTuar';
import HeroSection from './Components/HeroSection';


function App() {
  return (
    <div className="w-[100vw]">
      <HeroSection/>
      <AboutTuar/>
      <AboutTourism/>
    </div>
  );
}

export default App;
