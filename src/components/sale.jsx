import React from 'react'
import "./Sale.css"
import Image34 from "./assets/svg/image34.svg"
import Image35 from "./assets/svg/image35.svg"
import Image36 from "./assets/svg/image36.svg"

const sale = () => {
  return (
    <div className='sale'>
      <h1>Endirimlər</h1>
        <div className='container sale'>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={Image34} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Çini qulplu mis çaynik</h5>
        <p class="card-text">100 AZN</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Image35} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Çini qulplu mis çaynik</h5>
        <p class="card-text">100 AZN</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={Image36} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Çini qulplu mis çaynik</h5>
        <p class="card-text">100 AZN</p>
      </div>
    </div>
  </div>
 
</div>

        </div>
       

    </div>
  )
}

export default sale