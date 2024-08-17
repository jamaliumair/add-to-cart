const slideImages = [
    "https://burgerlab.com.pk/wp-content/uploads/2024/05/app-banner-2.jpg?c062ef&c062ef",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6q8_0SwnNkM0c0vOT_twL1yzrcvlGuToSw&s",
    "https://pixexid.com/api/download/image/a-burger-with-a-sense-of-wanderlust-backpacks-through-a-food-landscape-with-fry-9hbp0rfh.jpeg",
];

function displaySlider() {

    let imgDiv = document.querySelectorAll(".slides")[0];
    for (let i = 0; i < slideImages.length; i++) {
        let img = `<img src="${slideImages[i]}" alt="Product ${i}">`;
        imgDiv.innerHTML += img;

    }
}
displaySlider()


const products = [
    {
        id: '0e76e2d0-d6bb-4d02-bce8-821a0ff5dbf0',
        image: "doppler.webp",
        productName: "THE DOPPLER",
        price: "$10.00",

    },
    {
        id: 'cd321dc4-fb76-46f6-bdd3-1fc24d10dc8a',
        image: "quadra.webp",
        productName: "QUADRA RELOADED",
        price: "$20.00",

    },
    {
        id: 'afa74eb7-36fd-4ac0-a75d-4b8942b37bc4',
        image: "all_american.webp",
        productName: "ALL AMERICAN DOUBLE CHEESE",
        price: "$30.00",

    },
    {
        id: 'f2407f1a-278b-4826-9b99-20249fde78c3',
        image: "big_bang.jpg",
        productName: "Big Bang",
        price: "$40.00",

    }
]

function displayProduct() {
    let productDiv = document.querySelectorAll(".product-list")[0];


    for (let i = 0; i < products.length; i++) {

        let product = products[i];
        let img = `<img src= "${product.image}" alt="${product.productName} image">`;
        let text = `<h3>${product.productName}</h3>`;
        let price = `<p>${product.price}</p>
        <button onclick="addToCartinObj(${i})" class="add-btn">Add item</button>
        `;

        let productCard = `
            <div class="product-item">
            ${img}
            ${text}
            ${price}  
            </div>`;

        productDiv.innerHTML += productCard;

        // console.log();
        // console.log(Products[i]["productName"]);
        // console.log(Products[i]["price"]);

    }

}

displayProduct()

let cartContainer = document.getElementsByClassName("cart-div")[0];
cartContainer.innerHTML += `
        <h2>Total Items: 0</h2>
        <h2>Total Price: $0.00</h2>`


let cart = {};

function addToCartinObj(index) {
    const { id } = products[index];

    if (id in cart) {
        cart[id].qty = cart[id].qty + 1;
        cart[id].totalPrice = parseFloat(cart[id].qty * cart[id].price.slice(1));

    } else {
        cart[id] = { ...products[index] };
        cart[id].qty = 1;
        cart[id].totalPrice = cart[id].qty * parseFloat(cart[id].price.slice(1));
    }

    // let allkey = Object.keys(cart);

 
    let totalItems = 0;
    let totalPrice = 0;
      for (let key in cart) {
            totalPrice += cart[key].totalPrice;
            totalItems += cart[key].qty;
      }

    console.log(cart);

    cartContainer.innerHTML = `
        <h2>Cart:</h2>
        <h2>Total Items: ${totalItems}</h2>
        <h2>Total Price: $${totalPrice}</h2>
    `

}