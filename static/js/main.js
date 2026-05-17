// ── Article reading progress bar
const progressBar = document.getElementById('progress-bar');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  });
}

// ── Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav  = document.querySelector('.mobile-nav');
if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
}

// ── Newsletter form
document.querySelectorAll('.newsletter-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.newsletter-submit');
    btn.textContent = 'Subscribed!';
    btn.style.background = '#aa3526';
    setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; form.reset(); }, 3000);
  });
});
