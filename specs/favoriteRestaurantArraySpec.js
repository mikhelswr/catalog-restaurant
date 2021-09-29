/* eslint-disable no-return-assign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable eqeqeq */

import { itActAsFavoriteRestoModel } from './contract/favoriteRestaurantContract';

/* eslint-disable consistent-return */
let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getRestoran(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((resto) => resto.id == id);
  },

  getAllRestaurants() {
    return favoriteRestaurants;
  },

  putRestaurant(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestoran(resto.id)) {
      return;
    }

    favoriteRestaurants.push(resto);
  },

  deleteRestaurant(id) {
    favoriteRestaurants = favoriteRestaurants.filter((resto) => resto.id != id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurants = []);

  itActAsFavoriteRestoModel(FavoriteRestaurantArray);
});
