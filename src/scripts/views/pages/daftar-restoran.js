import RestaurantSource from '../../data/restaurant-source';
import { createTemplateRestaurant } from '../templates/template-creator';

const DaftarRestoran = {
  async render() {
    return `
    <!-- HERO -->
    <div class="hero">
      <h1>
        Yuk Kenyangin Perut<br />
        Di Resto Pilihan
      </h1>
      <div class="overlay"></div>
    </div>
    
  <div class="title">
    <h2>Explore Restaurant</h2>
    <hr />
  </div>
  <div class="content" id="explore__card"></div>
  `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.exploreRestaurants();
    const restaurantsContainer = document.querySelector('#explore__card');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createTemplateRestaurant(restaurant);
    });
  },
};

export default DaftarRestoran;
