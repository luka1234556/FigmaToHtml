
//The show/hide effect UI/UX

const revealEls = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

revealEls.forEach(el => observer.observe(el));
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

//Burger menu for mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.heading-nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('open');
});