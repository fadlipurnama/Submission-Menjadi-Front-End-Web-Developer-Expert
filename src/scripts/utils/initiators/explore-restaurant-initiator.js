const ExploreRestaurantInitiator = {
  init({ restaurants, listRestaurantContainer }) {
    this._restaurants = restaurants;
    this._listRestaurantContainer = listRestaurantContainer;

    this._showRestaurantList();
  },

  _showRestaurantList() {
    this._listRestaurantContainer.innerHTML = '';
    this._restaurants.filter((restaurant) => restaurant.rating <= 4.5)
      .forEach((restaurant) => {
        const restaurantItemElement = document.createElement('resto-item');
        restaurantItemElement.dataRestaurant = restaurant;
        this._listRestaurantContainer.appendChild(restaurantItemElement);
      });
  },
};

export default ExploreRestaurantInitiator;
