import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonGradient from './assets/svg/ButtonGradient'
// import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";

function App() {

  return (
    <>
      <Router>
          <div className=" pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Header/>
            <Hero/>
            <Benefits/>
            <Collaboration/>
            <Services/>
            <Pricing />
            <Roadmap/>
          </div>
          <ButtonGradient />
      </Router>
    </>
  )
}

export default App