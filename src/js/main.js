import '../styles/main.scss'
import 'swiper/css'
import 'swiper/css/navigation'

// src/js/main.js

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.header__burger');
  const sidebar = document.querySelector('.sidebar');
  const closeBtn = document.querySelector('.sidebar__close');
  const overlay = document.querySelector('.overlay');

  const openMenu = () => {
    sidebar.classList.add('sidebar--active');
    overlay.classList.add('overlay--active');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    sidebar.classList.remove('sidebar--active');
    overlay.classList.remove('overlay--active');
    document.body.style.overflow = '';
  };

  if (burgerBtn) burgerBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  const menuLinks = document.querySelectorAll('.sidebar__link');
  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
    
      menuLinks.forEach(l => l.classList.remove('sidebar__link--active'));

      this.classList.add('sidebar__link--active');
    });
  });

  const langLinks = document.querySelectorAll('.sidebar__lang');
  langLinks.forEach(lang => {
    lang.addEventListener('click', function(e) {
      e.preventDefault();

      langLinks.forEach(l => l.classList.remove('sidebar__lang--active'));

      this.classList.add('sidebar__lang--active');
    });
  });
});