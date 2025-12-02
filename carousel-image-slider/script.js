// Get Element HTML

const carouselSlide = document.querySelector('.carousel-slide') // Container for all image
const carouselImages = document.querySelectorAll('.carousel-slide img') // All image
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const indicator = document.querySelectorAll('.indicator')

let currentIndex = 0 // State current index
const totalImages = carouselImages.length // Total number of images

let autoSlideInterval; // Variable for auto slide interval

function updateCarousel() {
    carouselSlide.style.transform = `translateX(${-currentIndex * 100}%)`

    // Update indicator
    indicator.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex)
    })
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages
    updateCarousel()
    resetAutoSlide()
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages
    updateCarousel()
    resetAutoSlide()
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval)
    autoSlideInterval = setInterval(nextSlide, 3000)
}

// Event Listener
nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)

autoSlideInterval = setInterval(nextSlide, 3000)

indicator.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index
        updateCarousel()
        resetAutoSlide()
    })
})