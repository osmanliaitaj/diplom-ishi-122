import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import 'bootstrap/dist/js/bootstrap'
import Navbar from "./components/Navbar"
import Index from "./components/Index"
import Blogs from './components/Blogs'
import Sale from './components/Sale'
import Cataloq from "./components/Cataloq"
import News from "./components/News"
import Footer from "./components/Footer"


// useEffect side effectleri
// if for ishlene bilmez
// Bizim esas fayl app.js ana component
// ovlad componentleri (child component)

function App() {
  
  return (
    // <></> React fragment bu bize imkan verirki returnun daxiline bir nece element yerlesdirek
    // ve ozunu valideyn element kimi aparir
    <>
    <Navbar />
    <Index />
    <Blogs/>
    <Sale/>
    <Cataloq />
    <News />
    <Footer />
    </>

    
  );
}

export default App;
