import CONFIG from '../../globals/config';

const createTemplateRestaurant = (restaurant) => `
    <a  href="${`/#/detail/${restaurant.id}`}" class="card" tabindex="0">
            <span>${restaurant.city}</span>
        <div class="img">
            <img crossorigin="anonymous"
            src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}"
            alt="${restaurant.name}"
            />
        </div>
        <div class="ket">
        <h2 class="namaResto">${restaurant.name}</h2>
        <h3 class="rating">Rating ${restaurant.rating}</h3>
        <div class="ketresto"><p>${restaurant.description}</p></div>
        </div>
    </a>
`;

const createDetailTemplateRestaurant = (restaurant) => {
  const subcategory = restaurant.categories.map((cat) => `<div class="child"><p>${cat.name}</p></div>`).join('');
  const subfood = restaurant.menus.foods.map((food) => `<div class="child"><p>${food.name}</p></div>`).join('');
  const subdrink = restaurant.menus.drinks.map((drink) => `<div class="child"><p>${drink.name}</p></div>`).join('');
  const subreview = restaurant.customerReviews.map((review) => `
  <div class="child">
    <div class="reviewer">
      <h3>${review.name}</h3>
      <p>${review.date}</p>
    </div>
    <div class="review">
      <p>${review.review}</p>
    </div>
  </div>
  `).join('');

  return `
  <div class="image_detail">
  <img src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" alt="Gambar restoran ${restaurant.name}">
  <div class="sub_image">
    <h4 class="title_detail">${restaurant.name}</h4>
    <p class="rating_detail">Rate ${restaurant.rating} / 5</p>
  </div>
</div>
<div class="alamat_detail">
  <h3>Alamat</h3><hr>
  <p>${restaurant.address}</p>
</div>
<div class="category_detail">
  <h3>Category</h3><hr>
  <div class="sub_category">
    ${subcategory}
  </div>
</div>
<div class="foods_detail">
  <h3>Menu Makanan</h3><hr>
  <div class="sub_foods">
  ${subfood}
  </div>
</div>
<div class="drinks_detail">
  <h3>Menu Minuman</h3><hr>
  <div class="sub_drinks">
  ${subdrink}
  </div>
</div>
<div class="reviews_detail">
<h4>Review Customer</h4><hr>
<div class="listReview">
  ${subreview}
</div>
<hr class="line">
  <div class="fieldReview">
    <input id="inputName" type="text" placeholder="Siapa nama mu?">
    <input id="inputReview" type="text" placeholder="Gimana menurut mu">
    <button id="buttonReview">Kirim</button>
  </div>
</div>
`;
};

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-star-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-star" aria-hidden="true"></i>
  </button>
`;

export {
  createDetailTemplateRestaurant,
  createTemplateRestaurant,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
