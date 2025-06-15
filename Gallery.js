// Fonction pour ouvrir une image en grand
function openImageModal(src, alt) {
  // Créer un élément modal si pas existant
  let modal = document.getElementById('imageModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.cursor = 'pointer';
    modal.style.zIndex = 9999;
    document.body.appendChild(modal);

    // Fermer la modal au clic
    modal.addEventListener('click', () => {
      modal.remove();
    });
  }

  // Ajouter l'image en grand dans la modal
  modal.innerHTML = `<img src="${src}" alt="${alt}" style="max-width:90%; max-height:90%; border-radius:10px; box-shadow:0 0 20px rgba(0,0,0,0.5); cursor:pointer;">`;
}

// Ajouter l'événement clic à toutes les images de la galerie
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.style.cursor = 'pointer'; // changer le curseur pour indiquer qu'on peut cliquer
  img.addEventListener('click', () => {
    openImageModal(img.src, img.alt);
  });
});

window.addEventListener('load', () => {
  const Anim = document.getElementById('Anim');
  if (Anim) {
    Anim.addEventListener('animationend', () => {
      Anim.style.display = 'none';
    });
  }

  const intro = document.getElementById('intro');
  if (intro) {
    // Ajout de la classe pour faire disparaître l'intro
    setTimeout(() => {
      intro.classList.add('fade-out');
    }, 3000);

    // Lors de la fin de la transition, cacher l'élément
    intro.addEventListener('transitionend', () => {
      intro.style.display = 'none';
    }, { once: true });
  }
});