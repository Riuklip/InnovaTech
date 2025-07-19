import hamburgerMenu from "./hamburger.js";
const d=document;    
d.addEventListener("click",(e)=>{
    hamburgerMenu(e,".hidden_menu",".menu_button");
    })


(function () {
    // Inicializa EmailJS con tu User ID
    emailjs.init("KQwj_Sm-penUoskR0");
  })();

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector("nav ul");

  mobileMenuBtn.addEventListener("click", () => {
    navMenu.style.display =
      navMenu.style.display === "flex" ? "none" : "flex";
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (window.innerWidth < 768) {
          navMenu.style.display = "none";
        }
      }
    });
  });

  // Form Submission
  // Reemplaza el código del formulario por este:
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let mensaje = document.getElementById("message").value;
      let numero = document.getElementById("phone").value;
      let finalmsj = `${mensaje}
    Contacteme al: ${numero} `;
      // Obtén los datos del formulario
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        service: document.getElementById("service").value,
        message: finalmsj,
      };

      // Envía el correo
      emailjs.send("service_m6o29ew", "template_6zky109", formData).then(
        function (response) {
          alert("¡Mensaje enviado! Te contactaré pronto.");
          contactForm.reset();
        },
        function (error) {
          alert("Error al enviar: " + JSON.stringify(error));
        }
      );
    });
  }