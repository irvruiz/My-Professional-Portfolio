import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/intro"
import Portfolio from "./components/portfolio/portfolio"
import Contact from "./components/contact/contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
