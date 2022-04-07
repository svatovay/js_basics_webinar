'use strict';

const basketEl = document.querySelector('.basket');
const cartIconWrapEl = document.querySelector('.cartIconWrap');
const basketObj = {};
// console.log(basketEl);
// console.log(cartIconWrapEl);

cartIconWrapEl.addEventListener(
    'click',
    () => basketEl.classList.toggle('hidden'));