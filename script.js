import hamburgerMenu from "./hamburger.js";

const d = document;

// Inicialización directa de EmailJS
emailjs.init("SjO1Xf_HPHQgbHemB");

d.addEventListener("click", (e) => {
  // Excluye clicks en formularios
  if (!e.target.closest('form')) {
    hamburgerMenu(e, ".hidden_menu", ".menu_button");
  }
});

// Smooth Scrolling (código existente)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Contact Form
const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validación
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !service || !phone || !message) {
      alert("Por favor complete todos los campos obligatorios");
      return;
    }

    // Envío con EmailJS
    emailjs.send("service_2cgi42s","template_8aho7et");
    emailjs
      .send("service_2cgi42s", "template_8aho7et", {
        name: name,
        email: email,
        message: `Para el servicio:${service}\n\n${message}\n\nTeléfono: ${phone}`, // Formato mejorado
      })
      .then(
        () => {
          alert("¡Mensaje enviado! Te contactaré pronto.");
          contactForm.reset();
        },
        (error) => {
          console.error("Error de EmailJS:", error);
          alert("Error al enviar. Por favor intente nuevamente.");
        }
      );
  });
}