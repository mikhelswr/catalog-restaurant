import FavoriteRestaurant from '../../data/favoriteRestaurant';
import { createTemplateRestaurant } from '../templates/template-creator';

const RestoranFavorit = {
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
      <h2>Favourite Restaurant</h2>
      <hr />
    </div>
    <div class="content" id="explore__card"></div>
  `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#explore__card');

    let html;

    if (restaurants.length === 0) {
      html = `
        <div class="restaurant__not_found">Tidak ada restoran yang disukai</div>
      `;
    } else {
      html = '';
      restaurants.forEach((resto) => {
        html += createTemplateRestaurant(resto);
      });
    }

    restaurantsContainer.innerHTML = html;
  },
};

export default RestoranFavorit;
