const sideBarList = document.querySelectorAll(".lesson-side");

sideBarList.forEach((item) => {
  const buttonWrap = item.querySelector(".lesson-side__header");
  const contentWrap = item.querySelector(".lesson-side__container");
  const lessonSideBtn = item.querySelector(".lesson-side__button");
  buttonWrap.addEventListener("click", function (evt) {
    evt.stopPropagation();

    contentWrap.classList.toggle("lesson-side__container_closed");
    lessonSideBtn.classList.toggle("lesson-side__button_active");
  });
});
