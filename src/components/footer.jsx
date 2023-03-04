import React from 'react'
import './Footer.css'
import Logo from './assets/svg/logo.svg'
import twitter from './assets/svg/twitter.svg'
import facebook from './assets/svg/facebook.svg'
import instagram from './assets/svg/instagram.svg'


const footer = () => {
  return (
    <>
    
    <footer>
      <div className="container flexbox">

        <div className="footerLeft">
          <img className="logo" src={Logo} alt="" /> <br/>
          <p>© 2021 “Copper Pro” 
              Bütün hüquqlar qorunur</p>
          <p>Gizlilik siyasəti</p>
        </div>
        <div className="footerRight flexbox">
          <div className="right">
          <h4>Yeniliklər</h4>
           <button>
           <p>Kataloq</p>
            <p>Xəbərlər</p>
           </button>
             </div>

          <div className="right flex">
          <h4>Kataloq</h4>
          <button>
          <p>Efir yağları üçün</p>
          <p>Efir yağları üçün</p>
          </button>
          </div>

          
          <div>


          <div className="Footer-links">
            <a href="#" className='text-decoration-none'>Bajama 88,Kiev <br/>02132 Ukrayna</a>
            <a href="tel:+38 (096) 990 67 56" className='text-decoration-none'>+38 (096) 990 67 56</a>
            <a href="mailto: 'a.alambik@gmail.com'" className='text-decoration-none'>a.alambik@gmail.com</a>
            <div className="Icon-links">
            <a href="https://twitter.com/CopperPro" className='sosial text-decoration-none'><img src={twitter} alt="" /></a>
            <a href="https://twitter.com/CopperPro" className='sosial text-decoration-none'><img src={facebook} alt="" /></a>
            <a href="https://twitter.com/CopperPro" className='sosial text-decoration-none'><img src={instagram} alt="" /></a>
            </div>
            
          </div>
          
          
          </div>
        </div>

      </div>      
    </footer>

    </>
  )
}

export default footer