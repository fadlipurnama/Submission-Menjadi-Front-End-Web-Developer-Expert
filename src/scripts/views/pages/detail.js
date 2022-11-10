import UrlParser from '../../routes/url-parser';
import RestaurantAPIDicoding from '../../data/restaurant-api-source';
import { DetailRestaurantInfoInitiator, DetailRestaurantReviewInitiator, DetailRestaurantMenuInitiator } from '../../utils/initiators/detail-restaurant-initiator';
import FavoriteButtonInitiator from '../../utils/initiators/favorite-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="detail-restaurant">
        <detail-restaurant-info></detail-restaurant-info>

        <section class="menu-restaurant">
          <div class="food-container">
            <h1 class="label-section-detail-resto">Daftar Makanan</h2>
            <div class="menu-food-list"></div>
          </div>
          <div class="drink-container">
            <h2 class="label-section-detail-resto">Daftar Minuman</h2>
            <div class="menu-drink-list"></div>
          </div>
        </section>

        <section class="review-restaurant">
          <div class="review-container">
            <h3 class="label-section-detail-resto">Ulasan Pengunjung</h2>
            <div class="review-list"></div>
          </div>
        </section>
      </div>
    <favorite-button></favorite-button>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantAPIDicoding.getDetailRestaurant(url.id);

      this._initialDetailPage(restaurant);
    } catch (error) {
      console.log(error);
    }
  },

  _initialDetailPage(restaurant) {
    DetailRestaurantInfoInitiator.init({
      dataRestaurant: restaurant,
      infoRestoElement: document.querySelector('detail-restaurant-info'),
    });
    DetailRestaurantMenuInitiator.init({
      dataRestaurant: restaurant,
      foodListElement: document.querySelector('.menu-food-list'),
      drinkListElement: document.querySelector('.menu-drink-list'),
    });
    DetailRestaurantReviewInitiator.init({
      dataRestaurant: restaurant,
      reviewListElement: document.querySelector('.review-list'),
    });
    FavoriteButtonInitiator.init({
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
