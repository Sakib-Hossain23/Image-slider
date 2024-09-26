let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    autoSlideBtn = document.querySelector("#auto-slide-btn"),
    current = 0,
    autoSlideInterval,
    isAutoSliding = false;

// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

// Initial slide
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}

// Show previous
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
    stopAutoSlide();  // Stop auto-sliding when manually clicked
});

// Right arrow click
arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
    stopAutoSlide();  // Stop auto-sliding when manually clicked
});

// Auto-slide function
function autoSlide() {
    autoSlideInterval = setInterval(() => {
        if (current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();
    }, 3000); // Change slide every 3 seconds
}

// Start/Stop auto-slide
autoSlideBtn.addEventListener("click", function () {
    if (isAutoSliding) {
        stopAutoSlide();
        this.textContent = "Start Auto Slide";
    } else {
        autoSlide();
        this.textContent = "Stop Auto Slide";
    }
    isAutoSliding = !isAutoSliding;
});

// Stop auto-slide
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
    isAutoSliding = false;
    autoSlideBtn.textContent = "Start Auto Slide";
}

startSlide();

