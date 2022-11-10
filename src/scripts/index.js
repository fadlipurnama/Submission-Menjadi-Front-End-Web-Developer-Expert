import 'regenerator-runtime';

/* components */
import './components/navbar';
import './components/hero';
import './components/footer';

/* Style */
import '../styles/index.css';

/* data */
import restaurants from '../scripts/data/DATA.json';
import exploration_restaurants from '../scripts/data/EXPLORATION.json'

const showItemResto = (resto) =>{
  return (`
    <article class="resto-item">
      <img class="resto-item__thumbnail"
        src="${resto.pictureId}"
        alt="${resto.name}">
      <div class="resto-item__content">
        <h3 class="resto-item__title">${resto.name}</h3>
        <p class="resto-item__city"><span class="material-icons" aria-hidden="true">location_on</span>${resto.city}</p>
        <p class="resto-item__rating"><span class="fa fa-star checked"></span> ${resto.rating}</p>
        <div>
          <p class="resto-item__description-title">Deskripsi</p>
          <p class="resto-item__description-content">${resto.description}</p>
        </div>
        <button class="btn-detail" id="btnDetail" aria-label="Lihat Detail${resto.name}">
          Lihat Detail
        </button>
      </div>
    </article>
  `);
}

document.addEventListener('DOMContentLoaded', () => {
  const recom_container = document.querySelector('.recommendation-container');
  const explor_container= document.querySelector('.exploration-container')

  const menu = document.getElementById('menu-btn');
  const main = document.querySelector('main');
  const drawer = document.querySelector('.navbar');

  restaurants.restaurants.forEach((resto) => {
    recom_container.innerHTML += showItemResto(resto);
  })

  exploration_restaurants.exploration_restaurants.forEach((resto) =>{
    explor_container.innerHTML += showItemResto(resto)
  })

  menu.addEventListener('click', (event) => {
    menu.classList.toggle('fa-times');
    drawer.classList.toggle('active');
    event.stopPropagation();
  });

  main.addEventListener('click', () => {
    drawer.classList.remove('active');
    menu.classList.remove('fa-times');
  });

  
});
