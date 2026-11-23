
document.addEventListener("DOMContentLoaded", () => {
  /* 1. Menú móvil */
  const botonMenu = document.querySelector(".menu-btn");
  const nav = document.querySelector("#menu-principal");
  if (botonMenu && nav) {
    botonMenu.addEventListener("click", () => {
      const abierto = nav.classList.toggle("abierto");
      botonMenu.setAttribute("aria-expanded", String(abierto));
      botonMenu.querySelector("img").src = abierto ? "assets/icons/icon-cerrar.svg" : "assets/icons/icon-menu.svg";
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("abierto");
      botonMenu.setAttribute("aria-expanded", "false");
      botonMenu.querySelector("img").src = "assets/icons/icon-menu.svg";
    }));
  }

  const anio = document.querySelector("#anio");
  if (anio) anio.textContent = new Date().getFullYear();

 
  const form = document.querySelector("#form-reserva");
  if (!form) return;
  const confirmacion = document.querySelector("#confirmacion");
  const fecha = form.querySelector("#fecha");
  if (fecha) fecha.min = new Date().toISOString().split("T")[0];

  const reglas = {
    nombre: v => v.trim().length >= 3,
    telefono: v => /^[0-9\s+()-]{7,15}$/.test(v.trim()),
    servicio: v => v !== "",
    fecha: v => v !== ""
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let primerError = null;
    Object.keys(reglas).forEach(nombre => {
      const input = form.elements[nombre];
      const campo = input.closest(".campo");
      const valido = reglas[nombre](input.value);
      campo.classList.toggle("invalido", !valido);
      input.setAttribute("aria-invalid", String(!valido));
      if (!valido && !primerError) primerError = input;
    });
    if (primerError) { confirmacion.classList.remove("visible"); primerError.focus(); return; }
    const nombre = form.elements.nombre.value.trim().split(" ")[0];
    confirmacion.textContent = `Listo, ${nombre}. Recibimos tu reserva y te escribiremos por WhatsApp para confirmarla.`;
    confirmacion.classList.add("visible");
    form.reset();
  });
});
