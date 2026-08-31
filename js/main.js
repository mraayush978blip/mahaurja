document.addEventListener('DOMContentLoaded', () => {
  // --- Language Toggle Logic ---
  const langToggleBtn = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('mahaurja-lang') || 'hi';
  
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (el.tagName === 'INPUT' && el.type === 'submit') {
          el.value = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });
    
    // Update button text
    if (langToggleBtn) {
      langToggleBtn.textContent = lang === 'hi' ? 'EN' : 'हिन्दी';
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }
  
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'hi' ? 'en' : 'hi';
      localStorage.setItem('mahaurja-lang', currentLang);
      applyLanguage(currentLang);
    });
  }
  
  // Apply on load
  applyLanguage(currentLang);

  // --- Mobile Menu Toggle ---
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // --- Navbar Scroll Effect ---
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- Scroll Animations ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // --- Dynamic Loading of Vanilla Tilt for 3D Cards ---
  const script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js";
  script.onload = () => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.2
    });
  };
  document.body.appendChild(script);
});
