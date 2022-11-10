import RestaurantAPIDicoding from '../../data/restaurant-api-source';
import RecommendedRestaurantInitiator from '../../utils/initiators/recommended-restaurant-initiator';
import ExploreRestaurantInitiator from '../../utils/initiators/explore-restaurant-initiator';

const Home = {
  async render() {
    return `
        <hero-content class="hero__text"></hero-content>
        
        <section class="recommendation">
          <h1 class="label_section">Daftar Restauran yang Direkomendasikan</h1>
          <div class="recommendation-container"></div>
        </section>
        
        <section class="explore">
          <h2 class="label_section">Daftar Restauran Lainnya</h2>
          <div class="exploration-container"></div>
        </section>
      `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantAPIDicoding.getListRestaurant();
      this._initContentHomePage(restaurants);
    } catch (error) {
      console.log(error);
    }
  },
  _initContentHomePage(restaurants) {
    RecommendedRestaurantInitiator.init({
      restaurantsRecommended: restaurants,
      listRecommendedContainer: document.querySelector('.recommendation-container'),
    });
    ExploreRestaurantInitiator.init({
      restaurants,
      listRestaurantContainer: document.querySelector('.exploration-container'),
    });
  },
};

export default Home;
