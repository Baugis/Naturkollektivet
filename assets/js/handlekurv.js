// OVERSIKT PRODUKTER 
// -------------------------------
let products = [
  {
    name: 'Völkl Racetiger SC Limited vMotion alpinski m/binding',
    tag: 'ino-volkl-122503SET-214--hero-x-0001',
    price: 10,
    inCart: 0
  },
  {
    name: 'Madshus Endurace Skin felleski',
    tag: 'ino-madshus-N21297-000-hero-x-0001',
    price: 20,
    inCart: 0
  },
  {
    name: 'K2 Reckoner 92 twintipski',
    tag: 'ino-k2-S220301601_1-001-hero-x-0001',
    price: 25,
    inCart: 0
  },
  {
    name: 'Head WC Rebels e-Race med Freeflex 11 GW alpinski m/binding',
    tag: 'ino-head-31326201-001-hero-x-0001',
    price: 25,
    inCart: 0
  },
  {
    name: 'Fischer Twin Skin Sport felleski',
    tag: 'ino-fischer-N240191-242-x-hero-0001',
    price: 15,
    inCart: 0
  },
  {
    name: 'Gizmo Riders Supernova rumpeakebrett',
    tag: 'akebrett1',
    price: 5,
    inCart: 0
  }
  // Må fylles på med alle produktene

];



// Gå til handlekurv 
let cart = document.querySelector('.handlevogn');
let cartText = document.querySelector('.handlevognTekst')

cart.addEventListener('click', () => {
  window.location = "./handlekurv.html";
})


// Selecter alle knappene "add-cart knappene"
let carts = document.querySelectorAll('.add-cart');
  
for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);

    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".modal-body");

    if(cartItems && productContainer) {
      productContainer.innerHTML = "";
      Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
        <div class="product">
          <div class="col-8">
            <div class=product-title">
              <div class="row align-items-center">
                <div class="col-5 d-flex align-items-center">
                  <ion-icon name="close-circle-outline" class="remove"></ion-icon>
                  <img style="height: 100px;" src="./assets/img/Produktkatalog/${item.tag}.jpg" id="${item.tag}">
                </div>
                <div class="col-7">
                  <span>${item.name}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 d-flex justify-content-center" >
            <div class="price">
              <div class="row align-items-center">
                <div class="col-12 d-flex align-items-center">
                  ${item.price} Kr
                </div>
              </div>
            </div>
          </div>
        </div>
        `
      });
    } 

  })
}


// Sette den lagrede localStorage verdien på cart
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}


// Teller klikk og setter verdi
function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if( action ) {
      localStorage.setItem("cartNumbers", productNumbers - 1);
      document.querySelector('.cart span').textContent = productNumbers - 1;
  } else if( productNumbers ) {
      localStorage.setItem("cartNumbers", productNumbers + 1);
      document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
      localStorage.setItem("cartNumbers", 1);
      document.querySelector('.cart span').textContent = 1;
  }
  setItems(product);
}


//Setter gitt produkt og teller antall
function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null) {
      let currentProduct = product.tag;
  
      if( cartItems[currentProduct] == undefined ) {
          cartItems = {
              ...cartItems,
              [currentProduct]: product
          }
      } 
      cartItems[currentProduct].inCart += 1;

  } else {
      product.inCart = 1;
      cartItems = { 
          [product.tag]: product
      };
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}


// Teller pris opp mot produkter
function totalCost( product, action ) {
  let cart = localStorage.getItem("totalCost");

  if( action) {
      cart = parseInt(cart);

      localStorage.setItem("totalCost", cart - product.price);
  } else if(cart != null) {
      
      cart = parseInt(cart);
      localStorage.setItem("totalCost", cart + product.price);
  
  } else {
      localStorage.setItem("totalCost", product.price);
  }
}


// Vise produktene på handlekurv side
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem('totalCost');

  if(cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="product">
        <div class="col-6">
          <div class=product-title">
            <div class="row align-items-center">
              <div class="col-5 d-flex align-items-center">
                <ion-icon name="close-circle-outline" class="remove"></ion-icon>
                <img src="./assets/img/Produktkatalog/${item.tag}.jpg" id="${item.tag}">
              </div>
              <div class="col-7">
                <span>${item.name}</span>
              </div>
            </div>
				  </div>
        </div>
        <div class="col-2">
          <div class="price">
            ${item.price} Kr
          </div>
        </div>
        <div class="col-2">
          <div class="quantity">
            <ion-icon name="remove-outline" class="decrease"></ion-icon>
            <span class="mx-2">${item.inCart}</span>
            <ion-icon name="add-outline" class="increase"></ion-icon>
          </div>
        </div>
        <div class="col-2">
          <div class="total">
            ${item.inCart * item.price} Kr
          </div>
        </div>
		  </div>
      `
    });

    productContainer.innerHTML += `
    <div class="basketTotalContainer">
      <h4 class="basketTotalTitle me-2">
        SUM Å BETALE: 
      </h4>
      <h4 class="basketTotal">
        ${cartCost} Kr
      </h4>
    </div>
    `





    removeBtn();
    manageQuantity();
    fixNumbers();
  } 
  
}


// KNAPPER FOR Å FJERNE PRODUKT OG REDUSERE ANTALL
// --------------------------------------------------

// Øke eller redusere antall på et produkt
function manageQuantity() {
  let decreaseButtons = document.querySelectorAll('.decrease');
  let increaseButtons = document.querySelectorAll('.increase');
  let currentQuantity = 0;
  let currentProduct = '';
  let cartItems = localStorage.getItem('productsInCart');
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartCost = localStorage.getItem("totalCost");
  cartItems = JSON.parse(cartItems);

  for(let i=0; i < increaseButtons.length; i++) {
      decreaseButtons[i].addEventListener('click', () => {
          currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
          currentProduct = decreaseButtons[i].parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.getAttribute("id");

          if( cartItems[currentProduct].inCart > 1 ) {
              cartItems[currentProduct].inCart -= 1;
              cartNumbers(cartItems[currentProduct], "decrease");
              totalCost(cartItems[currentProduct], "decrease");
              localStorage.setItem('productsInCart', JSON.stringify(cartItems));
              displayCart();
          } // OM DET ER UNDER 1
          else {
            localStorage.setItem('cartNumbers', productNumbers - cartItems[currentProduct].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[currentProduct].price * cartItems[currentProduct].inCart));

            delete cartItems[currentProduct];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
          }
      });

      increaseButtons[i].addEventListener('click', () => {
          currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
          currentProduct = increaseButtons[i].parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.getAttribute("id");

          cartItems[currentProduct].inCart += 1;
          cartNumbers(cartItems[currentProduct]);
          totalCost(cartItems[currentProduct]);
          localStorage.setItem('productsInCart', JSON.stringify(cartItems));
          displayCart();
      });
  }
}


// Fjerne et produkt
function removeBtn() {
  let deleteButtons = document.querySelectorAll('.remove');
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productTag;

  for(let i=0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener('click', () => {

      productTag = deleteButtons[i].nextElementSibling.getAttribute("id");
      
      localStorage.setItem('cartNumbers', productNumbers - cartItems[productTag].inCart);
      localStorage.setItem('totalCost', cartCost - ( cartItems[productTag].price * cartItems[productTag].inCart));

      delete cartItems[productTag];
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));

      displayCart();
      onLoadCartNumbers();
      fixNumbers();
   })
  }
}


// Når man fullfører et kjøp
// Kunne ha laget en kulere checkout med bruk av objektene som er i handlekurv
function checkout() {
  alert("Ditt kjøp er nå fullført")

  //Varene er kjøpt
  localStorage.clear()
  location.reload()
}

// FUNKER MEN HAR IKKE LIVE UPDATE
function fixNumbers() {
  console.log("plis");
  let productNumbers = localStorage.getItem('cartNumbers');
  numbers = document.getElementById("test");

  if (productNumbers >= 10) {
    numbers.style.top = "0px";
    numbers.style.right = "-7px";
    numbers.style.position = "absolute";
  }
  else {
    numbers.style.top = "0px";
    numbers.style.right = "0px";
    numbers.style.position = "absolute";
  }

}

// ONLOAD HANDLEKURV OG ANTALL
// ------------------------------------
onLoadCartNumbers();
displayCart();
fixNumbers();



