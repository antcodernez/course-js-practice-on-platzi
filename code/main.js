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

// products content

const productList = [{
            name: "Drosera Capensis",
            price: 120,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPiykDwsXxevcPtbFacHU04Rb_4NuvH92G2g&usqp=CAU"
        }, 
        {
            name: "Dionea Muscipula",
            price: 150,
            image: "https://http2.mlstatic.com/D_NQ_NP_823732-MLM40604193357_012020-O.jpg"
        },
        {
            name: "Nepenthes",
            price: 300,
            image: "https://verdecora.es/blog/wp-content/uploads/2022/01/nepenthes.jpg.webp"
        }        
    ];

const cardsContainer = document.querySelector(".cards-container");

function renderProducts(array)
    {
        for (product of array)
    {
        const productCard = document.createElement("div");
        productCard.classList.add("product-cart");
        
        const img = document.createElement("img");
        img.setAttribute('src', product.image);
        img.classList.add("img-product");

        const productInfo = document.createElement("div");
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        const productName = document.createElement("p");
        productName.innerHTML = `${product.name}`;
        productPrice.innerHTML = `$ ${product.price}`;

        const productIconCartContainer = document.createElement("figure");
        const productIconCart = document.createElement("img");
        productIconCart.setAttribute("src", "../assets/icons/bt_add_to_cart.svg");

        productIconCartContainer.appendChild(productIconCart);
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productIconCartContainer);
        
        productCard.appendChild(img);        
        productCard.appendChild(productInfo);        

        cardsContainer.appendChild(productCard);        
    }
    }

// Prueba de que puedo meter cualquier mamada a mis componentes en JS
// productList.push({
//     name: "xd",
//     price: 5235252,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSERiBwAiEccLg7QH8nhzg5tyVLi-ftFaFA-7zCXKu&s"
// });

renderProducts(productList);