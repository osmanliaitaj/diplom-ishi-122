import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import 'bootstrap/dist/js/bootstrap'
import Navbar from "./components/Navbar"
import Index from "./components/index"
import Blogs from './components/blogs'
import Card from './components/card'
import Sale from './components/sale'
import Carousel from "./components/carousel"
import Cataloq from "./components/cataloq"
import News from "./components/news"
import Footer from "./components/footer"


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
    <Card/>
    <Sale/>
    <Carousel/>
    <Cataloq />
    <News />
    <Footer />
    </>

    
  );
}

export default App;
