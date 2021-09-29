import CONFIG from '../globals/config';

const SendReview = {
  init({
    inputName, inputReview, buttonReview, id, container,
  }) {
    buttonReview.addEventListener('click', async (event) => {
      const review = {
        id,
        name: inputName.value,
        review: inputReview.value,
      };
      await this._fetchPost(review, container);
    });
  },

  _fetchPost(data, containerReview) {
    fetch(`${CONFIG.BASE_URL}review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((result) => {
        containerReview.innerHTML = '';
        containerReview.innerHTML += result.customerReviews.map((review) => `
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
      })
      .catch((error) => {
        console.log(error);
      });

    inputName.value = '';
    inputReview.value = '';
  },
};

export default SendReview;
