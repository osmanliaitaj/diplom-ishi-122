import React from 'react'
import './Cataloq.css'
import Image12 from './assets/svg/image12.svg'
import Image9 from './assets/svg/image9.svg'
import Image10 from './assets/svg/image10.svg'
import Image13 from './assets/svg/image13.svg'
import Image14 from './assets/svg/image14.svg'
import Image15 from './assets/svg/image15.svg'
import Image16 from './assets/svg/image16.svg'
import Image17 from './assets/svg/image17.svg'
import Image18 from './assets/svg/image18.svg'
import Mis from './assets/svg/card.svg'
import Mis2 from './assets/svg/miss.svg'
import Qab from './assets/svg/misqab.svg'
import Aksesuar from './assets/svg/aksesuar.svg'


const cataloq = () => {
  return (
    <>
    <div className="form">
        <div className="container">

        <h1>Ana/Kataloq</h1>
        <h2>Kataloq</h2>

        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={Mis} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={Mis2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={Qab} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={Aksesuar} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
      </div>
    </div>
  </div>
</div>



        <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav> 
         
<div className="select-menu">
    <select class="form-select" aria-label="Default select example">
  <option selected>select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>


    </div>


    <div className="card-groups">
    <div class="card-group">
  <div class="card">
    <img src={Image12} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card">
    <img src={Image9} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      
    </div>
  </div>
  <div class="card">
    <img src={Image10} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
     
    </div>
  </div>

  <div className="sale-card">
  <div class="card-group">
  <div class="card">
    <img src={Image13} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      
    </div>
  </div>
  <div class="card">
    <img src={Image14} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      
    </div>
  </div>
  <div class="card">
    <img src={Image15} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      
    </div>
  </div>
</div>
  </div>

  <div className="sale-group">
  <div class="card-group">
  <div class="card">
    <img src={Image16} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     
    </div>
  </div>
  <div class="card">
    <img src={Image17} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      
    </div>
  </div>
  <div class="card">
    <img src={Image18} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      
    </div>
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
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    </div>



        
        </div>
    </div>
    

   

    

    </>
  )
}

export default cataloq