// - - - - - Main Variables  - - - - - //

// Products Data
let productsDB = [
  {
    id: 1,
    imgSrc: 'images/bag.jpg',
    title: "Backpack",
    price: 39,
    size: "Large",
    color: "#000",
    qty: 0,
    isLiked: false,
    cost: 0
  },
  {
    id: 2,
    imgSrc: 'images/chair.jpg',
    title: "Chair",
    price: 55,
    size: "Medium",
    color: "#000",
    qty: 0,
    isLiked: false,
    cost: 0
  },
  {
    id: 3,
    imgSrc: 'images/headset.jpg',
    title: "Headset",
    price: 25,
    size: "Small",
    color: "#000",
    qty: 0,
    isLiked: false,
    cost: 0
  },
  {
    id: 4,
    imgSrc: 'images/shose.jpg',
    title: "Shoes",
    price: 15,
    size: "Samll",
    color: "#000",
    qty: 0,
    isLiked: false,
    cost: 0
  },
  {
    id: 5,
    imgSrc: 'images/SweatShirt.jpg',
    title: "SweatShirt",
    price: 44,
    size: "Large",
    color: "#000",
    qty: 0,
    isLiked: false,
    cost: 0
  },
  {
    id: 6,
    imgSrc: 'images/watch.jpg',
    title: "Watch",
    price: 70,
    size: "Medium",
    color: "gray",
    qty: 0,
    isLiked: false,
    cost: 0
  }
];

// Get All The Products Data From Local Storage
let productsStorage = 
  // If The In products Data Is Existed
  JSON.parse(localStorage.getItem('products')) 
  // Get The Data
  ? JSON.parse(localStorage.getItem('products')) 
  // Else Return productsDB
  : productsDB;

// Set The Products Data In The LocalStorage
localStorage.setItem('products', JSON.stringify(productsStorage));

// Get All In Cart Data From Local Storage
let inCartProductsData = 
// If The InCart Data Is Existed
  JSON.parse(localStorage.getItem("InCartProducts")) 
  // Get The Data
  ? JSON.parse(localStorage.getItem("InCartProducts")) 
  // Else Return []
  : [];

// Select The Conatiner 
let conatiner = document.querySelector('.conatiner');

// Select Header Of The Page
let headerDom = document.querySelector('header');

// Select Cart Icon Button
let cartBtn = document.querySelector('.header-cart');

// Select Products Area 
let productsArea = document.querySelector('.products-area');

// Select The Input Search 
let inputSearchDom = document.querySelector('.inputSearch');

// Select The Input Search 
let alarmSearch = document.querySelector('.noSearchAlarm');

// Select Primary Color Area
let primaryArea = document.querySelector('.primary-area');

// Select Primary Color Button
let showPrimaryBtn = document.querySelector('.show-PrimaryBox-Btn');

// Select All The Colors Boxs [ Spans ]
let primaryColorsBoxSpans = document.querySelectorAll('.primary-colors-box span');

// - - - - - Main Cart Variables - - - - - //

// Select Cart Conatiner
let cartConatiner = document.querySelector('.cart-container');

// Select Close Icon Button
let closeCartBtn = document.querySelector('.closeCart-btn');

// Select In Cart Area
let inCartArea = document.querySelector('.inCart-area');

// Select Cart Badge Lenght
let badgeCartLength = document.querySelector('.badge > span');

// Select No Products Alarm Box
let noProductBox = document.querySelector('.noProductsInCart');

// Select The Total Price Box
let totalPriceBoxDom = document.querySelector('.totalPrice-box');

// Select The Checkout Button
let checkoutBtn = document.querySelector('.checkout-btn');

// - - - - - Main Favorites Variables - - - - - //

// Select Favorites Conatiner
let favoritesConatiner = document.querySelector('.favorites-container');

// Select No Products Alarm Box
let noFavoritesBox = document.querySelector('.noFavorites');

// Select In Favorites Area
let inFavoritesArea = document.querySelector('.inFavorites-area');

// Select Favorites Icon Button
let favoritetBtn = document.querySelector('.header-favoriet');

// Select Close Icon Button
let closeFavoritesBtn = document.querySelector('.closeFavorites-btn');

// Select Cart Badge Lenght
let badgeFavoritesLength = document.querySelector('.favbadge > span');

// Variables For Functions Expressions 
let drawProducts;          // Draw Products Function
let drawIncartProducts;    // Draw In Cart Products Function
let drawfavoritesProducts; // Draw Favorites Products Function
let setTotalPrice;         // For Set The Total Price Function
let setPrimaryColor;       // For Set The Primary Color Function

// - - - - - Events - - - - - //

// Whene Click On Cart Button Run Funtion Open Window
cartBtn.addEventListener('click', () => { openWindow(cartConatiner) });

// Whene Click On Favorites Button Run Funtion Open Window
favoritetBtn.addEventListener('click', () => { openWindow(favoritesConatiner) });

// Whene Click On Close Cart Button Run Funtion Close Window
closeCartBtn.addEventListener('click', () => { closeWindow(cartConatiner) });

// Whene Click On Close Favorites Button Run Funtion Close Window
closeFavoritesBtn.addEventListener('click', () => { closeWindow(favoritesConatiner) });

// When The Value Of An Input Element Has Been Changed. 
inputSearchDom.addEventListener('input', searchToProduct);

// When Click On Document Page Run Funtion Open Primary Area
document.addEventListener('click', openPrimaryColorsArea);

// - - - - - Functions - - - - - //

// Function Draw Products
(drawProducts = function(products = []){
  // Get The In Cart Products Data
  let inCartProductsData = 
    // If The InCart Data Is Existed
    JSON.parse(localStorage.getItem("InCartProducts")) 
    // Get The Data
    ? JSON.parse(localStorage.getItem("InCartProducts")) 
    // Else Return []
    : [];

  // Loop On ALL Products 
  let productsBoxs = products.map(item => {
    // Return For Me The Product
    return `
    <div class="product-box">
      <!-- Favoriet Box -->
      <div class="product-favorite">
        <i onclick="addToFavorites(${item.id})" class='bx bx-heart'
        style="color: ${item.isLiked === true ? 'red' : '#1e1e1e'}"
        ></i>
      </div>
      <div class="product-image">
        <img src="${item.imgSrc}" alt="Product Image">
      </div>
      <!-- Action Box -->
      <div class="action-box">
        <button onclick="addToCart(${item.id})">Add To <i class='bx bx-cart bx-tada'></i></button>
      </div>
      <!-- Product Info -->
      <div class="product-info">
        <!-- Info Head [ Title & Price ] -->
        <div class="info-head">
          <span class="title">${item.title}</span>
          <span class="price">$${item.price}</span>
        </div>
        <!-- Description Info -->
        <div class="desc-info">
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <!-- Details Info [ Size & Color ] -->
        <div class="deatils-info">
          <div class="size-info">
            <span class="size-title">Size</span>
            <div class="size-type">${item.size}</div>
          </div>
          <div class="color-info">
            <span class="color-title">Color</span>
            <div class="color-type" style="background-color: ${item.color};"></div>
          </div>
        </div>
      </div>
    </div>
    `
  });

  // Append The Loop Data Inside The [ Products Area ]
  productsArea.innerHTML = productsBoxs.join(''); // <-- The Join('') Function For Clear All The [ ' ]

  // Set The inCartProductsData length Inside Product Badge Length
  badgeCartLength.innerHTML = inCartProductsData.length;

})(JSON.parse(localStorage.getItem('products')) || products); // Draw The Products Storage Or The Sended Products

// Function Open Window 
function openWindow(targetElement) {
  // Toggle Class [ Open ] On The Target Element
  targetElement.classList.toggle('open');
  // Toggle Class [ Hide ] On The Container
  conatiner.classList.toggle('hide')
};

// Function Close Window 
function closeWindow(targetElement) {
  // Remove Class [ Open ] From The Target Element
  targetElement.classList.remove('open');
  // Remove Class [ Hide ] From The Container
  conatiner.classList.remove('hide')
};

// Function Draw In Cart Products
(drawIncartProducts = function(inCartStorageData = []) {
  // Get All In Cart Products
  inCartStorageData = 
  // If In Cart Products Data Is Existed
  JSON.parse(localStorage.getItem('InCartProducts')) 
  // If He Is Existed Get The Data
  ? JSON.parse(localStorage.getItem('InCartProducts')) 
  // Eles Return []
  : [];

  // Loop On ALL In Cart Products
  let inCartProducts = inCartStorageData.map(item => {
    // Return The In Cart Product
    return `
    <!-- In Cart Product -->
    <div class="inCart-product">
      <img src="${item.imgSrc}" alt="Product Image">
      <div class="inCart-product-info">
        <span>${item.title}</span> <!-- Title -->
        <span>Size: ${item.size}</span> <!-- Size -->
        <span>Price: $${item.price}</span> <!-- Price -->
        <span>Cost: $${item.cost}</span> <!-- Cost -->
      </div>
      <!-- Quantity Info -->
      <div class="quantity-box">
        <span class="btn" onclick="increaseProductQty(${item.id})"><i class='bx bxs-up-arrow'></i></span> <!-- Button Increase -->
        <span>${item.qty}</span> <!-- Quantity Count -->
        <span class="btn ${item.qty === 0 ? 'disabled' : ''}" onclick="decreaseProductQty(${item.id})"><i class='bx bxs-down-arrow'></i></span> <!-- Button Decrease -->
      </div>
      <!-- Delete Product Button -->
      <div onclick="deleteProduct(${item.id})" class="delete-btn">
        <i class="bx bxs-trash-alt"></i>
      </div>
    </div>
    <!-- End In Cart -->
    `
  });

  // Append The In Cart Products Inside The Cart Area
  inCartArea.innerHTML = inCartProducts.join('');

  // Check If The Cart Length Is Empty
  if(inCartStorageData.length === 0 || inCartStorageData.length === null){
    // Show The Alarm
    noProductBox.classList.add('show');
    // Hide The Total Price Box
    totalPriceBoxDom.style.opacity = '0';
    // Hide The Checkout Button
    checkoutBtn.style.opacity = '0';
  }else{ // Eles
    // Hide The Alarm
    noProductBox.classList.remove('show');
    // Show The Total Price Box
    totalPriceBoxDom.style.opacity = '1';
    // Show The Checkout Button
    checkoutBtn.style.opacity = '1';
  };
})();

// Function Add Product To Cart 
function addToCart(id) {
  // Get The In Cart Products Data
  let inCartProductsData = 
    // If The InCart Data Is Existed
    JSON.parse(localStorage.getItem("InCartProducts")) 
    // Get The Data
    ? JSON.parse(localStorage.getItem("InCartProducts")) 
    // Else Return []
    : [];

  // Get The Target Product ..
  let targetProduct = productsDB.find((item) => item.id === id);

  // Check If The Product Is In Cart
  let isInCart = inCartProductsData.find((item) => item.id === targetProduct.id);

  // If The [ isInCart ] Is True 
  if(isInCart) {
    alert("Product Is In Cart Already");
  }else{ // Else
    // Push Him Inside The In Cart Products Data
    inCartProductsData.push(targetProduct);
  };

  // Set The inCartProductsData length Into Product Badge Length
  badgeCartLength.innerHTML = inCartProductsData.length;

  // Update The In Cart Products After The Changes
  localStorage.setItem("InCartProducts", JSON.stringify(inCartProductsData));

  // Call Function Draw In Cart Product
  drawIncartProducts();

};

// Function Delete Product From Cart
function deleteProduct(id) {
  // Get All In Cart Products
  inCartStorageData = 
  // If In Cart Products Data Is Existed
  JSON.parse(localStorage.getItem('InCartProducts')) 
  // If He Is Existed Get The Data
  ? JSON.parse(localStorage.getItem('InCartProducts')) 
  // Eles Return []
  : [];

  // Select The Target In Product By Id
  let targetProduct = inCartStorageData.find(item => item.id === id);

  // Call Function Delete Cost
  deleteCost(targetProduct.cost);

  // Check If The Any Product In Cart Products Is Not Equle The [ Id ] Get Him
  // Else He Is Equle The [ Id ], Remove Him And Back The Another Data [ Clean Data Withou The Deleted Product (: ]
  let filterdData = inCartStorageData.filter(item => item.id !== id);

  // Update The In Cart Products After The Changes
  localStorage.setItem("InCartProducts", JSON.stringify(filterdData));

  // Set The filterd Data length Inside Product Badge Length
  badgeCartLength.innerHTML = filterdData.length;

  // Call The Funcction Draw Product In Cart For Get The Last Updated In The Cart
  drawIncartProducts();
};

// Function Draw The Favorites Products
(drawfavoritesProducts = function() {
  // Get All The Products Data
  let products = 
  // If The Products Is Existed
  JSON.parse(localStorage.getItem('products')) ? 
  // Get The Data
  JSON.parse(localStorage.getItem('products')) 
  // Else Return The [ productsDB ]
  : productsDB;

  // Get The Only Favorites Products From The Products
  let favorietsProducts = products.filter(item => item.isLiked === true);

  // Loop On ALL Favorites Products
  let inFavoritesProducts = favorietsProducts.map(item => {
    // Return The Favorite Product
    return `
    <!-- In Favorites Product -->
    <div class="inFavorites-product">
      <img src="${item.imgSrc}" alt="Favorite Product Image">
      <div class="inFavorites-product-info">
        <span>${item.title}</span> <!-- Title -->
        <span>Lorem ipsum dolor sit amet.</span> <!-- Description -->
        <span>Size: ${item.size}</span> <!-- Size -->
        <span>Price: $${item.price}</span> <!-- Price -->
      </div>
      <!-- Delete Product Button -->
      <div onclick="deleteFavoriteProduct(${item.id})" class="deleteFave-btn">
        <i class="bx bxs-trash-alt"></i>
      </div>
    </div>
    <!-- End In Cart -->
    `
  });

  // Append The In Favorites Products Inside The In Favorites Area
  inFavoritesArea.innerHTML = inFavoritesProducts.join('');
  
  // Set The Favoriets Products length Inside Favorites Badge Length
  badgeFavoritesLength.innerHTML = favorietsProducts.length;

  // Check If The Favorites Products Length Is Empty or Null
  if(favorietsProducts.length === 0 || favorietsProducts.length === null){
    // Show The Alarm
    noFavoritesBox.classList.add('show');
  }else{ // Eles
    // Hide The Alarm
    noFavoritesBox.classList.remove('show');
  };  
})();

// Function Add Product To Favorites
function addToFavorites(id){
  // Get All The Products Data  
  let products = 
  // If The Products Is Existed
  JSON.parse(localStorage.getItem('products')) ? 
  // Get The Data
  JSON.parse(localStorage.getItem('products')) 
  // Else Return The [ productsDB ]
  : productsDB;

  // Get The Target Product ..
  let targetProduct = products.find((item) => item.id === id);

  // Check If The Target Product Is Liked
  if(targetProduct.isLiked === true){
    // Make The Target Product [ isLiked ] False
    targetProduct.isLiked = false;
  }else{ // Else
    // Make The Target Product [ isLiked ] True
    targetProduct.isLiked = true;
  }

  // Update The Products Data After The Changes
  localStorage.setItem('products', JSON.stringify(products));

  // Call Function Draw Products
  drawProducts();

  // Call Function Search To Products
  searchToProduct(products);

  // Call Function Draw Favorites Products
  drawfavoritesProducts();
};

// Function Delete Product From Favorite
function deleteFavoriteProduct(id) {
  // Call Function Add To Favorites Products
  addToFavorites(id)
};

// Function Increase Product Quantity
function increaseProductQty(id) {
  // Get The In Cart Products Data
  let inCartProducts = 
    // If The InCart Data Is Existed
    JSON.parse(localStorage.getItem("InCartProducts")) 
    // Get The Data
    ? JSON.parse(localStorage.getItem("InCartProducts")) 
    // Else Return inCartProductsData
    : inCartProductsData;

  // Select The Target In Product By Id
  let inCartTargetProduct = inCartProducts.find(item => item.id === id);

  // Plus One In The Target Product Quantity
  inCartTargetProduct.qty += 1;

  // Let The Product Cost Equal Himself Plus The Product Price Every Time
  inCartTargetProduct.cost = inCartTargetProduct.cost + inCartTargetProduct.price;

  // Update The In Cart Products After The Changes
  localStorage.setItem("InCartProducts", JSON.stringify(inCartProducts));

  // Call Function Draw In Cart Products
  drawIncartProducts();

  totalPrice(id, 'increase');
};

// Function Decrease Product Quantity
function decreaseProductQty(id) {
  // Get The In Cart Products Data
  let inCartProducts = 
    // If The InCart Data Is Existed
    JSON.parse(localStorage.getItem("InCartProducts")) 
    // Get The Data
    ? JSON.parse(localStorage.getItem("InCartProducts")) 
    // Else Return inCartProductsData
    : inCartProductsData;

  // Select The Target In Product By Id
  let inCartTargetProduct = inCartProducts.find(item => item.id === id);

  // Decrease One From The Target Product Quantity
  inCartTargetProduct.qty -= 1;

  // Let The Product Cost Equal Himself Minus The Product Price Every Time
  inCartTargetProduct.cost = inCartTargetProduct.cost - inCartTargetProduct.price;

  // Update The In Cart Products After The Changes
  localStorage.setItem("InCartProducts", JSON.stringify(inCartProducts));

  // Call Function Draw In Cart Products
  drawIncartProducts();

  totalPrice(id, 'decrease');
};

// Function Total Price Products
function totalPrice(id, operation) {
  // Get The In Cart Products Data
  let inCartProducts = 
  // If The InCart Data Is Existed
  JSON.parse(localStorage.getItem("InCartProducts")) 
  // Get The Data
  ? JSON.parse(localStorage.getItem("InCartProducts")) 
  // Else Return inCartProductsData
  : inCartProductsData;

  // Select The Target In Product By Id
  let targetProduct = inCartProducts.find(item => item.id === id);

  // Get The Total Price From Local Storage
  let totalPriceStorage = localStorage.getItem('totalPrice');

  // Convert The Total Price Storage Dat To Number
  totalPriceStorage = parseInt(totalPriceStorage);

  // Check If He Is Existed In Local Storage
  if(totalPriceStorage){

    // *This Condition For Check For The Operation, Is She , Increase Or Decrease*
    if(operation === 'increase'){ // If He Is Increase
      // Set The Total Price Plus The Target Product Price, Into The LocalStorage (:
      localStorage.setItem('totalPrice', totalPriceStorage + targetProduct.price);

    }else{ // Else [ Decrease ]
      // Set The Total Price Minus The Target Product Price, Into The LocalStorage (:
      localStorage.setItem('totalPrice', totalPriceStorage - targetProduct.price);
    }

    // Call Function Set Total Price
    setTotalPrice();

  }else{
    // Set The Target Product Price, Into The LocalStorage <;
    localStorage.setItem('totalPrice', targetProduct.price);
    // Call Function Set Total Price
    setTotalPrice();
  };
  

};

// Function Delete All Cost Product Target
function deleteCost(cost){
  // Get The Total Price From Local Storage
  let totalPriceStorage = localStorage.getItem('totalPrice');

  // Set The Total Price Minus The Target Product Price, Into The LocalStorage (:
  localStorage.setItem('totalPrice', totalPriceStorage - cost);

  // Call Function Set Total Price
  setTotalPrice();
};

// Function Set The Total Price Into The Totla Price Element Badge
(setTotalPrice = function() {

  // Get The Total Price From Local Storage
  let allTotalPrice = localStorage.getItem('totalPrice') ? localStorage.getItem('totalPrice') : 0;

  // Select The Span From The Inside Total Price Box Dom
  let totalPriceDom = totalPriceBoxDom.querySelector('span');

  // Set The Toal Price Storage Inside The Total Price Dom Span
  totalPriceDom.innerHTML = `Total Price: $${allTotalPrice}`;

})();

// Function Search To Product
function searchToProduct(){
  // Get All The Products Data
  let products = 
  // If The Products Is Existed
  JSON.parse(localStorage.getItem('products')) ? 
  // Get The Data
  JSON.parse(localStorage.getItem('products')) 
  // Else Return The [ productsDB ]
  : productsDB;

  // Loop For All The Product Check If The Product Title Is EquLe The Input Search
  let choseenProduct = products.filter(item => item.title.toLowerCase().indexOf(inputSearchDom.value.toLowerCase()) !== -1);

  // Here Check If The [ choseenProduct ] Is Not Found Anything Or The Product Name Is Not Existed
  if(choseenProduct.length === 0 || choseenProduct.length === undefined){
    // Show The Alarm
    alarmSearch.classList.add('show');
  }else{ // Else
    // Hide The Alarm
    alarmSearch.classList.remove('show');
  }
  // Call Function Draw Products
  drawProducts(choseenProduct);
};

// Function Oepn Primary Colors Area 
function openPrimaryColorsArea(e) {
  // Check If The Target Element Primary Overflow
  if(e.target.className === 'primary-overflow'){
    // Hide The Primary Area
    primaryArea.classList.remove('open');
  }else{ // Esle
    // Check If The Target Element Is The Toggle Button [ To Show The Primary Area Box ]
    if(e.target === showPrimaryBtn){
      // The Primary Area
      primaryArea.classList.toggle('open');
    };
  };
};

// Function Change Primary Color
(function changePrimary() {
  // Loop On All The [ primaryColorsBoxSpans ] The Spans (:
  primaryColorsBoxSpans.forEach(span => {

    // Every Click On Any Span
    span.addEventListener('click', function(event) {

      // Select All Active Spans, And Loop On All The Active Spans
      document.querySelectorAll('.primary-area .active').forEach(activeSpan => {
        // Remove Class Active From All The Spans
        activeSpan.classList.remove('active');
        // Add Class Active On Target Span
        event.target.classList.add('active');
        // Get The Data Set Color
        let eventTargteColor = event.target.dataset.primary;
        // Set The Color Into The LocalStorage
        localStorage.setItem('primaryColor', eventTargteColor);
        // Call Function Set Primary Color
        setPrimaryColor();
      });

    });
  });
})();

// Function Set The Primary Color Storage 
(setPrimaryColor = function(){
  // Gte The Primary Color
  let primaryColorStorage = 
    // If He Is Exist
    localStorage.getItem('primaryColor') ?
    // If He Is Get Him
    localStorage.getItem('primaryColor') :
    // Else Retrun The Default Primary Color 
    'rgb(80, 216, 144)';

  // Loop On All The [ primaryColorsBoxSpans ] The Spans (:
  primaryColorsBoxSpans.forEach(span => {
    // Check If Any Span In The Box Spans Data Set Primary Value Is Equle The primaryColorStorage
    if(span.dataset.primary === primaryColorStorage){
      span.classList.add('active');
    }
  });

  // Change The Primary Color
  document.documentElement.style.setProperty('--primary-c', primaryColorStorage);
})();