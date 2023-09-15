const images = document.querySelectorAll('.slider__slide');
const btn_next = document.querySelector(".slider__btn_next");
const btn_prev = document.querySelector(".slider__btn_prev");
let currentIndex = 0;

function showImage(index) {
  images[currentIndex].classList.remove('active');
  images[index].classList.add('active');
  currentIndex = index;
}

btn_next.addEventListener("click", () => {
    let index = currentIndex + 1;
    if(index >= 4) {index = images.length - 4}
    showImage(index);
})

btn_prev.addEventListener("click", () => {
    let index = currentIndex - 1;
    if(index < 0) {index = images.length - 1}
    showImage(index);
})
showImage(currentIndex);
