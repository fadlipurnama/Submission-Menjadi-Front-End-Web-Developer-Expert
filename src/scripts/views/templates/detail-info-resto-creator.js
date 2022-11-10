import CONFIG from '../../globals/config';

class createDetailRestoInfoTemplate extends HTMLElement {
  set dataRestaurant(data) {
    this._dataRestaurant = data;
  }

  set categoriesRestaurant(categories) {
    this._categoriesRestaurant = categories;
    this._render();
  }

  _render() {
    const dataRestaurant = this._dataRestaurant;
    const categoriesRestaurant = this._categoriesRestaurant;
    this.innerHTML = `
        <section class="restaurant__detail">
            <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}${dataRestaurant.pictureId}" alt="Restoran ${dataRestaurant.name}">
            <div class="restaurant__info">
            <h2 class="restaurant__title">${dataRestaurant.name}</h2>
            <p>${categoriesRestaurant}</p>
            <p class="resto-item__rating"><span class="fa fa-star checked"></span>  ${dataRestaurant.rating}</p>
            <p class="resto-item__city"><span class="material-icons" aria-hidden="true">location_on</span> ${dataRestaurant.address}, ${dataRestaurant.city}</p>
            <div class="restaurant__description">
                <h3>Deskripsi</h3>
                <p class="restaurant__description-content">${dataRestaurant.description}</p>
            </div>
            </div>
        </section>
      `;
  }
}

customElements.define('detail-restaurant-info', createDetailRestoInfoTemplate);
