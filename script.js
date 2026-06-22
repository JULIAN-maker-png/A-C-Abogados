// Activa animaciones suaves cuando cada bloque entra en pantalla.
const revealItems = document.querySelectorAll(".reveal, .reveal-card");

revealItems.forEach((item, index) => {
  if (item.classList.contains("reveal-card")) {
    item.style.setProperty("--delay", `${Math.min(index * 70, 280)}ms`);
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -60px",
  }
);

revealItems.forEach((item) => revealObserver.observe(item));
function enviarWhatsApp() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;
  const caso = document.getElementById("caso").value;
  const mensaje = document.getElementById("mensaje").value;

  const texto =
`Hola, me gustaría recibir asesoría jurídica.

Nombre: ${nombre}
Correo: ${correo}
Teléfono: ${telefono}
Tipo de caso: ${caso}

Descripción:
${mensaje}`;

  const numero = "573105599258";

  const url =
    `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}