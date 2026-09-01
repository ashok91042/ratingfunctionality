const stars = document.querySelectorAll('.star');
const result = document.getElementById('result');

stars.forEach(function(star) {
  star.addEventListener('click', function() {
    const value = this.getAttribute('data-value');

    stars.forEach(function(item) {
      item.classList.remove('active');
    });

    for (let i = 0; i < value; i++) {
      stars[i].classList.add('active');
    }

    result.textContent = value;
  });
});
