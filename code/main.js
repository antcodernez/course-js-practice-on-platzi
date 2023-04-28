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