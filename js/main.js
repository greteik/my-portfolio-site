document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

setTimeout(() => {
  targetElement.scrollIntoView({ behavior: 'smooth' });
}, 300);

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('menu--open')
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('menu--open')) {
    menu.classList.remove('menu--open');
  }
});

document.querySelectorAll('.menu__link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); 
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth' 
    });
    
    menu.classList.remove('menu--open');
  });
});