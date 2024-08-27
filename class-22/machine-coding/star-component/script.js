const container = document.querySelector(".star-container");
const stars = document.querySelectorAll(".star");
const ratingCount = document.querySelector("#count");

container.addEventListener("click", function (event) {
  const rating = Number(event.target.dataset.shashwat);

  if (rating) {
    for (let i = 0; i <= stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add("active");
      } else {
        stars[i].classList.remove("active");
      }
    }

    ratingCount.textContent = rating;
  }
});
