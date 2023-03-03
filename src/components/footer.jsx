import React from 'react'
import './footer.css'
import Logo from './assets/svg/logo.svg'


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
          <div>
          <h4>Yeniliklər</h4>
            <button>
            <p>Kataloq</p>
            <p>Xəbərlər</p>
            </button>
             </div>
          <div>
          <h4>Kataloq</h4>
          <button>
          <p>Efir yağları üçün</p>
         <p>Efir yağları üçün</p>
          </button>
       
          </div>
          <div>
          <h4>Kontakt</h4>
          <button>
          <p>Bakı Şəhəri</p>
          <p>+994(055) 641 34 11</p>
          <p>osmanliaitaj@gmail.com</p>
          </button>
          
          
          </div>
        </div>

      </div>      
    </footer>

    </>
  )
}

export default footer