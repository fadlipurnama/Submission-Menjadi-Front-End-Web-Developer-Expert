const DetailRestaurantInfoInitiator = {
  init({ dataRestaurant, infoRestoElement }) {
    this._dataRestaurant = dataRestaurant;
    this._dataCategoriesResto = dataRestaurant.categories;
    this._infoRestoElement = infoRestoElement;

    this._infoRestoElement.dataRestaurant = this._dataRestaurant;
    this._infoRestoElement.categoriesRestaurant = this._getCategories(this._dataCategoriesResto);
  },

  _getCategories(categoriesRestaurant) {
    let categories = '';
    categoriesRestaurant.forEach((category, key, array) => {
      if (Object.is(array.length - 1, key)) {
        categories += `${category.name}`;
      } else {
        categories += `${category.name}, `;
      }
    });
    return categories;
  },
};

const DetailRestaurantReviewInitiator = {
  init({ dataRestaurant, reviewListElement }) {
    this._dataReviews = dataRestaurant.customerReviews;
    this._reviewListElement = reviewListElement;
    this._showReviews();
  },

  _showReviews() {
    this._reviewListElement.innerHTML = '';
    this._dataReviews.forEach((review) => {
      const itemReview = document.createElement('item-review-resto');
      itemReview.dataReview = review;
      this._reviewListElement.appendChild(itemReview);
    });
  },
};

const DetailRestaurantMenuInitiator = {
  init({ dataRestaurant, foodListElement, drinkListElement }) {
    this._menuFoods = dataRestaurant.menus.foods;
    this._menuDrinks = dataRestaurant.menus.drinks;
    this._foodListElement = foodListElement;
    this._drinkListElement = drinkListElement;

    this._showMenuFoods();
    this._showMenuDrinks();
  },

  _showMenuFoods() {
    this._foodListElement.innerHTML = '';
    this._menuFoods.forEach((food) => {
      const ItemMenuFood = document.createElement('item-menu-food');
      ItemMenuFood.menuFoods = food;
      this._foodListElement.appendChild(ItemMenuFood);
    });
  },

  _showMenuDrinks() {
    this._drinkListElement.innerHTML = '';
    this._menuDrinks.forEach((drink) => {
      const ItemMenuDrink = document.createElement('item-menu-drink');
      ItemMenuDrink.menuDrinks = drink;
      this._drinkListElement.appendChild(ItemMenuDrink);
    });
  },
};

export {
  DetailRestaurantInfoInitiator,
  DetailRestaurantReviewInitiator,
  DetailRestaurantMenuInitiator,
};
