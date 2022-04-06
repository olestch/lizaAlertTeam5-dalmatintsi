const cardList = document.querySelectorAll(".card");

cardList.forEach((item) => {
  item.addEventListener("click", function (evt) {
    evt.stopPropagation();
    item.classList.toggle("card__content_open");
  });
});
