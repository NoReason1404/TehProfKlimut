const proxyUrl = 'https://api.allorigins.win/raw?url=';
const catalog = document.getElementById('catalog');
const apiKey = '862a3f9b04228e8c'; // Замените на ваш собственный ключ доступа

fetch(`${proxyUrl}https://erc.hiconix.ru/api/erc.products.getList?api_key=${apiKey}`, {
  method: 'GET',
})
.then(response => response.json())
.then(data => {
  const content = data.contents;
  const jsonData = JSON.parse(content);
  jsonData.items.forEach(item => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <h2>${item.name}</h2>
      <img src="${item.image}" alt="${item.name}">
      <ul>
        ${item.properties.map(property => `<li>${property.name}: ${property.value}</li>`).join('')}
      </ul>
    `;
    catalog.appendChild(productElement);
  });
})
.catch((error) => {
  console.error('Error:', error);
});
