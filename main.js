const placeOrder = document.querySelector('.text-link-2');
const frameMiddle = document.querySelector('.frame-23');
const checkout = document.querySelector('.checkout');

// placeOrder.addEventListener('click', () => {
//   const image = 'checkout.png';
//   const img = new Image();
//   img.src = image;
//   img.className = 'checkout-img';
//   frameMiddle.innerHTML = '';
//   frameMiddle.append(img);
//   setTimeout(() => {
//     window.location.href = 'cart.html';
//   }, 2000);
// });

placeOrder.addEventListener('click', () => {
  frameMiddle.innerHTML = '';
  checkout.style.display = 'block';
  setTimeout(() => {
    window.location.href = 'cart.html';
  }, 3000);
});
