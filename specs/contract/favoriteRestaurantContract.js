/* eslint-disable import/prefer-default-export */
const itActAsFavoriteRestoModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getRestoran(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getRestoran(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getRestoran(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('can return all of the restaurant that have been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual(
      [
        { id: 1 }, { id: 2 },
      ],
    );
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    favoriteRestaurant.deleteRestaurant(1);

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual(
      [
        { id: 2 }, { id: 3 },
      ],
    );
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual(
      [
        { id: 1 }, { id: 2 }, { id: 3 },
      ],
    );
  });
};

export { itActAsFavoriteRestoModel };
