window.addEventListener('load', () => {
const splash = document.getElementById('splash');
splash.addEventListener('animationend', () => {
splash.style.display = 'none';
});
});
let slideIndex = 0;
showSlides();
function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
    slides[slideIndex].style.display = "block";
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 5000);
}
            // Animation d'ouverture
const introOverlay = document.getElementById('intro-overlay');
if (introOverlay) {
    setTimeout(() => {
        introOverlay.classList.add('opacity-0');
        
        introOverlay.addEventListener('transitionend', () => {
            introOverlay.style.display = 'none';
        }, { once: true });
    }, 3000);
}
// Gestion du menu mobile
 mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
        
if(mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    const isExpanded = mobileMenu.classList.contains('active');
    mobileMenuButton.setAttribute('aria-expanded', isExpanded);
});
            
 // Fermer le menu après clic sur un lien
 mobileMenu.querySelectorAll('a').forEach(link => {
link.addEventListener('click', function() {
mobileMenu.classList.remove('active');
mobileMenuButton.setAttribute('aria-expanded', 'false');
});
});
}
// Animation splash
window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  if (splash) {
    splash.addEventListener('animationend', () => {
      splash.style.display = 'none';
    });
  }

  const introOverlay = document.getElementById('intro-overlay');
  if (introOverlay) {
    setTimeout(() => {
      introOverlay.classList.add('opacity-0');
      introOverlay.addEventListener('transitionend', () => {
        introOverlay.style.display = 'none';
      }, { once: true });
    }, 3000);
  }

  // Slideshow
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    const slides = document.getElementsByClassName('mySlides');
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.add('hidden');
    }
    slides[slideIndex].classList.remove('hidden');
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 5000);
  }

  // Menu mobile
  const mobileBtn = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const expanded = !mobileMenu.classList.contains('hidden');
      mobileBtn.setAttribute('aria-expanded', expanded);
    });
    // Fermer le menu après clic
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
      // Mettre à jour l'attribut aria
      const expanded = mobileMenu.classList.contains('show');
      mobileBtn.setAttribute('aria-expanded', expanded);
    });

    // Fermer le menu après clic sur un lien
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
});