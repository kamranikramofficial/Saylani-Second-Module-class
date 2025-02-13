const slider = document.querySelector(".slider")
const leftArrow = document.querySelector("#left")
const rightArrow = document.querySelector("#right")
const slides = document.querySelectorAll(".slide")

let currentIndex = 0

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`
}

function goToPrevious() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length
  updateSlider()
}

function goToNext() {
  currentIndex = (currentIndex + 1) % slides.length
  updateSlider()
}

leftArrow.addEventListener("click", goToPrevious)
rightArrow.addEventListener("click", goToNext)

