import './App.css';
import Navbar from "./Component/Navbar/Navbar.js"
import Intro from './Component/intro/Intro';
import Services from './Component/Services/Services';
import Experience from './Component/Experience/Experience';
import Work from './Component/Works/Work';
import Portfolio from './Component/Portfolio.js/Portfolio';
import Testmonial from './Component/Tesimonial/Testmonial';
import Contect from './Component/Contect/Contect';
import Footer from './Component/Footer/Footer';
import { useContext } from 'react';
import { themeContext } from './Context';


function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{background : darkMode ? 'black': "",
            color: darkMode ? 'white' : ""}}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Testmonial/>
      <Contect/>
      <Footer/>
    </div>
  );
}

export default App;
