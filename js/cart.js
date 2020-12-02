let carts = document.querySelectorAll('.add-cart');

let product = [
    {
    
        name: 'Apple TV',
        tag: 'Wireless prefix box',
        price: 49.00,
        inCart: 0,
        img: 'assets/main/main__card/Photo-one.png'
    },
    {
        name: 'Pebble Time',
        tag: 'Time',
        price: 29.00,
        inCart: 0,
        img: 'assets/main/main__card/Photo2.png'
    },
    {
        name: 'Zendure 4',
        tag: 'Zendure',
        price: 49.00,
        inCart: 0,
        img: 'assets/main/main__card/Zendure_4-Port_USB.png'
    },
    {
        name: 'Withings Smart',
        tag: 'Withings Smart',
        price: 39.00,
        inCart: 0,
        img: 'assets/main/main__card/Photo3.png'
    },
    {
        name: 'Ollo Clip New',
        tag: 'Ollo Clip New',
        price: 39.00,
        inCart: 0,
        img: 'assets/main/main__card/Photo5.png'
    },
    {
        name: 'Activity Tracker',
        tag: 'Tracker',
        price: 39.00,
        inCart: 0,
        img: 'assets/main/main__card/Photo6.png'
    },
    {
        name: 'Apple Watch Sport',
        tag: 'Watch Sport',
        price: 49.00,
        inCart: 0,
        img: 'assets/main/main__card/Photo7.png'
    },
    {
        name: 'Bose SoundLink',
        tag: 'SoundLink',
        price: 119.99,
        inCart: 0,
        img: 'assets/main/main__card/Photo8.png'
    },
    {
        name: 'Withings Smart',
        tag: 'Withings Smart',
        price: 39.00,
        inCart: 0,
        img: 'assets/main/main__card/sm-w.png'
    },
    {
        name: 'Watch Active White',
        tag: 'Watch Active White',
        price: 39.00,
        inCart: 0,
        img: 'assets/main/main__card/sm-w2.png'
    },
    {
        name: 'Watch Active Green',
        tag: 'Watch Active Green',
        price: 250.00,
        inCart: 0,
        img: 'assets/main/main__card/sm-w_green.png'
    },
    {
        name: 'Watch Active Black',
        tag: 'Watch Active Black',
        price: 250.00,
        inCart: 0,
        img: 'assets/main/main__card/sm-w_black.png'
    },
    {
        name: 'Apple iMac 27',
        tag: 'Apple iMac 27',
        price: 2000.00,
        inCart: 0,
        img: 'assets/main/main__card/apple_imac_27.jpg'
    },
    {
        name: 'iMac Pro 27',
        tag: 'iMac Pro 27',
        price: 5300.00,
        inCart: 0,
        img: 'assets/main/main__card/apple_imac_pro_27.jpg'
    },
    {
        name: 'iMac 21',
        tag: 'iMac 21',
        price: 1800.00,
        inCart: 0,
        img: 'assets/main/main__card/copy_apple.jpg'
    },
    {
        name: 'Apple iMac 27',
        tag: 'Apple iMac 27',
        price: 2200.00,
        inCart: 0,
        img: 'assets/main/main__card/copy_apple.jpg'
    },
    {
        name: 'Apple iMac 27',
        tag: 'Apple iMac 27',
        price: 1900.00,
        inCart: 0,
        img: 'assets/main/main__card/apple_mrt32.jpg'
    },
    {
        name: 'Apple iMac 27  i5 4K',
        tag: 'Apple iMac 27  i5 4K',
        price: 2500.00,
        inCart: 0,
        img: 'assets/main/main__card/apple_imac_27.jpg'
    },
    {
        name: 'Acer Aspire',
        tag: 'Acer Aspire',
        price: 1000.00,
        inCart: 0,
        img: 'assets/main/main__card/acer_1.jpg'
    },
    {
        name: 'Acer Swift 3',
        tag: 'Acer Swift 3',
        price: 800.00,
        inCart: 0,
        img: 'assets/main/main__card/copy_acer_2.jpg'
    },
    {
        name: 'Acer Nitro 5',
        tag: 'Acer Nitro 5',
        price: 1200.00,
        inCart: 0,
        img: 'assets/main/main__card/acer_3.jpg'
    },
    {
        name: 'Acer Aspire 5',
        tag: 'Acer Aspire 5',
        price: 900.00,
        inCart: 0,
        img: 'assets/main/main__card/acer_4.jpg'
    },
    {
        name: 'Acer Nitro 7',
        tag: 'Acer Nitro 7',
        price: 1500.00,
        inCart: 0,
        img: 'assets/main/main__card/acer_5.jpg'
    },
    {
        name: 'Acer Swift 3 Blue',
        tag: 'Acer Swift 3 Blue',
        price: 1000.00,
        inCart: 0,
        img: 'assets/main/main__card/acer_6.jpg'
    },
    {
        name: 'Dell Inspiron Black',
        tag: 'Dell Inspiron Black',
        price: 800.00,
        inCart: 0,
        img: 'assets/main/main__card/dell.jpg'
    },
    {
        name: 'Dell G3',
        tag: 'Dell G3',
        price: 1000.00,
        inCart: 0,
        img: 'assets/main/main__card/copy_dell_1.jpg'
    },
    {
        name: 'Dell Inspiron',
        tag: 'Dell Inspiron',
        price: 8500.00,
        inCart: 0,
        img: 'assets/main/main__card/copy_dell_3.jpg'
    },
    {
        name: 'Dell Inspiron G5',
        tag: 'Dell Inspiron G5',
        price: 2000.00,
        inCart: 0,
        img: 'assets/main/main__card/copy_dell_4.jpg'
    },
    {
        name: 'Dell Inspiron 5490',
        tag: 'Dell Inspiron 5490',
        price: 950.00,
        inCart: 0,
        img: 'assets/main/main__card/copy_dell_5.jpg'
    },
    {
        name: 'Dell G5 15',
        tag: 'Dell G5 15',
        price: 1850.00,
        inCart: 0,
        img: 'assets/main/main__card/acer_5.jpg'
    },
    {
        name: 'Apple Watch Sport',
        tag: 'Watch Sport',
        price: 49.00,
        inCart: 0,
        img: 'assets/main/main__card/Photo7.png'
    },
    {
        name: 'Apple Watch Series 6',
        tag: 'Apple Watch Series 6',
        price: 500.00,
        inCart: 0,
        img: 'assets/main/main__card/apple_watch_1.jpg'
    },
    {
        name: 'Apple Watch SE',
        tag: 'Apple Watch SE',
        price: 109.00,
        inCart: 0,
        img: 'assets/main/main__card/apple_watch_2.jpg'
    },
    {
        name: 'Honor Watch Magic',
        tag: 'Honor Watch Magic',
        price: 150.00,
        inCart: 0,
        img: 'assets/main/main__card/honor_watch_1.jpg'
    },
    {
        name: 'Honor Watch MagicWatch 2',
        tag: 'Honor Watch MagicWatch 2',
        price: 120.00,
        inCart: 0,
        img: 'assets/main/main__card/honor_2.jpg'
    },
    {
        name: 'Honor Watch 2',
        tag: 'Honor Watch 2',
        price: 150.00,
        inCart: 0,
        img: 'assets/main/main__card/honor_3.jpg'
    },
    {
        name: 'Gelius Pro GP',
        tag: 'Gelius Pro GP',
        price: 150.00,
        inCart: 0,
        img: 'assets/main/main__card/g_1.jpg'
    },
    {
        name: 'Gelius SW005',
        tag: 'Gelius SW005',
        price: 150.00,
        inCart: 0,
        img: 'assets/main/main__card/g_2.jpg'
    },
    {
        name: 'Gelius Pro NEO',
        tag: 'Gelius Pro NEO',
        price: 250.00,
        inCart: 0,
        img: 'assets/main/main__card/g_3.jpg'
    },
    {
        name: 'iPhone 12 128GB',
        tag: 'iPhone 12 128GB',
        price: 1100.00,
        inCart: 0,
        img: 'assets/main/main__card/iphone-5.jpg'
    },
    {
        name: 'iPhone 11 64GB',
        tag: 'iPhone 111 64GB',
        price: 900.00,
        inCart: 0,
        img: 'assets/main/main__card/iphone7.jpg'
    },
    {
        name: 'iPhone 11 128GB',
        tag: 'iPhone 111 128GB',
        price: 900.00,
        inCart: 0,
        img: 'assets/main/main__card/iphone-6.jpg'
    },
    {
        name: 'Redmi Note 9',
        tag: 'Redmi Note 9',
        price: 500.00,
        inCart: 0,
        img: 'assets/main/main__card/x_1.jpg'
    },
    {
        name: 'Xiaomi Mi 10T',
        tag: 'Xiaomi Mi 10T',
        price: 1000.00,
        inCart: 0,
        img: 'assets/main/main__card/x_2.jpg'
    },
    {
        name: 'Xiaomi Mi Note 10',
        tag: 'Xiaomi Mi Note 10',
        price: 1000.00,
        inCart: 0,
        img: 'assets/main/main__card/x_3.jpg'
    },
    {
        name: 'Nokia 3',
        tag: 'Nokia 3',
        price: 300.00,
        inCart: 0,
        img: 'assets/main/main__card/nokia_1.jpg'
    },
    {
        name: 'Nokia 5',
        tag: 'Nokia 5',
        price: 300.00,
        inCart: 0,
        img: 'assets/main/main__card/nokia_2.jpg'
    },
    {
        name: 'Nokia 2',
        tag: 'Nokia 2',
        price: 300.00,
        inCart: 0,
        img: 'assets/main/main__card/nokia_3.jpg'
    },
    {
        name: 'Apple AirPods',
        tag: 'Apple AirPods',
        price: 600.00,
        inCart: 0,
        img: 'assets/main/main__card/access_1.jpg'
    },
    {
        name: 'JBL Live',
        tag: 'JBL Live',
        price: 100.00,
        inCart: 0,
        img: 'assets/main/main__card/jbl_1.jpg'
    },
    {
        name: 'JBL Free X',
        tag: 'JBL Free X',
        price: 90.00,
        inCart: 0,
        img: 'assets/main/main__card/jbl_2.jpg'
    },
    {
        name: 'JBL Tune',
        tag: 'JBL Tune',
        price: 80.00,
        inCart: 0,
        img: 'assets/main/main__card/jbl_3.jpg'
    }
]

 // adds to the number
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(product[i]);
        totalCost(product[i]);
    })
}

 // remembers the name in the cart
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

 // displays the number of selected items
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

    // adds an assortment to the cart
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        // adds the entire assortment to the cart
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1
        cartItems = {
            [product.tag]: product
        }
    } 
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

    // price calculator
function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null) {
        // translates into number
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

    // display on the screen
function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class = "product">
                <ion-icon name="close-circle-outline"></ion-icon>
                <img srs = "./assets/main/main__card/${item.tag}.png">
                <span>${item.name}</span>
            </div>
            <div class = "price">${item.price}</div>
            <div class = "quantity">
                <ion-icon id = "plus" name="arrow-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon id = "minus" name="arrow-forward-circle-outline"></ion-icon>
            </div>
            <div class = "total">
            ${item.inCart * item.price},00
            </div>
            `;
        });

        // the total cost
        productContainer.innerHTML += `
        <div class = "baketTotalContainer">
            <h4 class = "baketTotalTitle">
                Basket total
            </h4>
            <h4 class = "baketTotal">
                $${cartCost},00
            </h4>
        `;

    }
}

onLoadCartNumbers();
displayCart();


