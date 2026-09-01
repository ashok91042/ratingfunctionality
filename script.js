const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
let currentRating = 0;

function updateStars(activeValue) {
  stars.forEach((star) => {
    const starValue = Number(star.dataset.value);
    const isActive = starValue <= activeValue;
    star.classList.toggle('active', isActive);
    star.setAttribute('aria-pressed', String(isActive));
  });
}

stars.forEach((star) => {
  star.addEventListener('click', () => {
    currentRating = Number(star.dataset.value);
    updateStars(currentRating);
    ratingValue.textContent = currentRating;
  });

  star.addEventListener('mouseover', () => {
    updateStars(Number(star.dataset.value));
  });

  star.addEventListener('mouseleave', () => {
    updateStars(currentRating);
  });
});
