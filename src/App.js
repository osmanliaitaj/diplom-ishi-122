import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './components/Framework.css'
import Navbar from "./components/Navbar"

// Bizim esas fayl app.js ana component
// ovlad componentleri (child component)

function App() {
  return (
    // <></> React fragment bu bize imkan verirki returnun daxiline bir nece element yerlesdirek
    // ve ozunu valideyn lement kimi aparir
    <>
    <Navbar />
    </>
    
  );
}

export default App;
