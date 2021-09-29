const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#explore__card');
  I.see('Tidak ada restoran yang disukai', '.restaurant__not_found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restoran yang disukai', '.restaurant__not_found');

  I.amOnPage('/');
  I.seeElement('a.card');

  const fisrtRestaurant = locate('a.card').first();
  const nameRestaurant = await I.grabTextFrom(locate('.card .namaResto').first());
  I.click(fisrtRestaurant);

  I.seeElement('button#likeButton');
  I.click('button#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('a.card');
  const likedNameRestaurant = await I.grabTextFrom('.card .namaResto');

  assert.strictEqual(nameRestaurant, likedNameRestaurant);
  // pause();
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.see('Tidak ada restoran yang disukai', '.restaurant__not_found');

  I.amOnPage('/');
  I.seeElement('a.card');

  I.click(locate('a.card').first());

  I.seeElement('button#likeButton');
  I.click('button#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('a.card');
  I.click('a.card');

  I.seeElement('button#likeButton');
  I.click('button#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restoran yang disukai', '.restaurant__not_found');
});
