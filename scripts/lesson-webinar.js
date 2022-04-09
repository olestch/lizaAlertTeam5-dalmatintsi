const goToNextLessonButton = document.querySelector("#goToLessonText");
const goToVideoButton = document.querySelector("#goToVideo");
const goToZoomButton = document.querySelector("#goToZoom");

function goToNextLessonButtonHandler() {
  document.location.href = "./lesson-text.html";
}

function goToVideoButtonHandler() {
  document.location.href =
    "https://mikhailmudrov.github.io/lizaAlertTeamWork/video.html";
}

function goToZoomButtonHandler() {
  document.location.href = "https://yandex.zoom.us/j/95016158702";
}

goToNextLessonButton.addEventListener("click", goToNextLessonButtonHandler);
goToVideoButton.addEventListener("click", goToVideoButtonHandler);
goToZoomButton.addEventListener("click", goToZoomButtonHandler);

const sideBarList = document.querySelectorAll(".lesson-side");

sideBarList.forEach((item) => {
  const buttonWrap = item.querySelector(".lesson-side__header");
  const contentWrap = item.querySelector(".lesson-side__container");
  buttonWrap.addEventListener("click", function (evt) {
    evt.stopPropagation();

    contentWrap.classList.toggle("lesson-side__container_closed");
  });
});
