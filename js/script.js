// Smooth scrolling for anchor links

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});

alert('HELLO')
const scrollSections = document.querySelectorAll(".scroll-section")

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  scrollSections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight
    if(
      scrollPosition >= sectionTop - 600 && 
      scrollPosition < sectionTop + sectionHeight
    ){
      section.classList.add("visible")
    } else{
      section.classList.remove("visible")
    }
  })

})




       
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile carousel functionality
            const track = document.querySelector('.carousel-track');
            const cards = document.querySelectorAll('.carousel-card');
            const dots = document.querySelectorAll('.carousel-dot');
            let currentIndex = 0;
            let autoSlideInterval;
            
            // Function to update carousel position
            function updateCarousel() {
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Update dots
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
                
                // Reset auto-slide timer
                clearInterval(autoSlideInterval);
                autoSlideInterval = setInterval(nextSlide, 4000);
            }
            
            // Next slide function
            function nextSlide() {
                currentIndex = (currentIndex + 1) % cards.length;
                updateCarousel();
            }
            
            // Click event for dots
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    currentIndex = parseInt(this.getAttribute('data-index'));
                    updateCarousel();
                });
            });
            
            // Initialize carousel if on mobile
            if (window.innerWidth <= 768) {
                updateCarousel();
                autoSlideInterval = setInterval(nextSlide, 4000);
            }
            
            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth <= 768) {
                    updateCarousel();
                    clearInterval(autoSlideInterval);
                    autoSlideInterval = setInterval(nextSlide, 4000);
                } else {
                    clearInterval(autoSlideInterval);
                }
            });
        });
 

 


