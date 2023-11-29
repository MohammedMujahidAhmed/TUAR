import './App.css';
import AboutTourism from './Components/AboutTourism';
import { AboutTuar } from './Components/AboutTuar';
import Cards from './Components/Cards';
import HeroSection from './Components/HeroSection';
import members from "./data"


function App() {
  return (
    <div className="w-[100vw]">
      <HeroSection/>
      <AboutTuar/>
      <AboutTourism/>
      <div className='p-3 flex flex-col justify-center items-center'>
        <p className='font-extrabold text-[28px]'>Our Team</p>
        <Cards members={members}></Cards>
      </div>
    </div>
  );
}

export default App;
