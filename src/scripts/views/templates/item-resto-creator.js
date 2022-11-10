import CONFIG from '../../globals/config';

class createRestoItemTemplate extends HTMLElement {
  set dataRestaurant(restaurant) {
    this._dataRestaurant = restaurant;
    this._render();
  }

  _render() {
    const dataRestaurant = this._dataRestaurant;
    this.innerHTML = `
    <article class="resto-item">
      <img class="resto-item__thumbnail"
        src="${CONFIG.BASE_IMAGE_URL}${dataRestaurant.pictureId}"
        alt="${dataRestaurant.name}">
      <div class="resto-item__content">
        <h3 class="resto-item__title">${dataRestaurant.name}</h3>
        <p class="resto-item__city"><span class="material-icons" aria-hidden="true">location_on</span>${dataRestaurant.city}</p>
        <p class="resto-item__rating"><span class="fa fa-star checked"></span> ${dataRestaurant.rating}</p>
        <button class="btn-detail" id="btnDetail" type="button" onClick="window.location.href='/#/detail/${dataRestaurant.id}';">
          Lihat Detail
        </button>
      </div>
    </article>
  `;
  }
}

customElements.define('resto-item', createRestoItemTemplate);
