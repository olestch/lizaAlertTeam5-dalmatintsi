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

//function FAQ

const btnList = document.querySelectorAll(".faq");

btnList.forEach((item) => {
  const buttonWrap1 = item.querySelector(".faq__button");
  const contentWrap1 = item.querySelector(".faq__content");
  const cardHeaderWrap = item.querySelector(".faq__header");
  cardHeaderWrap.addEventListener("click", function (evt) {
    evt.stopPropagation();

    contentWrap1.classList.toggle("faq__content_open");
    buttonWrap1.classList.toggle("faq__button_active");
  });
});
