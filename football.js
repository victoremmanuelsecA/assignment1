document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel for players and home pages
    const prevButtons = document.querySelectorAll('.carousel-control-prev');
    const nextButtons = document.querySelectorAll('.carousel-control-next');
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach((carousel, index) => {
        const carouselItems = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function showItem(index) {
            carouselItems.forEach((item, i) => {
                item.style.transform = `translateX(-${index * 100}%)`;
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            showItem(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            showItem(currentIndex);
        }

        if (prevButtons[index] && nextButtons[index]) {
            nextButtons[index].addEventListener('click', nextSlide);
            prevButtons[index].addEventListener('click', prevSlide);
        }

        showItem(currentIndex);
    });
});
