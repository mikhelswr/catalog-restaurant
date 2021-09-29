import FavoriteRestaurant from '../src/scripts/data/favoriteRestaurant';
import { itActAsFavoriteRestoModel } from './contract/favoriteRestaurantContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurant.getAllRestaurants()).forEach(async (resto) => {
      await FavoriteRestaurant.deleteRestaurant(resto.id);
    });
  });

  itActAsFavoriteRestoModel(FavoriteRestaurant);
});
