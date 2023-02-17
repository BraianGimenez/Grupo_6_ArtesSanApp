let burgerMenu = document.querySelector(".header-burger-menu-barra");
let closeBurgerMenu = document.querySelector(".header-burger-menu-close")
let burgerMenuFondo = document.querySelector(".header-burger-menu")
let burgerMenuCartBtn = document.querySelector(".header-go-cart");
let burgerMenuLoginBtn = document.querySelector(".header-log-in");
/* burgerMenu.style.border="3px solid red" */

burgerMenu.addEventListener("click",abrirMenu);
closeBurgerMenu.addEventListener("click",cerrarMenu);

function abrirMenu(){
    if(burgerMenu.className == "header-burger-menu-barra"){
        burgerMenu.className = "header-burger-menu-barra-burger"
        closeBurgerMenu.className = "header-burger-menu-close-burger"
        burgerMenuFondo.className ="header-burger-menu-burger"
        burgerMenuCartBtn.className ="header-go-cart-burger"
        burgerMenuLoginBtn.className ="header-log-in-burger"
    }
}

function cerrarMenu(){
    if(!(burgerMenu.className == "header-burger-menu-barra")){
        burgerMenu.className = "header-burger-menu"
        closeBurgerMenu.className = "header-burger-menu-close"
        burgerMenuFondo.className ="header-burger-menu"
        burgerMenu.className = "header-burger-menu-barra"
        burgerMenuCartBtn.className ="header-go-cart"
        burgerMenuLoginBtn.className ="header-log-in"
    }
}