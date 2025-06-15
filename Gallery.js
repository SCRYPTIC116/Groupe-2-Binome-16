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
// Animation overlay
 window.addEventListener('load', () => {
const overlay = document.getElementById('intro-overlay');
setTimeout(() => {
  overlay.classList.add('hide');
  overlay.addEventListener('transitionend', () => {
 overlay.style.display = 'none';
  }, { once: true });
}, 3000);
 });

 // Gestion du clic sur une image pour ouvrir en plein écran
 const galleryImages = document.querySelectorAll('#gallery img');
 const fullscreenContainer = document.getElementById('fullscreen-viewer');
 const fullscreenImage = fullscreenContainer.querySelector('img');

 galleryImages.forEach(img => {
img.addEventListener('click', () => {
  fullscreenImage.src = img.src;
  fullscreenContainer.classList.remove('hidden');
});
 });

 // Fermer le plein écran en cliquant dessus
 document.getElementById('fullscreen-viewer').addEventListener('click', () => {
fullscreenContainer.classList.add('hidden');
 });

 // Menu mobile
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
  // Fermer après clic sur un lien
  mobileMenu.querySelectorAll('a').forEach(link => {
 link.addEventListener('click', () => {
mobileMenu.classList.remove('show');
mobileBtn.setAttribute('aria-expanded', 'false');
 });
  });
}
 });

 window.addEventListener('load', () => {
  const overlay = document.getElementById('intro-overlay');
  setTimeout(() => {
    overlay.classList.add('hide');
    overlay.addEventListener('transitionend', () => {
      overlay.style.display = 'none'; // cacher complètement après la transition
    }, { once: true });
  }, 3000);
});