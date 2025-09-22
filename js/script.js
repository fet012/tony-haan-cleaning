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
        question: "Welche Arten von Dienstleistungen bietet Tony Haan Dienstleistungen an?",
        answer:
            "Tony Haan Entrümpelung & Gebäudereinigung ist spezialisiert auf ein breites Spektrum von Dienstleistungen, einschließlich Immobilienwartung, Reinigung, Landschaftsgestaltung und kleineren Reparaturen. Egal, ob Sie regelmäßige Instandhaltung oder eine einmalige Dienstleistung suchen, wir bedienen sowohl private als auch gewerbliche Kunden.",
    },
    {
        question: "Wie schnell können Sie auf Serviceanfragen reagieren?",
        answer:
            "Wir priorisieren alle Serviceanfragen und reagieren in der Regel innerhalb von 24 Stunden. Für Notfallsituationen bieten wir einen Same-Day-Service an, um dringende Wartungs- und Reinigungsbedürfnisse unserer geschätzten Kunden zu erfüllen.",
    },
    {
        question: "Bieten Sie umweltfreundliche Reinigungsoptionen an?",
        answer:
            "Ja, wir sind der ökologischen Nachhaltigkeit verpflichtet. Wir bieten umweltfreundliche Reinigungsprodukte und -methoden an, die sicher für Ihre Familie, Haustiere und die Umwelt sind und dennoch außergewöhnliche Reinigungsergebnisse liefern.",
    },
    {
        question: "Sind Ihre Mitarbeiter geschult und versichert?",
        answer:
            "Absolut. Alle unsere Teammitglieder durchlaufen gründliche Hintergrundüberprüfungen, umfassende Schulungen und sind voll versichert. Wir gewährleisten Professionalität, Expertise und Zuverlässigkeit in jeder Dienstleistung, die wir erbringen.",
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
