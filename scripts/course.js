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
const btnList = document.querySelectorAll(".card__faq-container");


btnList.forEach((item) => {
  const buttonWrap1 = item.querySelector(".card__button");
  const contentWrap = item.querySelector(".card__content");
  const cardHeaderWrap = item.querySelector(".card__header_type_faq")
  cardHeaderWrap.addEventListener("click", function (evt) {
    evt.stopPropagation();
 
    contentWrap.classList.toggle("card__content_open");
    buttonWrap1.classList.toggle("card__button_up");
  });
});

