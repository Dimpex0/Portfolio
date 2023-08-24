let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const barsIcon = document.getElementsByClassName('fa-bars')[0];
const nav = document.querySelector('.nav');
const closeBtn = document.querySelector('.closebtn');

function expandNav() {
  barsIcon.style.display = 'none';
  nav.classList.remove(...nav.classList);
  nav.classList.add('nav');
  nav.classList.add('open');
  nav.style.display = 'flex';
  closeBtn.style.display = 'block';
}

function closeNav() {
  closeBtn.style.display = 'none';
  barsIcon.style.display = 'block';
  nav.style.display = 'none';
}

document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      if (closeBtn.style.display === 'block') {
        closeNav();
      }

      const targetSection = document.querySelector(this.getAttribute('href'));
      
      if (targetSection) {
          targetSection.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});