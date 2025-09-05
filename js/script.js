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

const scrollSections = document.querySelectorAll(".scroll-section");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  scrollSections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (
      scrollPosition >= sectionTop - 600 &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // FAQ data
  const faqData = [
    {
      question: "What types of services does Tony Haan Dienstleistungen offer?",
      answer:
        "Tony Haan entrumpelung Sgtass und Gebaudereinigung specializes in a wide range of services, including property maintenance, cleaning, landscaping, and minor repairs. Whether you're looking for regular upkeep or a one-time service, they cater to both residential and commercial clients.",
    },
    {
      question: "How quickly can you respond to service requests?",
      answer:
        "We prioritize all service requests and typically respond within 24 hours. For emergency situations, we offer same-day service to address urgent maintenance and cleaning needs for our valued clients.",
    },
    {
      question: "Do you provide eco-friendly cleaning options?",
      answer:
        "Yes, we are committed to environmental sustainability. We offer eco-friendly cleaning products and methods that are safe for your family, pets, and the environment while still delivering exceptional cleaning results.",
    },
    {
      question: "Are your staff members trained and insured?",
      answer:
        "Absolutely. All our team members undergo thorough background checks, comprehensive training, and are fully insured. We ensure professionalism, expertise, and reliability in every service we provide.",
    },
  ];

  const faqCard = document.querySelector(".faq-card");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const indicators = document.querySelectorAll(".indicator");

  let currentIndex = 0;

  // Update FAQ card content with animation
  function updateFAQCard(index) {
    // Add fade-out animation
    faqCard.classList.add("fade-out");

    // Wait for animation to complete before updating content
    setTimeout(() => {
      faqCard.querySelector(".faq-question").textContent =
        faqData[index].question;
      faqCard.querySelector(".faq-answer").textContent = faqData[index].answer;

      // Remove fade-out and add fade-in for smooth transition
      faqCard.classList.remove("fade-out");
      faqCard.classList.add("fade-in");

      // Update indicators
      indicators.forEach((indicator, i) => {
        if (i === index) {
          indicator.classList.add("active");
        } else {
          indicator.classList.remove("active");
        }
      });

      // Remove fade-in class after animation completes
      setTimeout(() => {
        faqCard.classList.remove("fade-in");
      }, 300);
    }, 300);
  }

  // Next FAQ
  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % faqData.length;
    updateFAQCard(currentIndex);
  });

  // Previous FAQ
  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + faqData.length) % faqData.length;
    updateFAQCard(currentIndex);
  });

  // Indicator click
  indicators.forEach((indicator) => {
    indicator.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      currentIndex = index;
      updateFAQCard(currentIndex);
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + faqData.length) % faqData.length;
      updateFAQCard(currentIndex);
    } else if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % faqData.length;
      updateFAQCard(currentIndex);
    }
  });

  // Initialize with first FAQ
  updateFAQCard(0);
});
