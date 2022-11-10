import CONFIG from '../../globals/config';

class createMenuDrinkTemplate extends HTMLElement {
  set menuDrinks(drink) {
    this._drink = drink;
    this._render();
  }

  _render() {
    const drink = this._drink;
    this.innerHTML = `<div class="item__menu_restaurant">
        <img class="picture__item" src="${CONFIG.ICON_DRINK_URL}" alt="Minuman ${drink.name}">
        <div class="name__item">
          <h3>${drink.name}</h3>
        </div>
      </div>
    `;
  }
}

customElements.define('item-menu-drink', createMenuDrinkTemplate);
