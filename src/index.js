import './index.html';
import './index.scss';
import './swiper-bundle';

const burger = document.querySelector('.burger-menu')
const navMenu = document.querySelector('.navbar')

burger.addEventListener("click",() =>{
    burger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active")
    navMenu.classList.remove("active")
}))
// BANER===================================================================================
// const arrowLeft = document.getElementById('arrowLeft')
// const arrowRight = document.getElementById('arrowRight')
// const banerList = document.getElementById('banerList')

// banerList.insertAdjacentHTML('beforeend', getBannerTemplate)

// render()

// function getBannerTemplate (){
//     return `
//     <li class="baner__content">
//         <div class="baner__info">
//             <img src="./img/play.svg" alt="icon-play" class="baner__icon">
//             <h4>Видео встреча</h4>
//             <p class="baner__text --text">На встрече выясняем, для решения какой основной задачи требуется сотрудник. Определяем, кто решит проблему №1. Ключевая метрика: документ, портрет целей (услуга предоставляется бесплатно)</p>
//         </div>
//         <div class="baner__img">
//             <img src="./img/video.png" alt="video">
//         </div>
//     </li>
//     `
// }



      