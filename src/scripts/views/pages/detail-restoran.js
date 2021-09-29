import FavoriteRestaurant from '../../data/favoriteRestaurant';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import SendReview from '../../utils/send-review';
import { createDetailTemplateRestaurant } from '../templates/template-creator';

const DetailRestoran = {
  async render() {
    return `
    <div class="container_detail"></div>
    <div id="likeButtonContainer"></div>
  `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('.container_detail');
    restoContainer.innerHTML = createDetailTemplateRestaurant(restaurant.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurant,
      restaurant: {
        id: restaurant.restaurant.id,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        name: restaurant.restaurant.name,
        rating: restaurant.restaurant.rating,
        description: restaurant.restaurant.description,
      },
    });

    SendReview.init({
      inputName: document.querySelector('#inputName'),
      inputReview: document.querySelector('#inputReview'),
      buttonReview: document.querySelector('#buttonReview'),
      container: document.querySelector('.listReview'),
      id: url.id,
    });
  },
};

export default DetailRestoran;
