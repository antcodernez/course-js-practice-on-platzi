// menu desktop
const menuEmail = document.querySelector(".navbar-right__email");
const menuFlechita = document.querySelector(".flechita");
const menuDesktop = document.querySelector(".desktop-menu");
menuEmail.addEventListener("click", toggleDesktopMenu);
menuFlechita.addEventListener("click", toggleDesktopMenu)

function toggleDesktopMenu()
    {
        menuDesktop.classList.toggle("inactive");
    }
// menu mobile
const menuHamgurber = document.querySelector(".icon-menu");
const menuMobile = document.querySelector(".mobile-menu");

menuHamgurber.addEventListener("click", () => {menuMobile.classList.toggle("mobile-menu-translate");});

window.addEventListener("click", e =>
    {
        if(menuMobile.classList.contains("mobile-menu-translate") && e.target != menuMobile && e.target != menuHamgurber)
        {
            menuMobile.classList.toggle("mobile-menu-translate");
        }
    });

// shooping cart
const menuCartIcon = document.querySelector(".navbar-right__shooping-cart");
const shoopingCart = document.querySelector(".main-content");
const returnBtnShoppingCart = document.querySelector(".return-button-main-content");

menuCartIcon.addEventListener("click", () => { shoopingCart.classList.toggle("main-content--active")});
returnBtnShoppingCart.addEventListener("click", () => { shoopingCart.classList.toggle("main-content--active")});

// window.addEventListener("click", e => {
//     if(shoopingCart.classList.contains("main-content--active") && e.target != shoopingCart && e.target != menuCartIcon)
//         {
//             shoopingCart.classList.toggle("main-content--active");
//         }
// });
