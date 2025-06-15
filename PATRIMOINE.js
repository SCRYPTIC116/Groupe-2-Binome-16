window.addEventListener('load', () => {
  const Anim = document.getElementById('Anim');
  if (Anim) {
    Anim.addEventListener('animationend', () => {
      Anim.style.display = 'none';
    });
  }

  const intro = document.getElementById('intro');
  if (intro) {
    intro.addEventListener('transitionend', () => {
      intro.style.display = 'none';
    }, { once: true });

    setTimeout(() => {
      intro.classList.add('opacity-0');
    }, 3000);
  }
});

const mobileBtn = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', e => {
    e.stopPropagation();
    mobileMenu.classList.toggle('active');
    mobileBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('active'));
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.dans-menu')) {
      mobileMenu.classList.remove('active');
      mobileBtn.setAttribute('aria-expanded', 'false');
    }
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      mobileBtn.setAttribute('aria-expanded', 'false');
    });
  });
}