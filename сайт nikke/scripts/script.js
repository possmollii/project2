function openModal() {
    let modal = document.getElementById('myModal');

    modal.style.display = 'block';
}

function closeModal() {
    let modal = document.getElementById('myModal');

    modal.style.display = 'none';
}

const addToCartBtns = document.querySelectorAll('.add-to-cart');
const cartCount=document.querySelector('.cart-count');
let count = 0;

addToCartBtns.forEach((btn) => {
    btn.addEventListener('click',() => {
        count++;
    cartCount.innerText = count;
});
});