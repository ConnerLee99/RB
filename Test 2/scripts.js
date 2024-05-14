function setupSlideshow(type) {
    let slides = document.querySelectorAll(`#${type} .mySlides`);
    let dotsContainer = document.querySelector(`#${type} .dot-container`);
    let slideIndex = 1;

    // Clear existing dots if any (useful if dynamically adding slides/dots)
    dotsContainer.innerHTML = '';

    // Create a dot for each slide
    slides.forEach((_, idx) => {
        let dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = () => showSlides(type, idx + 1);
        dotsContainer.appendChild(dot);
    });

    function showSlides(type, n) {
        let slides = document.querySelectorAll(`#${type} .mySlides`);
        let dots = document.querySelectorAll(`#${type} .dot`);
        
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        slides.forEach(slide => slide.style.display = 'none');
        dots.forEach(dot => dot.className = dot.className.replace(' active', ''));
        
        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].className += ' active';
    }

    function nextSlide() {
        showSlides(type, slideIndex += 1);
    }

    showSlides(type, slideIndex);
    setInterval(() => nextSlide(), 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    setupSlideshow('outdoor');
    setupSlideshow('indoor');
});
