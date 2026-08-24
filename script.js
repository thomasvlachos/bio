function toggleMenu() {
  const menu = document.getElementById('menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

// Subtle scroll-reveal for ledger rows and stat cards
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
}
