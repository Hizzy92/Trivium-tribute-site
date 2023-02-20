<<<<<<< Updated upstream

// if sprawdzający czy zawartość HTML strony już się załadowała 
if(document.readyState== 'loading'){
    document.addEventListener('DOMContentLoaded', ready) // jeśli strona się ładuje wykonaj to
} else {
    ready(); //nasz skrypt poczeka na załadowanie się strony. Dzieki takiemu rozwiązaniu na załadowanie storny 
}

                                //Fukcjonalność usuwania itemów z koszyka 
function ready(){
    let removeCartItemButtons = document.getElementsByClassName('btn-danger')
    //console.log(removeCartItemButtons)
    for (let i=0; i<removeCartItemButtons.length; i++)
    {
        let button = removeCartItemButtons[i];
        //console.log(button);
        button.addEventListener('click', removeCartItem);        
    }

    //nasze inputy ilości zamawianego towaru otrzymują poprawną funkcjonalność 
    let quantityInputs = document.getElementsByClassName('cart-quantity-input') // tablica elem.
    for (let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChaned);
    }

                                //ADD to cart dostaje funkcjonalność
    let addToCartButton = document.getElementsByClassName('shop-item-button') //tab
    for (let i =0; i< addToCartButton.length; i++){
        let button = addToCartButton[i];
        button.addEventListener('click', addToCartClicked)
    }
                                //Purchase dostaje fucnkcjonalnosc
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked);
}

function purchaseClicked(){
    alert('Thank you for your purchase');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal();
}

function removeCartItem(){
    let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
}

function quantityChaned(event){
// funkcja ogarniająca popoprawne działanie inputu    
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0 ){
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClicked(event){
    let button = event.target;
    let shopItem = button.parentElement.parentElement;
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    //console.log(title);
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    //console.log(price, title);
    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    //console.log(imageSrc, title, price);

// poprawną obsługe dodania itemu do koszyka zamkniemy w innej metodzie 
    addItemToCart(title, price, imageSrc);
}

function addItemToCart(title, price, imageSrc){
    let cartRow = document.createElement('div');
    cartRow.classList.add('cart-row')
// sprawdzmy czy itemu niema juz w koszytku     
    let cartItems = document.getElementsByClassName('cart-items')[0]; 
    let cartItemsNames = cartItems.getElementsByClassName('cart-item-title');
    for (let i =0; i<cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert('This item is already added to the cart !')
            return
        }
    }
//stworzymy cart row w koszyku za pomoca istniejacego html       
    let cartRowContents = `  
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100"/>
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" role ="button">REMOVE</button>
        </div>`
        cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
//ponieważ nasz listener dla usuwania obiektów itd jest w funkcji wywoływanej podczas załadowania dokumentu musiby zrobic to jeszcze raz 
    updateCartTotal();
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChaned)
}


function updateCartTotal(){
// najpierw trzeba sprawdzić cene wszystkich elementów w koszyku i policzyć 
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];    // cały koszyk
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');    // lista elementów 
//pętla iterująca po liście obiektów w koszyku która bedzie liczyć 
    let total = 0;
    for (let i=0; i<cartRows.length; i++){
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]; //sprawdzic pozniej
        //console.log(priceElement);
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        console.log(quantityElement);
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        //console.log(price);
        let quantity = quantityElement.value;
        //console.log(price * quantity);
        total = total + (price*quantity);
    }
    total = Math.round(total * 100) / 100  //zaokrąglamy 
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;    
}
=======

// if sprawdzający czy zawartość HTML strony już się załadowała 
if(document.readyState== 'loading'){
    document.addEventListener('DOMContentLoaded', ready) // jeśli strona się ładuje wykonaj to
} else {
    ready(); //nasz skrypt poczeka na załadowanie się strony. Dzieki takiemu rozwiązaniu na załadowanie storny 
}

                                //Fukcjonalność usuwania itemów z koszyka 
function ready(){
    let removeCartItemButtons = document.getElementsByClassName('btn-danger')
    //console.log(removeCartItemButtons)
    for (let i=0; i<removeCartItemButtons.length; i++)
    {
        let button = removeCartItemButtons[i];
        //console.log(button);
        button.addEventListener('click', removeCartItem);        
    }

    //nasze inputy ilości zamawianego towaru otrzymują poprawną funkcjonalność 
    let quantityInputs = document.getElementsByClassName('cart-quantity-input') // tablica elem.
    for (let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChaned);
    }

                                //ADD to cart dostaje funkcjonalność
    let addToCartButton = document.getElementsByClassName('shop-item-button') //tab
    for (let i =0; i< addToCartButton.length; i++){
        let button = addToCartButton[i];
        button.addEventListener('click', addToCartClicked)
    }
                                //Purchase dostaje fucnkcjonalnosc
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked);
}

function purchaseClicked(){
    alert('Thank you for your purchase');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal();
}

function removeCartItem(){
    let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
}

function quantityChaned(event){
// funkcja ogarniająca popoprawne działanie inputu    
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0 ){
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClicked(event){
    let button = event.target;
    let shopItem = button.parentElement.parentElement;
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    //console.log(title);
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    //console.log(price, title);
    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    //console.log(imageSrc, title, price);

// poprawną obsługe dodania itemu do koszyka zamkniemy w innej metodzie 
    addItemToCart(title, price, imageSrc);
}

function addItemToCart(title, price, imageSrc){
    let cartRow = document.createElement('div');
    cartRow.classList.add('cart-row')
// sprawdzmy czy itemu niema juz w koszytku     
    let cartItems = document.getElementsByClassName('cart-items')[0]; 
    let cartItemsNames = cartItems.getElementsByClassName('cart-item-title');
    for (let i =0; i<cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert('This item is already added to the cart !')
            return
        }
    }
//stworzymy cart row w koszyku za pomoca istniejacego html       
    let cartRowContents = `  
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100"/>
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" role ="button">REMOVE</button>
        </div>`
        cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
//ponieważ nasz listener dla usuwania obiektów itd jest w funkcji wywoływanej podczas załadowania dokumentu musiby zrobic to jeszcze raz 
    updateCartTotal();
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChaned)
}


function updateCartTotal(){
// najpierw trzeba sprawdzić cene wszystkich elementów w koszyku i policzyć 
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];    // cały koszyk
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');    // lista elementów 
//pętla iterująca po liście obiektów w koszyku która bedzie liczyć 
    let total = 0;
    for (let i=0; i<cartRows.length; i++){
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]; //sprawdzic pozniej
        //console.log(priceElement);
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        console.log(quantityElement);
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        //console.log(price);
        let quantity = quantityElement.value;
        //console.log(price * quantity);
        total = total + (price*quantity);
    }
    total = Math.round(total * 100) / 100  //zaokrąglamy 
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;    
}
>>>>>>> Stashed changes
