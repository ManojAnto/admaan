// Mobile menu toggle (class-based)
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn') || document.querySelector('.menu-btn');
  const navList = document.querySelector('nav ul');

  if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  }
});
