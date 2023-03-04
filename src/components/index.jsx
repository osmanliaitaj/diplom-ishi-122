import React from 'react'
import './Index.css'
import BG from './assets/svg/BG.png'
import Image25 from './assets/svg/image25.svg'
import Image26 from './assets/svg/image26.svg'
import Image27 from './assets/svg/image27.svg'
import Image28 from './assets/svg/image28.svg'
import Image29 from './assets/svg/image29.svg'



const index = () => {
  return (
    <>
    <div className="Index">
       
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={BG} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Bestseller</h1>
        <h3>Efir yağı distilləçisi</h3>
        <h5>Qiymət</h5>
        <p>230 Azn</p>
        <button>Almaq</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={BG} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Bestseller</h1>
        <h3>Efir yağı distilləçisi</h3>
        <h5>Qiymət</h5>
        <p>230 Azn</p>
        <button>Almaq</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={BG} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Bestseller</h1>
        <h3>Efir yağı distilləçisi</h3>
        <h5>Qiymət</h5>
        <p>230 Azn</p>
        <button>Almaq</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


      <div className="container">
      <h1>Bizim istehsal</h1>
      <div class="card-group">
        <div class="card">
    <img src={Image25} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Efir yağları üçün</h5>
      
    </div>
  
  </div>
  <div class="card">
    <img src={Image26} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Hidrolatlar üçün</h5>
      
    </div>
    
  </div>
  <div class="card">
    <img src={Image27} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Mis qablar</h5>
      
    </div>
    
  </div>

     <div class="card-group">
  <div class="card">
    <img src={Image28} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Mis aksesuarları</h5>
      
    </div>
    
  </div>
  <div class="card">
    <img src={Image29} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Fərdi sifariş</h5>
     
    </div>
    
  </div>
  <div class="card">
    <img src={Image27} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      
    </div>
  </div>
</div>
</div>

      </div>
     
    

 

   
    
   
   
   
     
    </div>
    
    </>
  )
}

export default index