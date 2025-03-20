import './index.html';
import './index.scss';

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
