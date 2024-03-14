const serviceList = document.querySelectorAll('.service-category li');
const totalPrice = document.querySelector('#totalPrice');
const totalCount = document.querySelector('#totalCount');

let total = 0;
let count = 0;

serviceList.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('selected');

    const price = parseFloat(item.dataset.price);

    if (item.classList.contains('selected')) {
      total += price;
      count++;
    } else {
      total -= price;
      count--;
    }

    totalPrice.textContent = total.toFixed(0);
    totalCount.textContent = count;
  });
});
