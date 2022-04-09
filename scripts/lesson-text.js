const goToCourseButton = document.querySelector("#goToCourse");
const goToWebinarButton = document.querySelector("#goToWebinar");

function goToCourseButtonHandler() {
  document.location.href = "./course.html";
}
function goToWebinarButtonHandler() {
  document.location.href = "./lesson-webinar.html";
}
goToCourseButton.addEventListener("click", goToCourseButtonHandler);

goToWebinarButton.addEventListener("click", goToWebinarButtonHandler);
