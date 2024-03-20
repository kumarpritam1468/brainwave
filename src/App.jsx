import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonGradient from './assets/svg/ButtonGradient'
import Button from "./components/Button";
import Header from "./components/Header";

function App() {

  return (
    <>
      <Router>
          <div className=" pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Header/>
          </div>
          <ButtonGradient />
      </Router>
    </>
  )
}

export default App