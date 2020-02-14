const container = document.querySelector('.container');
const coffees = [
  { name: 'Perspiciatis', image: 'images/coffee1.jpg' },
  { name: 'Voluptatem', image: 'images/coffee2.jpg' },
  { name: 'Explicabo', image: 'images/coffee3.jpg' },
  { name: 'Rchitecto', image: 'images/coffee4.jpg' },
  { name: ' Beatae', image: 'images/coffee5.jpg' },
  { name: ' Vitae', image: 'images/coffee6.jpg' },
  { name: 'Inventore', image: 'images/coffee7.jpg' },
  { name: 'Veritatis', image: 'images/coffee8.jpg' },
  { name: 'Accusantium', image: 'images/coffee9.jpg' }
];

const showCoffees = () => {
  let output = '';
  coffees.forEach(coffee => {
    output += `
        <div class="card">
                <img class="card--avatar" src=${coffee.image} />
                <h1 class="card--title">${coffee.name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
        `;
  });
  container.innerHTML = output;
};

document.addEventListener('DOMContentLoaded', showCoffees);

if ('serviceWorker' in navigator) {
  console.log(navigator);
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(res => console.log(`Service worker registered successfully!!`))
      .catch(err =>
        console.log(`Error: Service worker was not registered`, err)
      );
  });
}
