'use strict';

const basketEl = document.querySelector('.basket');
const cartIconWrapEl = document.querySelector('.cartIconWrap');
const featuredItemEls = document.querySelector(".featuredItems");
const basketHeaderEl = document.querySelector(".basketHeader");
const basketTotalValueEl = document.querySelector(".basketTotalValue");
const basketObj = {};

class Product {
    constructor(dataName, dataCount, dataPrice) {
        this.name = dataName;
        this.count = dataCount;
        this.price = + dataPrice;
        this.totalPrice = + dataPrice;
    }
}

function addToCart(dataId, dataName, dataPrice) {
    if (dataId in basketObj) {
        basketObj[dataId].count += 1;
        basketObj[dataId].totalPrice += + dataPrice;
        document.getElementById(`try${dataId}`).remove();
        basketHeaderEl.insertAdjacentHTML('afterend', `
        <div class="basketRow" id=try${dataId}>
            <div>${basketObj[dataId].name}</div>
            <div>${basketObj[dataId].count}</div>
            <div>${basketObj[dataId].price}</div>
            <div>${basketObj[dataId].totalPrice}</div>
        </div>
     `);
    } else {
        basketObj[dataId] = new Product(dataName, 1, dataPrice);
        basketHeaderEl.insertAdjacentHTML('afterend', `
        <div class="basketRow" id=try${dataId}>
            <div>${basketObj[dataId].name}</div>
            <div>${basketObj[dataId].count}</div>
            <div>${basketObj[dataId].price}</div>
            <div>${basketObj[dataId].totalPrice}</div>
        </div>
     `);
    };
    cartIconWrapEl.children[1].textContent = Object.keys(basketObj).length;
}
cartIconWrapEl.children[1].textContent = 0;

cartIconWrapEl.addEventListener(
    'click',
    () => basketEl.classList.toggle('hidden'));

Array.from(featuredItemEls.children).forEach(featuredItemEl => {
    featuredItemEl.addEventListener(
        'click',
        () => addToCart(
            featuredItemEl.dataset["id"],
            featuredItemEl.dataset["name"],
            featuredItemEl.dataset["price"]))
});


// console.log(basketEl);
// console.log(cartIconWrapEl);
// console.log(basketObj.values);
// console.log(featuredItemEls.children);
// console.log(featuredItemEls.children[0].dataset);
// console.log(cartIconWrapEl.children[1].textContent);