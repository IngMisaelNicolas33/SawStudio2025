// Mostrar el botón cuando el usuario ha bajado 20 píxeles desde la parte superior de la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Volver a la parte superior de la página cuando el usuario hace clic en el botón
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a'); // Selecciona todos los enlaces dentro del menú


    burgerMenu.addEventListener('click', function () {
        burgerMenu.classList.toggle('change');
        navLinks.classList.toggle('show');
    });
    // Agrega un evento de clic a cada enlace para cerrar el menú
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            burgerMenu.classList.remove('change'); // Cierra el menú hamburguesa
            navLinks.classList.remove('show'); // Oculta las opciones del menú
        });
    });
});


// Testimonios

let currentTestimonialIndex = 0;
  const totalTestimonials = document.querySelectorAll('.testimonial').length;
  const intervalTime = 5000; // Intervalo de tiempo en milisegundos (5 segundos)

  function showTestimonial(index) {
    const testimonials = document.querySelector('.testimonials');
    if (index < 0) {
      currentTestimonialIndex = totalTestimonials - 1;
    } else if (index >= totalTestimonials) {
      currentTestimonialIndex = 0;
    } else {
      currentTestimonialIndex = index;
    }
    const offset = -currentTestimonialIndex * 100;
    testimonials.style.transform = `translateX(${offset}%)`;
  }

  function prevTestimonial() {
    showTestimonial(currentTestimonialIndex - 1);
  }

  function nextTestimonial() {
    showTestimonial(currentTestimonialIndex + 1);
  }

  // Automáticamente cambia el testimonio cada cierto intervalo de tiempo
  setInterval(() => {
    nextTestimonial();
  }, intervalTime);

  function openWhatsApp() {
    var messageBox = document.getElementById("whatsapp-message");
    messageBox.classList.toggle("active");
  }