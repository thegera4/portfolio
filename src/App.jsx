import Topbar from './components/Topbar/Topbar';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
//import Contact from './components/Contact/Contact';
import './app.scss';
import { useState } from 'react';
import Menu from './components/Menu/Menu';



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
   
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio/>
        {/*<Contact />*/}
      </div>
    </div>
  );
}

export default App;
