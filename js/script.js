var slideIndex = 0;
var images = ["bmw100", "bmw101", "bmw102", "bmw103", "bmw104", "bmw105", "bmw106"];

var slideShowX = document.getElementById("slideShowX");
console.log(slideShowX);

function checkSlideIndex() {
    if (slideIndex >= images.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = images.length - 1;
    }
}

function changeBackgroundImage() {
    var currentImageX = "url('assets/" + images[slideIndex] + ".jpg')";
    slideShowX.style.backgroundImage = currentImageX;
}

function nextSlide() {
    slideIndex++;
    checkSlideIndex();
    changeBackgroundImage();
    clearInterval(autoSlideShow);
}

function prevSlide() {
    slideIndex--;
    checkSlideIndex();
    changeBackgroundImage();
    clearInterval(autoSlideShow);
}

function autoMotion() {
    slideIndex++;
    checkSlideIndex();
    changeBackgroundImage();
}

var autoSlideShow = setInterval(autoMotion, 2500); // Change image every 2 seconds

