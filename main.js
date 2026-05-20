history.scrollRestoration = "manual";
window.scrollTo(0, 0);

// Limpiar hash de URL para regresar al Inicio al recargar
if (window.location.hash) {
  history.replaceState("", document.title, window.location.pathname);
  window.scrollTo(0, 0);
}

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 110);
      }
    });
  },
  { threshold: 0.1 }
);
reveals.forEach((r) => observer.observe(r));

window.addEventListener("scroll", () => {
  document.querySelector("nav").style.boxShadow =
    window.scrollY > 50
      ? "0 4px 30px rgba(0,0,0,0.13)"
      : "0 2px 20px rgba(0,0,0,0.08)";
});

// NAV HAMBURGUESA
const navToggle = document.getElementById("navToggle");
const navMobileMenu = document.getElementById("navMobileMenu");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navMobileMenu.classList.toggle("open");
});

// Cerrar menú al hacer click en un link
navMobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("open");
    navMobileMenu.classList.remove("open");
  });
});

// Inicializa animación Lottie con ruta portátil
lottie.loadAnimation({
  container: document.getElementById("lottieMarathon"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "assets/lottie/Marathon.json",
});
