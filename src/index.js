import './styles/global.scss';
import './styles/tailwind.css';

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.close-btn');
  const haeder = document.querySelector('.heaeder-content');
  const content = document.querySelector('.main-content');

  


  const mobileMenu = document.querySelector('.mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    haeder.classList.add('blur');
    content.classList.add('blur');

      mobileMenu.classList.remove('blur');

  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    haeder.classList.remove('blur');
    content.classList.remove('blur');

  });

  const menuLinks = document.querySelectorAll('.mobile-menu__links a');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
    });
  });

});


console.log('Webpack is set up!');
