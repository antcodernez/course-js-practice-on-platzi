
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
            id: 1,
            name: "Drosera Capensis",
            price: 120,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPiykDwsXxevcPtbFacHU04Rb_4NuvH92G2g&usqp=CAU",
            description: "Drosera capensis: Sticky, red-tentacled carnivorous plant. Lures and traps insects on its mucilage-covered leaves."
        }, 
        {
            id: 2,
            name: "Dionea Muscipula",
            price: 150,
            image: "https://http2.mlstatic.com/D_NQ_NP_823732-MLM40604193357_012020-O.jpg",
            description: "Dionea muscipula: Venus Flytrap. Carnivorous plant with two lobes on each leaf that snap shut when triggered by an insect. Known for its fast movements and digestive enzymes."
        },
        {
            id: 3,
            name: "Nepenthes",
            price: 300,
            image: "https://verdecora.es/blog/wp-content/uploads/2022/01/nepenthes.jpg.webp",
            description: "Nepenthes: Tropical pitcher plant. Carnivorous plant with a deep, slippery cavity filled with digestive liquid, used to trap and digest insects. Some species can grow quite large."
        }        
    ];

const cardsContainer = document.querySelector(".cards-container");

function productDetail()
    {
        alert("Hola papi")
    }

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
        productPrice.innerHTML = `$${product.price}`;

        const productIconCartContainer = document.createElement("figure");
        const productIconCart = document.createElement("img");
        productIconCart.setAttribute("src", "../assets/icons/bt_add_to_cart.svg");
        productIconCart.classList.add("button-add");
        productIconCart.setAttribute("onclick", "productDetail()");
        productIconCartContainer.appendChild(productIconCart);
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        productInfo.append(productInfoDiv, productIconCartContainer);
        // con append puedo meter varios nodos de matrazo jaja        
        productCard.appendChild(img);        
        productCard.appendChild(productInfo);        

        cardsContainer.appendChild(productCard);        
    }
    }

// Prueba de que puedo meter cualquier mamada a mis componentes en JS
productList.push({
    id: 4,
    name: "Drosera spatulata",
    price: 130,
    description: "Drosera spatulata: Carnivorous sundew plant with spatula-shaped leaves covered in glandular tentacles that secrete a sticky substance. The substance traps insects, which are then digested by the plant's enzymes.",
    image: "https://macetaman.com/wp-content/uploads/2021/04/drosera-spatulata.jpg", 
});

renderProducts(productList);

// Product detail

const products = document.querySelectorAll(".button-add");