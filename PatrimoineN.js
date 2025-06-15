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