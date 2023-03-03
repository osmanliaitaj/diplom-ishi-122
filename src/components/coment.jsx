import React from 'react'
import HandSome from './assets/svg/handsome.svg'

const coment = () => {
  return (
    <div className='coment container'>
        <h1>Bizim haqqımızda nə düşünürlər</h1>
        <div className='coment'>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={HandSome} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">İvan İvanov</h5>
        <p class="card-text">Avadanlıqlarımız əl işidir. Məhsullarımızın keyfiyyətinə daim nəzarət edirik. Eyni zamanda, ilk 2 il ərzində daşınma və ya istismar zamanı nasazlıqlar baş verərsə, biz həmişə müştəri ilə problemi həll etməyin ən əlverişli yolunu tapırıq.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={HandSome} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">İvan İvanov</h5>
        <p class="card-text">Avadanlıqlarımız əl işidir. Məhsullarımızın keyfiyyətinə daim nəzarət edirik. Eyni zamanda, ilk 2 il ərzində daşınma və ya istismar zamanı nasazlıqlar baş verərsə, biz həmişə müştəri ilə problemi həll etməyin ən əlverişli yolunu tapırıq.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={HandSome} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">İvan İvanov</h5>
        <p class="card-text">Avadanlıqlarımız əl işidir. Məhsullarımızın keyfiyyətinə daim nəzarət edirik. Eyni zamanda, ilk 2 il ərzində daşınma və ya istismar zamanı nasazlıqlar baş verərsə, biz həmişə müştəri ilə problemi həll etməyin ən əlverişli yolunu tapırıq.</p>
      </div>
    </div>
  </div>

</div>

        </div>
    </div>
  )
}

export default coment