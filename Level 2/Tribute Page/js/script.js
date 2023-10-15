let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector('.navbar');


menuIcon.onclick = () =>{
  menuIcon.classList.toggle('ri-close-fill');
  navBar.classList.toggle('active');
}

//--------------------------------sticky navbar--------------------------------------    
window.addEventListener("scroll", function() {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);


  menuIcon.classList.remove('ri-close-fill');
  navBar.classList.remove('active');
});

//----------------------------------scroll reveal-------------------------------------

ScrollReveal({ 
  // reset: true,
  distance: '100px',
  duration: 3000,
  delay: 200
});

ScrollReveal().reveal('.hero-text-content, .hero-img, .biography-content', { origin: 'top' });

ScrollReveal().reveal('.tribute-card, .features-text-content', { origin: 'left' });

ScrollReveal().reveal('.features-social-content', { origin: 'right' });
