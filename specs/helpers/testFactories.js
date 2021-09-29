/* eslint-disable import/prefer-default-export */
import FavoriteRestaurant from '../../src/scripts/data/favoriteRestaurant';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurant,
    restaurant,
  });
};

export { createLikeButtonPresenterWithResto };
