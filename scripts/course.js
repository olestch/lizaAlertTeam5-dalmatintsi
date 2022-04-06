const cardList = document.querySelectorAll(".card");

cardList.forEach((item) => {
  const buttonWrap = item.querySelector(".card__button");
  const contentWrap = item.querySelector(".card__content");
  buttonWrap.addEventListener("click", function (evt) {
    evt.stopPropagation();
    if (buttonWrap.innerHTML == "Свернуть") {
      buttonWrap.innerHTML = "Развернуть";
    } else {
      buttonWrap.innerHTML = "Свернуть";
    }
    contentWrap.classList.toggle("card__content_open");
  });
});
