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
document.addEventListener('DOMContentLoaded', () => {
  // Datos JSON de ejemplo con teléfono y email
  const teamData = [
      {
          imgSrc: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Eli Carlos",
          info: "Soy un Ingeniero graduado en Telecomunicaciones y Electrónica en la UCLV. Mi pasión es trabajar diseñando soluciones acordes a los problemas. Especializado en diseño de circuitos electrónicos, reparación de hardware, desarrollo de software y soluciones web personalizadas.",
          phone: "+5356096338",
          email: "eliclpere@gmail.com",
          ciudad: "Caibarien, Villa Clara"
      }
  ];

  const section = document.querySelector('.about');
  const template = section.querySelector('.about_template');
  
  // Limpiar sección antes de agregar nuevos elementos
  // section.innerHTML = '';
  
  // teamData.forEach(member => {
  //     // Clonar el contenido del template
  //     const clone = template.content.cloneNode(true);
      
  //     // Llenar los datos básicos
  //     const container = clone.querySelector('.container_devs');
  //     container.querySelector('img').src = member.imgSrc;
  //     container.querySelector('img').alt = `Foto de ${member.name}`;
  //     container.querySelector('.about_name').textContent = member.name;
  //     container.querySelector('.about_info').textContent = member.info;
  //     container.querySelector(".about_ciudad").textContent=member.ciudad;
  //     // Llenar los enlaces de contacto
  //     const phoneLink = container.querySelector('.about_phone');
  //     const emailLink = container.querySelector('.about_mail');
      
  //     phoneLink.href = `https://wa.me/${member.phone}`;
      
  //     emailLink.href = `mailto:${member.email}`;
    
  //     // Agregar al DOM
  //     section.appendChild(clone);
  // });
});