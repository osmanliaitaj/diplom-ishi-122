import React from 'react'
import "./News.css"
import Image19 from './assets/svg/image19.svg'
import Image20 from './assets/svg/image20.svg'
import Image21 from './assets/svg/image21.svg'
import Image22 from './assets/svg/image22.svg'
import Image23 from './assets/svg/image23.svg'
import Image24 from './assets/svg/image24.svg'

const news = () => {
  return (
    <>
    
    
    
    <div className="container">
    <h1>Ana/Xəbərlər</h1>
    <h2>Xəbərlər</h2>
     
      <div className="row">
      
      <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src={Image19} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Efir yağlarının faydalarını qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, onda bəzi nüanslar var. Müəyyən qaydalara ciddi riayət etmək lazımdır ....</h5>
        <a className="card-button">
        <button>Daha çox oxu</button>
        </a>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Image20} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Efir yağlarının faydalarını qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, onda bəzi nüanslar var. Müəyyən qaydalara ciddi riayət etmək lazımdır ....</h5>
        <a class="card-button">
        <button>Daha çox oxu</button>
        </a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Image21} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Efir yağlarının faydalarını qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, onda bəzi nüanslar var. Müəyyən qaydalara ciddi riayət etmək lazımdır ...</h5>
        <a class="card-text">
        <button>Daha çox oxu</button>
        </a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Image22} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Efir yağlarının faydalarını qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, onda bəzi nüanslar var. Müəyyən qaydalara ciddi riayət etmək lazımdır ...</h5>
        <a class="card-text">
        <button>Daha çox oxu</button>
        </a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img src={Image23} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Efir yağlarının faydalarını qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, onda bəzi nüanslar var. Müəyyən qaydalara ciddi riayət etmək lazımdır ...</h5>
        <a class="card-text">
        <button>Daha çox oxu</button>
        </a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img src={Image24} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Efir yağlarının faydalarını qiymətləndirmək olmaz. Onlar, şübhəsiz ki, insanlar üçün faydalıdırlar, amma ev heyvanları haqqında danışırıqsa, onda bəzi nüanslar var. Müəyyən qaydalara ciddi riayət etmək lazımdır ...</h5>
        <a class="card-text">
        <button>Daha çox oxu</button>
        </a>
      </div>
    </div>
  </div>
</div>
      </div>

      <div className="pagination">
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <button  class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        </button> 
    </li>
  </ul>
</nav>
    </div>
    </div>

    


    </>
  )
}

export default news